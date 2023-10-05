import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { CaseAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class Case extends Category {
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
    const extraAttributes = extra as CaseAttr;
    const properties: Property[] = [
      {
        propId: 3087017,
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
        propId: 3087019,
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
        propId: 3087021,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["ارتفاع خنک‌کننده پردازنده"] ??
                        extraAttributes["حداکثر ارتفاع خنک کننده"] ??
                        extraAttributes["حداکثر ارتفاع خنک‌کننده پردازنده "]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3087022,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["طول کارت گرافیک"] ??
                        extraAttributes["حداکثر طول کارت گرافیک"] ??
                        extraAttributes["حداکثر طول کارت گرافیک "]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3087025,
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

                    value: extraAttributes["پاور قابل نصب"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3087026,
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

                    value: extraAttributes["درگاه‌های ارتباطی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3087027,
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
                    value:
                      extraAttributes["تعداد جايگاه‌ فن"] ??
                      extraAttributes["تعداد جایگاه فن"] ??
                      extraAttributes["تعداد جایگاه‌ فن"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3087028,
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
                    value:
                      extraAttributes["تعداد فن نصب‌ شده"] ??
                      extraAttributes["تعداد فن نصب‌شده"] ??
                      extraAttributes["تعداد فن نصب‌ شده"] ??
                      extraAttributes["تعداد فن قابل نصب در پشت"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3087032,
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
                    value: extraAttributes["جنس بدنه"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3087033,
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
                    value: warranty.status ? 1150455 : 1150456,
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
        schemaId: "D47AB72A-77D6-489B-98AD-D6AA0C169B6C",
        paramUrl: "/D47AB72A-77D6-489B-98AD-D6AA0C169B6C/fa/کیس",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
