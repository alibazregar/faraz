import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { CCTVAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class IPCCTV extends Category {
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
    const extraAttributes = extra as CCTVAttr;

    const properties: Property[] = [
      {
        propId: 3086935,
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
        propId: 3086937,
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
        propId: 3086939,
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
                      extraAttributes.درگاه ??
                      extraAttributes["نوع درگاه"] ??
                      extraAttributes["نوع درگاه "],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086942,
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
                      extraAttributes["سرعت انتقال"] ??
                      extraAttributes["سرعت انتقال"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086958,
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
                    value:
                      extraAttributes["طول سیم"] ??
                      extraAttributes.طول ??
                      extraAttributes["طول کابل"] ??
                      extraAttributes["طول کابل در حالت کشیده"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086943,
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
                    value: warranty.status ? 1150443 : 1150444,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 3086905,
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
        schemaId: "1B6B9B83-FA20-476D-94E6-5C468EF14118",
        paramUrl: "/1B6B9B83-FA20-476D-94E6-5C468EF14118/fa/مبدل",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
