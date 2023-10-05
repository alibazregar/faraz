import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { LaptopAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class laptop extends Category {
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
    const extraAttributes = extra as LaptopAttr;
    //@ts-ignore
    const properties: Property[] = [
      {
        propId: 3086787,
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
        propId: 3086789,
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
      ,
      //this was not on selector
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
      //               value: extraAttributes["نوع پنل"],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        propId: 3086792,
        //wordid: 56152,
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
                    value: extraAttributes["سازنده پردازنده"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086793,
        //wordid: 63135,
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
                    value: extraAttributes["سری پردازنده"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086795,
        //wordid: 61173,
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
                    value: extraAttributes["مدل پردازنده"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086797,
        //wordid: 63136,
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
                    value: extraAttributes["حافظه کش"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086798,
        //wordid: 63137,
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
                      extraAttributes.رم ?? extraAttributes["حافظه رم"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086800,
        //wordid: 63140,
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
                      extraAttributes["حافظه داخلی"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086803,
        //wordid: 63141,
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
                      extraAttributes["پردازنده گرافیکی"] ??
                      extraAttributes["پردازنده‌ گرافیکی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086804,
        //wordid: 63141,
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
                      extraAttributes["حافظه اختصاصی پردازنده گرافیکی"] ??
                      extraAttributes["حافظه اختصاصی پردازنده گرافیکی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086805,
        //wordid: 63141,
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
                      extraAttributes["اندازه صفحه نمایش"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086806,
        //wordid: 63141,
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
                    value: extraAttributes["نوع صفحه نمایش"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086809,
        //wordid: 63141,
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
                    value: extraAttributes["نوع پنل"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086817,
        //wordid: 63141,
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
                    value: extraAttributes["اقلام همراه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086818,
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
                    value: warranty.status ? 1150429 : 1150430,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 67640,
        //@ts-console.warn(this //wordid not valid for "ابعاد");
        //wordid: 50187,
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
        schemaId: "B2275695-5016-4F20-8969-86060BD93BA3",
        paramUrl: "/B2275695-5016-4F20-8969-86060BD93BA3/fa/لپ تاپ",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
