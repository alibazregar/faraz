import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { MotherboardAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class Motherboard extends Category {
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
    const extraAttributes = extra as MotherboardAttr;
    const properties: Property[] = [
      {
        propId: 99175,
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
        propId: 99177,
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
        propId: 99179,
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
                    value: extraAttributes["فرم فاکتور"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99180,
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

                    value: extraAttributes["تعداد اسلات حافظه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99181,
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

                    value: extraAttributes.چیپست,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99183,
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

                    value: extraAttributes["پیکربندی حافظه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99187,
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
                      extraAttributes["تعداد سوکت پردازنده"] ??
                      extraAttributes["تعداد سوکت پردازنده"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99193,
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

                    value: extraAttributes["حداکثر حافظه پشتیبانی شده"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99194,
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
                      extraAttributes["نوع رم"] ?? extraAttributes["نوع رم "],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99208,
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

                    value: extraAttributes["برد تغذیه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99224,
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

                    value: extraAttributes["قابلیت‌های مادربرد"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 99229,
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

                    value: warranty.status ? "دارد" : "ندارد",
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
        schemaId: "5B012C45-E42B-460A-B0C3-DE6B56975880",
        paramUrl: "/5B012C45-E42B-460A-B0C3-DE6B56975880/fa/مادربرد",
        schemaVersion: "1.0.0",
        lid: 1,
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
