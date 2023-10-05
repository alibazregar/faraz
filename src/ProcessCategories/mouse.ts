import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { MouseAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class Mouse extends Category {
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
    //@ts-ignore
    warranty: Warranty
  ): Promise<BaseSchema> {
    const extraAttributes = extra as MouseAttr;
    const properties: Property[] = [
      {
        propId: 97813,
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
        propId: 97829,
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
        propId: 97814,
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
                    value: extraAttributes["نوع اتصال"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 97815,
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
        propId: 97816,
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
                    value: extraAttributes["نوع رابط"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 97817,
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
                    value: extraAttributes["محدوده دقت"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 97818,
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

                    value: extraAttributes["نوع حسگر"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 97819,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["تعداد کلیدها"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   propId: 14127,
      //   //wordid: 50994,
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

      //               value: warranty.status ? 22906 : 22907,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
    ];

    const result: BaseSchema = {
      data: {
        schemaId: "9F86D685-26B3-4579-90BA-0242ED0944D2",
        paramUrl: "/9F86D685-26B3-4579-90BA-0242ED0944D2/fa/schema_name",
        schemaVersion: "1.0.0",
        lid: 1,
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
