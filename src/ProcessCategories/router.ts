import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import {RouterAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class Router extends Category {
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
    const extraAttributes = extra as RouterAttr;
    const properties: Property[] = [
      {
        propId: 3087134,
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
        propId: 3087136,
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
        propId: 3087139,
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
                    value: extraAttributes["درگاه‌های ارتباطی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3087141,
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

                    value: extraAttributes["منبع تغذیه"],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        propId: 3087142,
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

                    value: extraAttributes["آنتن خارجی"],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        propId: 3087143,
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
                    value: warranty.status ? 1150473 : 1150474,
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
        schemaId: "33B18459-F349-48AF-A2DC-C484DF9BA20B",
        paramUrl: "/33B18459-F349-48AF-A2DC-C484DF9BA20B/fa/روتر",
        schemaVersion: "1.0.0",
        lid: 1,
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
