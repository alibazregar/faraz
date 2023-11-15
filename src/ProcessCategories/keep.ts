import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { KeepAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class Keep extends Category {
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
    const extraAttributes = extra as KeepAttr;
    const properties: Property[] = [
      {
        propId: 30525,
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
        propId: 30526,
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
        propId: 30540,
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
                    value: rawPost["attribute_data:pa_color"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 30545,
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
                    value: warranty.status ? 61192 : 61193,
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
        schemaId: "509BF09C-680D-4A89-AB39-77AF882D5E6C",
        paramUrl: "/509BF09C-680D-4A89-AB39-77AF882D5E6C/fa/پایه-نگهدارنده",
        schemaVersion: "1.0.0",
        lid: 1,
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
