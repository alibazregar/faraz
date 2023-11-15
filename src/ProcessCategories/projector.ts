import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { ProjectorAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class Projector extends Category {
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
    const extraAttributes = extra as ProjectorAttr;

    const properties: Property[] = [
      {
        propId: 21645,
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
        propId: 21646,
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
        propId: 21652,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes.روشنایی
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 21656,
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

                    value:
                      extraAttributes["ابعاد تصویر"] ??
                      extraAttributes["اندازه تصویر"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 21658,
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

                    value:
                    this. removeAllPartsExceptNumber(                      extraAttributes["طول عمر لامپ"] ??
                      extraAttributes["طول عمر لامپ نرمال"])
,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 21668,
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

                    value: extraAttributes["سایز نمایشگر"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 21674,
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

                    value: extraAttributes["فاصله تا پرده نمایش"],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        propId: 21680,
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

                    value: rawPost["attribute_data:pa_color"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086954,
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
                    value: warranty.status ? 41701 : "",
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
        schemaId: "856BC2A7-D2C4-472A-88C1-92564812EEB6",
        paramUrl: "/856BC2A7-D2C4-472A-88C1-92564812EEB6/fa/ویدئو-پروژکتور",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
