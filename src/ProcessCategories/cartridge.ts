import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { CPUAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class Cartridge extends Category {
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
    const extraAttributes = extra as CPUAttr;
    const properties: Property[] = [
      {
        propId: 66950,
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
        propId: 66951,
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
        propId: 66952,
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
                    value: extraAttributes["نوع پردازنده"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66953,
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
                      extraAttributes.سری ?? extraAttributes["سری پردازنده"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66954,
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
                    value: extraAttributes.مدل,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66956,
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

                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["تعداد هسته"] ??
                        extraAttributes["تعداد هسته (Core)"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66957,
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
                      extraAttributes["تعداد رشته"] ??
                        extraAttributes["تعداد رشته "] ??
                        extraAttributes["تعداد رشته (Thread)"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 66974,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["فرکانس پایه"]
                    ),
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
        propId: 66979,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["توان مصرفی"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 67002,
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
                    value: extraAttributes["پردازنده گرافیکی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 67013,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["تعداد نمایشگر متصل همزمان"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        propId: 67020,
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
                    value: warranty.status ? 134123 : 134124,
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
        schemaId: "13BBA50D-2F39-4AF2-A532-F6E013050562",
        paramUrl: "/13BBA50D-2F39-4AF2-A532-F6E013050562/fa/پردازنده(سی پی یو)",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
