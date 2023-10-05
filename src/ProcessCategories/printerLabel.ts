import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { PrinterLabelAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class PrinterLabel extends Category {
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
    const extraAttributes = extra as PrinterLabelAttr;
    const properties: Property[] = [
      {
        propId: 21712,
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
        propId: 21713,
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
        propId: 21754,
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
        propId: 21726,
        //wordid: 94984,
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
                      extraAttributes["ریبون‌های سازگار"]?.includes("وکس") &&
                      extraAttributes["ریبون‌های سازگار"]?.includes("رزین")
                        ? 41785
                        : extraAttributes["ریبون‌های سازگار"]?.includes("رزین")
                        ? 41786
                        : extraAttributes["ریبون‌های سازگار"]?.includes("وکس")
                        ? 41784
                        : "",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 21756,
        //@ts-console.warn(this //wordid not valid for "ابعاد");
        //wordid: 52761,
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
        propId: 21760,
        //wordid: 50580,
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

                    value: warranty.status ? 41891 : 41892,
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
        schemaId: "C738B6C4-5DFD-4713-A210-6C9D78A20B20",
        paramUrl: "/C738B6C4-5DFD-4713-A210-6C9D78A20B20/fa/label",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,

        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
