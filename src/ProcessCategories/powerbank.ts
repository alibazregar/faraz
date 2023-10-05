import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { PowerBankAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class PowerBank extends Category {
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
    const extraAttributes = extra as PowerBankAttr;
    const properties: Property[] = [
      {
        propId: 3086741,
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
        propId: 3086742,
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
      // {
      //   propId: 33281,
      //   //wordid: 63132,
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
      //               value: rawPost["attribute:pa_color"],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },

      // },
      {
        propId: 3086746,
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
                    value: extraAttributes["قابلیت فست شارژ"]
                      ? 1150424
                      : 1150423,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086747,
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
                    value: extraAttributes["کلاس وزنی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086748,
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
                    value: extraAttributes["نحوه نمایش میزان شارژ باتری"],
                  },
                ],
              },
            ],
          },
        ],
      },
      //THIS MAY BE NOT REQUIRED
      {
        propId: 3086749,
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

                    value: extraAttributes["ظرفیت اسمی"],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        propId: 3086750,
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
                      extraAttributes["تعداد درگاه خروجی"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086751,
        //wordid: 63139,
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
                    value: extraAttributes["محدوده ظرفیت"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086752,
        //wordid: 63139,
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
                      extraAttributes["شدت جریان خروجی"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086753,
        //wordid: 63139,
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
                      extraAttributes["شدت جریان ورودی"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086754,
        //wordid: 63139,
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
                      extraAttributes["ولتاژ ورودی"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086755,
        //wordid: 63139,
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
                      extraAttributes["ولتاژ خروجی"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 34136,
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
                    value: warranty.status ? 1150425 : 1150426,
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
        schemaId: "201788D5-E5E2-4D96-99BD-23CB65B788EE",
        paramUrl: "/201788D5-E5E2-4D96-99BD-23CB65B788EE/fa/پاور بانک",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
