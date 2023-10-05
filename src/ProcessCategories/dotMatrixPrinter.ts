import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { DotMatrixPrinterAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class DotMatrixPrinter extends Category {
  constructor() {
    super();
  }

  override async process(
    extra: StringObject,
    //@ts-ignore
    images: Image[],
    //@ts-ignore
    category: string[],
    rawPost: RawPost,
    warranty: Warranty
  ): Promise<BaseSchema> {
    const extraAttributes = extra as DotMatrixPrinterAttr;
    const properties: Property[] = [
      {
        propId: 26172,
        //wordid: 63228,
        multi: false,
        added: [
          {
            //id: 0,
            parts: [
              {
                part: 1,
                values: [
                  {
                    //id: 0,
                    value: rawPost.post_name,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 26173,
        //wordid: 94112,
        multi: false,
        added: [
          {
            //id: 0,
            parts: [
              {
                part: 1,
                values: [
                  {
                    //id: 0,
                    value:
                      rawPost["tax:pwb-brand"] ??
                      rawPost["attribute:pa_brand"] ??
                      rawPost["attribute_data:pa_brand"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 26177,
        //wordid: 50087,
        multi: false,
        added: [
          {
            //id: 0,
            parts: [
              {
                part: 1,
                values: [
                  {
                    //id: 0,
                    value: rawPost["attribute:pa_color"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 26182,
        //wordid: 53264,
        multi: false,
        added: [
          {
            //id: 0,
            parts: [
              {
                part: 1,
                values: [
                  {
                    //id: 0,
                    value:
                      extraAttributes["رزولوشن چاپ"] ??
                      extraAttributes["رزولوشن چاپ(dpi)"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 26185,
        //wordid: 51478,
        multi: false,
        added: [
          {
            //id: 0,
            parts: [
              {
                part: 2,
                values: [
                  {
                    value:
                      extraAttributes["سرعت چاپ رنگی"]?.replace(/\D/g, "") ??
                      extraAttributes["سرعت چاپ سیاه و سفید"]?.replace(
                        /\D/g,
                        ""
                      ),
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   propId: 26213,
      //   //wordid: 94966,
      //   multi: false,
      //   added: [
      //     {
      //       //id: 0,
      //       parts: [
      //         {
      //           part: 1,
      //           values: [
      //             {
      //               //id: 0,
      //               value: extraAttributes["نوع پورت ارتباط به کامپیوتر"],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        propId: 26235,
        //wordid: 50994,
        multi: false,
        added: [
          {
            //id: 0,
            parts: [
              {
                part: 1,
                values: [
                  {
                    //id: 0,
                    value: warranty.status ? 51786 : 51787,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 26193,
        //@ts-console.warn(this //wordid not valid for "ابعاد");
        //wordid: 52956,
        multi: false,
        added: [
          {
            //id: 0,
            parts: [
              {
                part: 1,
                values: [
                  {
                    //id: 0,
                    value: `${parseInt(rawPost.height) / 10} * ${
                      parseInt(rawPost.length) / 10
                    } * ${parseInt(rawPost.width) / 10}`,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    console.log(
      extraAttributes["رزولوشن چاپ"] ?? extraAttributes["رزولوشن چاپ(dpi)"]
    );
    const result: BaseSchema = {
      data: {
        schemaId: "CE68A04A-5FD6-4470-9B0D-FEA29E66CD35",
        paramUrl: "/CE68A04A-5FD6-4470-9B0D-FEA29E66CD35/fa/پرینتر-سوزنی",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
