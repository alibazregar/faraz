import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { KeyBoardAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class Keyboard extends Category {
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
    const extraAttributes = extra as KeyBoardAttr;
    const properties: Property[] = [
      {
        propId: 67031,
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
        propId: 67032,
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
        propId: 67035,
        //wordid: 63132,
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
      // {
      //   propId: 67036,
      //   //wordid: 56152,
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
      //               value: this.removeAllPartsExceptNumber(
      //                 extraAttributes["منبع تغذیه"]
      //               ),
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   propId: 67037,
      //   //wordid: 63135,
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
      //               value:
      //                 extraAttributes["نوع اتصال"] ?? extraAttributes.اتصال ,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        propId: 67049,
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
                    value: extraAttributes["برد صفحه کلید"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 67061,
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

                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["طول کابل"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 67069,
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
                    value: warranty.status ? 134266 : 134267,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 67063,
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
        schemaId: "8153CCEC-3BC1-4178-A464-214E53B7C0B2",
        paramUrl: "/8153CCEC-3BC1-4178-A464-214E53B7C0B2/fa/مانیتور",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
