import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { LaserPrinterAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class LaserPrinter extends Category {
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
    const extraAttributes = extra as LaserPrinterAttr;
    const properties: Property[] = [
      {
        propId: 15737,
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
        propId: 15738,
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
        propId: 15741,
        //wordid: 50045,
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
        propId: 15742,
        //wordid: 94880,
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
                      extraAttributes["نوع چاپ"] == " سیاه و سفید"
                        ? 26777
                        : 26778,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 15743,
        //wordid: 51478,
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
                      extraAttributes["سایز چاپ"] == "A3"
                        ? 26781
                        : extraAttributes["سایز چاپ"] == "A4"
                        ? 26780
                        : extraAttributes["سایز چاپ"] == "A5"
                        ? 26781
                        : 26780,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 15744,
        //wordid: 51480,
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

                    value: extraAttributes["وضوح چاپ"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 15749,
        //wordid: 51483,
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
                      extraAttributes["سرعت چاپ سیاه و سفید و رنگی"] ??
                      extraAttributes["سرعت چاپ سیاه و سفید"] ??
                      extraAttributes["سرعت چاپ مشکی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 15751,
        //wordid: 51831,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["حافظه پرینتر"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 15753,
        //wordid: 51488,
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
                      extraAttributes["توان کار ماهانه"] ??
                      extraAttributes["توان کار ماهانه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 15762,
        //wordid: 51836,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["ظرفیت سینی کاغذ"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   propId: 15765,
      //   //wordid: 51837,
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
        propId: 15794,
        //wordid: 50578,
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
                    value: warranty.status ? 26895 : "",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 15792,
        //@ts-console.warn(this //wordid not valid for "ابعاد");
        //wordid: 51838,
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
    const result: BaseSchema = {
      data: {
        schemaId: "6D6E7883-4808-4194-A3D1-1388911147C0",
        paramUrl: "/6D6E7883-4808-4194-A3D1-1388911147C0/fa/پرینتر-لیزری",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
