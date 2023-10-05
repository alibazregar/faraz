import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { GraphicCardAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class GraphicCard extends Category {
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
    const extraAttributes = extra as GraphicCardAttr;
    const properties: Property[] = [
      {
        propId: 99310,
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
        propId: 99312,
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
        propId: 99314,
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
                    value:
                      extraAttributes["رابط‌ها"] ?? extraAttributes["رابط‌ها "],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99315,
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
                    value:
                      extraAttributes["نوع حافظه"] ??
                      extraAttributes["نوع حافظه "],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99316,
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
                    value: extraAttributes["حجم حافظه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99317,
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

                    value: extraAttributes["HDMI "],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99318,
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
                    value: extraAttributes["DisplayPort "],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99319,
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
                    value: extraAttributes.سازنده,
                  },
                ],
              },
              {
                part: 2,
                values: [
                  {
                    //id: 0,
                    value: 134042,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99320,
        //wordid: 63140,
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
                    value: extraAttributes["نسل پردازنده"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99321,
        //wordid: 63141,
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
                    value: extraAttributes["مدل پردازنده"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99322,
        //wordid: 63141,
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
                    value: extraAttributes["باس رابط"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99323,
        //wordid: 63141,
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
                    value: extraAttributes["فرکانس افزایشی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99324,
        //wordid: 63141,
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
                    value: extraAttributes["حداکثر رزولوشن"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99325,
        //wordid: 63141,
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
                    value: extraAttributes.تراشه,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99326,
        //wordid: 63141,
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
                    value: extraAttributes["پاور پیشنهادی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99327,
        //wordid: 63141,
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
                    value: extraAttributes["تعداد فن"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99328,
        //wordid: 63141,
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
                    value: extraAttributes.نورپردازی,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99329,
        //wordid: 63141,
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
                    value: extraAttributes["رابط حافظه رم"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99330,
        //wordid: 63141,
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
                    value: extraAttributes["سرعت حافظه (مگاهرتز)"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99331,
        //wordid: 63141,
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
                    value: extraAttributes["فرکانس حافظه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99332,
        //wordid: 63141,
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
                    value: extraAttributes["موتور پردازش گرافیکی GPU"],
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
        schemaId: "12113A14-48B7-4CE5-9159-DC4F6A51F85B",
        paramUrl: "/12113A14-48B7-4CE5-9159-DC4F6A51F85B/fa/schema_name",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
