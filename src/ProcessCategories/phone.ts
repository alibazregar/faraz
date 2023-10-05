import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { PhoneAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class Phone extends Category {
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
    const extraAttributes = extra as PhoneAttr;
    //@ts-ignore
    const properties: Property[] = [
      {
        propId: 3086864,
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
        propId: 3086866,
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
        propId: 3086870,
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
                    value: extraAttributes["فناوری صفحه‌نمایش"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086871,
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
                    value: extraAttributes["ظرفیت رم"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086878,
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
                    value: extraAttributes.پردازنده,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086882,
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
                    value: extraAttributes["ظرفیت رم"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086881,
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
                    value: extraAttributes["حافظه داخلی"],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        propId: 3086888,
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
                    value: extraAttributes["دوربین جلو"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086889,
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
                    value: extraAttributes["دوربین سلفی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086894,
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
                    value: extraAttributes["نسخه سیستم عامل"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086895,
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
                    value: extraAttributes.باطری,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086897,
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
                    value: warranty.status ? 1150438 : 1150437,
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
        schemaId: "421DFB82-7BF6-462E-90AC-1D617F01BCAB",
        paramUrl: "/421DFB82-7BF6-462E-90AC-1D617F01BCAB/fa/موبایل",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
