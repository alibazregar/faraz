import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { PowerAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class Power extends Category {
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
    const extraAttributes = extra as PowerAttr;
    const properties: Property[] = [
      {
        propId: 3086763,
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
        propId: 3086765,
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
        propId: 3086768,
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
                    value: this.removeAllPartsExceptNumber(
                      extraAttributes["تعداد فن"] ??
                        extraAttributes["تعداد فن "]
                    ),
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
                    value: extraAttributes["تعداد ریل 12 ولت"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086764,
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
        propId: 3086775,
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
                    value: extraAttributes.بازده,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086776,
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
                    value: extraAttributes["سایز فن"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086777,
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
                    value:
                      extraAttributes["نوع پاور"] ??
                      extraAttributes["نوع پاور "],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086779,
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
                    value: extraAttributes["استاندارد حفاظتی"],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        propId: 3086782,
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
                    value: warranty.status ? 1150427 : 1150428,
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
        schemaId: "F2EE8BE6-3A68-4BCB-AFF0-5324646E51C1",
        paramUrl: "/F2EE8BE6-3A68-4BCB-AFF0-5324646E51C1/fa/منبع-تغذیه",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
