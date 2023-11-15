import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { AccessPointAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class AccessPoint extends Category {
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
    //@ts-ignore
    const extraAttributes = extra as AccessPointAttr;
    const properties: Property[] = [
      {
        propId: 3087111,
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
        propId: 3087113,
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
        propId: 3087115,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["سرعت انتقال داده‌ها"] ??
                        extraAttributes["سرعت انتقال دیتا"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3087116,
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
                      extraAttributes["استاندارد ها"] ??
                      extraAttributes["استانداردهای بی‌سیم"],
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
        schemaId: "F6632943-5D02-46B6-96FB-A50D1A54C641",
        paramUrl: "/F6632943-5D02-46B6-96FB-A50D1A54C641/fa/اکسس پوینت بی سیم",
        schemaVersion: "1.0.0",
        lid: 1,
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
