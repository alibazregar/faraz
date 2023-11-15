import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { VoiceCardAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class VoiceCard extends Category {
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
    const extraAttributes = extra as VoiceCardAttr;
    const properties: Property[] = [
      {
        propId: 70616,
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
        propId: 70617,
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
      // },
      {
        propId: 70626,
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
                      extraAttributes["رابط اتصال"] ??
                      extraAttributes.رابط ??
                      extraAttributes["نوع رابط"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 70629,
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
                    value: extraAttributes["پردازنده صوتی  "],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 70630,
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
                    value:
                      extraAttributes["نرخ نمونه برداری"] ??
                      extraAttributes["نرخ نمونه‌برداری پخش صدا"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 70637,
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

                    value: extraAttributes["نسبت سیگنال به نویز"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 70651,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["تعداد پورت ها"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        propId: 70637,
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
                    value: extraAttributes["نسبت سیگنال به نویز"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 70695,
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
                    value: warranty.status ? 140015 : "",
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
        schemaId: "12D7E3FE-784D-4F9C-BBF7-59851DBBCB3E",
        paramUrl: "/12D7E3FE-784D-4F9C-BBF7-59851DBBCB3E/fa/کارت-صدا",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
