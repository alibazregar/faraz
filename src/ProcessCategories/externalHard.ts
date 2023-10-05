import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { ExternalHardAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class ExternalHard extends Category {
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
    const extraAttributes = extra as ExternalHardAttr;
    const properties: Property[] = [
      {
        propId: 98871,
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
        propId: 98873,
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
        propId: 98905,
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
        propId: 98875,
        //wordid: 94539,
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
        propId: 98876,
        //wordid: 62337,
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

                    value: extraAttributes.ظرفیت,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98878,
        //wordid: 98984,
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

                    value: extraAttributes["نوع درگاه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98880,
        //wordid: 94966,
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
        propId: 98881,
        //wordid: 98988,
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
                    value: extraAttributes["سرعت انتقال داده‌ها"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98882,
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
                    value:
                      extraAttributes["سايز هد"] ?? extraAttributes["سایز هد"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98889,
        //wordid: 97106,
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
                    value: extraAttributes.فرمت,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98891,
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
                    value: warranty.status
                      ? Object.values(warranty.avilableWarranty).join("|")
                      : "ندارد",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98892,
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
      {
        propId: 98874,
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
                    value: 175299,
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
        schemaId: "6C256B1D-121B-41C4-90E5-96D93A9887AC",
        paramUrl: "/6C256B1D-121B-41C4-90E5-96D93A9887AC/fa/هارد-اکسترنال",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
