import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { SSDAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class SSD extends Category {
  ssdType: 175270 | 175271;
  constructor(ssdType: 175270 | 175271) {
    super();
    this.ssdType = ssdType;
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
    const extraAttributes = extra as SSDAttr;
    const properties: Property[] = [
      {
        propId: 98821,
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
        propId: 98823,
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
        propId: 98859,
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
        propId: 98824,
        //wordid: 94256,
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
                    value: this.ssdType,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99827,
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

                    value:
                      extraAttributes["رابط اتصال"] ??
                      extraAttributes["رابط اتصالی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98826,
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
                      extraAttributes.ظرفیت ??
                      extraAttributes["ظرفیت حافظه داخلی"] ??
                      extraAttributes["ظرفیت حافظه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98830,
        //wordid: 97097,
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
                      extraAttributes["سرعت خواندن"] ??
                      extraAttributes["سرعت خواندن (ترتیبی)"] ??
                      extraAttributes["سرعت خواندن اطلاعات"] ??
                      extraAttributes["سرعت خواندن اطلاعات به صورت ترتيبی"] ??
                      extraAttributes["سرعت خواندن اطلاعات ترتیبی"] ??
                      extraAttributes["سرعت خواندن ترتیبی اطلاعات"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98831,
        //wordid: 52367,
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
                      extraAttributes["سرعت نوشتن"] ??
                      extraAttributes["سرعت نوشتن (ترتیبی)"] ??
                      extraAttributes["سرعت نوشتن ترتیبی"] ??
                      extraAttributes["سرعت نوشتن اطلاعات ترتیبی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98835,
        //wordid: 97101,
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

                    value: extraAttributes["نوع حافظه فلش"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98836,
        //wordid: 97102,
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
                      extraAttributes["میانگین طول عمر (MTBF)"] ??
                      extraAttributes["میانگین عمر MTBF"] ??
                      extraAttributes["میانگین عمر- MTBF"] ??
                      extraAttributes["میانگین عمر"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98837,
        //wordid: 97103,
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
                    value: extraAttributes["تکنولوژی تراشه حافظه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98838,
        //wordid: 98996,
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
                    value: extraAttributes["نوع حافظه کش"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98842,
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
                    value:
                      extraAttributes["میزان مقاومت شوک"] ??
                      extraAttributes["حداکثر میزان مقاومت در برابر شوک "],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98860,
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

                    value: warranty.status ? 175288 : "",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 98846,
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
        schemaId: "81924DDE-9FB2-43CD-A304-E3C54601E7EF",
        paramUrl: "/81924DDE-9FB2-43CD-A304-E3C54601E7EF/fa/ssd",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
