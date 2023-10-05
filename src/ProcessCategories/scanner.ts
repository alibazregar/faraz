import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { ScannerAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default class scanner extends Category {
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
    const extraAttributes = extra as ScannerAttr;
    let scanSpeed =
      extraAttributes["سرعت اسکن"] ??
      extraAttributes["سرعت اسکن سیاه و سفید"] ??
      extraAttributes["سرعت اسکن سیاه‌سفید"];
    let pageSize =
      extraAttributes["سایز اسکن"]
        ?.replace(/[^A-Za-z0-9]/g, "")
        ?.replace(/\s/g, "") ??
      extraAttributes.سایزاسکن
        ?.replace(/[^A-Za-z0-9]/g, "")
        ?.replace(/\s/g, "");
    let colorScanSpeed =
      extraAttributes["سرعت اسکن رنگی"] ??
      extraAttributes["سرعت اسکن رنگی(سرعت فیدر)"] ??
      extraAttributes["سرعت اسکن"];
    let adf = extraAttributes.ظرفیتADF ?? extraAttributes["کاغذکش(ADF)"];
    const properties: Property[] = [
      {
        propId: 18708,
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
        propId: 18709,
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
        propId: 18752,
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

      // {
      //   propId: 18711,
      //   //wordid: 94270,
      //   multi: false,
      //   added: [
      //     {
      //       //id: 0,
      //       parts: [
      //         {
      //           part: 1,
      //           values: [
      //             {
      //               //id: 0,
      //               value: extraAttributes["نوع اسکنر"],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        propId: 18712,
        //wordid: 52360,
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
                    value: extraAttributes["تکنولوژی اسکن"]?.includes("CCD")
                      ? 32974
                      : extraAttributes["تکنولوژی اسکن"]?.includes("CIS")
                      ? 32975
                      : "",
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   propId: 18713,
      //   //wordid: 94962,
      //   multi: false,
      //   added: [
      //     {
      //       //id: 0,
      //       parts: [
      //         {
      //           part: 1,
      //           values: [
      //             {
      //               //id: 0,
      //               value: extraAttributes["ورودی اسناد"],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        propId: 18719,
        //wordid: 52366,
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

                    value: scanSpeed?.replace(/[^0-9]/g, ""),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 18720,
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

                    value: colorScanSpeed?.replace(/[^0-9]/g, ""),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 18721,
        //wordid: 52368,
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

                    value: extraAttributes.سایزاسکن,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 18722,
        //wordid: 52444,
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
                    value: adf?.replace(/[^0-9]/g, ""),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 18724,
        //wordid: 52370,
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
                    value: extraAttributes["عمق اسکن رنگی"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 18730,
        //wordid: 52375,
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
                      extraAttributes["تعداد رنگ اسکن سیاه‌وسفید"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 18735,
        //wordid: 51837,
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
                      pageSize === "A0"
                        ? 33004
                        : pageSize === "A1"
                        ? 33005
                        : pageSize === "A2"
                        ? 33006
                        : pageSize === "A3"
                        ? 33007
                        : pageSize === "A4"
                        ? 33008
                        : pageSize === "A5"
                        ? 33009
                        : pageSize === "A6"
                        ? 33010
                        : pageSize === "A7"
                        ? 33011
                        : pageSize === "A8"
                        ? 33012
                        : pageSize === "B0"
                        ? 33013
                        : pageSize === "B1"
                        ? 33014
                        : pageSize === "B2"
                        ? 33015
                        : pageSize === "B3"
                        ? 33016
                        : pageSize === "B4"
                        ? 33017
                        : pageSize === "B5"
                        ? 33018
                        : pageSize === "B6"
                        ? 33019
                        : pageSize === "B7"
                        ? 33020
                        : pageSize === "B8"
                        ? 33021
                        : pageSize === "C1"
                        ? 33022
                        : pageSize === "C2"
                        ? 33023
                        : pageSize === "C3"
                        ? 33024
                        : pageSize === "C4"
                        ? 33025
                        : pageSize === "C6"
                        ? 33026
                        : pageSize === "C7"
                        ? 33027
                        : pageSize === "C8"
                        ? 33028
                        : pageSize === "C9"
                        ? 33029
                        : pageSize,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 18740,
        //wordid: 52381,
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
                    value: extraAttributes["سیستم‌عامل سازگار"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 18757,
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
        propId: 18749,
        //@ts-console.warn(this //wordid not valid for "ابعاد");
        //wordid: 52385,
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
        schemaId: "BA56E52B-99DA-4730-9278-7EC23BE08306",
        paramUrl: "/BA56E52B-99DA-4730-9278-7EC23BE08306/fa/اسکنر",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
