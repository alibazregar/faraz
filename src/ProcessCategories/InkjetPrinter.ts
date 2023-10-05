import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { InkjetPrinterAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class InkjetPrinter extends Category {
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
    const extraAttributes = extra as InkjetPrinterAttr;
    const properties: Property[] = [
      {
        propId: 14063,
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
        propId: 14064,
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
        propId: 14067,
        //wordid: 52502,
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
      // {
      //   propId: 67549,
      //   //wordid: 94262,
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
      //               value: extraAttributes["تکنولوژی چاپ"],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        propId: 14071,
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
                      extraAttributes["نوع چاپ"] == "سیاه و سفید"
                        ? 22755
                        : 22756,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 14074,
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

                    value:
                      extraAttributes["رزولوشن چاپ"] ??
                      extraAttributes["رزولوشن چاپ (dpi)"] ??
                      extraAttributes["رزولوشن چاپ پرینتر "] ??
                      extraAttributes["رزولوشن چاپ(dpi)"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 14077,
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
                    value: extraAttributes["سرعت چاپ سیاه و سفید"]?.replace(
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
      {
        propId: 14078,
        //wordid: 51484,
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
                      extraAttributes["سرعت چاپ"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 14082,
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

                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["توان چاپ ماهانه"] ??
                        extraAttributes["توان کار ماهانه"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   propId: 14083,
      //   //wordid: 51489,
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
      //               value: extraAttributes["سایز چاپ"],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        propId: 14091,
        //wordid: 51496,
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
                    value: extraAttributes["ظرفیت ورودی کاغذ"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 14095,
        //wordid: 51499,
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
                      extraAttributes["کارکرد کارتریج مشکی"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   propId: 14095,
      //   //wordid: 51565,
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
      //               value: extraAttributes["کارکرد کارتریج رنگی"],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        propId: 14127,
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

                    value: warranty.status ? 22906 : 22907,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 14125,
        //@ts-console.warn(this //wordid not valid for "ابعاد");
        //wordid: 51517,
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
        schemaId: "A50F240E-6318-479D-8FE5-FBD308D217B6",
        paramUrl: "/A50F240E-6318-479D-8FE5-FBD308D217B6/fa/پرینتر-جوهر-افشان",
        schemaVersion: "1.0.0",
        lid: 1,
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
