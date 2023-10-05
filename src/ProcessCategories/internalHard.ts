import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { InternalHardAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class InternalHard extends Category {
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
    const extraAttributes = extra as InternalHardAttr;
    const headSize =
      extraAttributes["سایز هد"] ?? extraAttributes["سایز هد هارد"];
    const properties: Property[] = [
      {
        propId: 66859,
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
        propId: 66860,
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
                      rawPost["tax:pwb-brand"] ?? rawPost["attribute:pa_brand"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66864,
        //wordid: 50045,
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
      {
        propId: 66861,
        //wordid: 60531,
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
                    value: extraAttributes["سری ساخت"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66867,
        //wordid: 60533,
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
                      extraAttributes["ظرفیت هارد دیسک"] ??
                      extraAttributes.ظرفیت,
                  },
                ],
              },
              {
                part: 2,
                values: [
                  {
                    //id: 0,

                    value: 133882,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66869,
        //wordid: 94962,
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
                      extraAttributes["بافر (حافظه کش)"]?.replace(/\D/g, "") ??
                      extraAttributes["حافظه کش"]?.replace(/\D/g, "") ??
                      extraAttributes.کش?.replace(/\D/g, ""),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66874,
        //wordid: 60538,
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
                    value: this.removeAllPartsExceptNumber(headSize),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66875,
        //wordid: 52681,
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
                    value: extraAttributes["سرعت چرخش"]?.replace(/\D/g, ""),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66879,
        //wordid: 60542,
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
                      extraAttributes["سرعت انتقال اطلاعات"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66887,
        //wordid: 60550,
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
                      extraAttributes["میانگین زمان جستجو"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66890,
        //wordid: 60553,
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
                      extraAttributes["میانگین تاخیر"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66899,
        //wordid: 60561,
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
                    value: extraAttributes["حداکثر تحمل شوک"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66939,
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

                    value: warranty.status ? 134016 : 134017,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66934,
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
                    value: `${parseInt(rawPost.height)} * ${parseInt(
                      rawPost.length
                    )} * ${parseInt(rawPost.width)}`,
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
        schemaId: "CB3F93D1-4BB2-4FB1-9EA5-5B47D1F906EB",
        paramUrl: "/CB3F93D1-4BB2-4FB1-9EA5-5B47D1F906EB/fa/هارد-اینترنال",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
