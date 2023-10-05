import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import { MultiJobPrinterAttr } from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property, Value } from "../models/property";
import { Warranty } from "../models/warranty";

export default class MultiJobPrinter extends Category {
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
    const extraAttributes = extra as MultiJobPrinterAttr;
    const jobs: number[] = [];
    if (extraAttributes["نوع کاربری"]?.includes("پرینت")) {
      jobs.push(35690);
    }
    if (extraAttributes["نوع کاربری"]?.includes("اسکن")) {
      jobs.push(35693);
    }
    if (extraAttributes["نوع کاربری"]?.includes(" کپی")) {
      jobs.push(35691);
    }
    if (extraAttributes["نوع کاربری"]?.includes("فکس")) {
      jobs.push(35692);
    }
    let jobValues: Value[] = [];
    for (let index in jobs) {
      jobValues.push({
        value: jobs[index],
      });
    }
    if (jobValues.length == 0) {
      jobValues.push({ value: "" });
    }
    const properties: Property[] = [
      {
        propId: 19789,
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
        propId: 19790,
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
        propId: 19866,
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
        propId: 15742,
        //wordid: 94880,
        multi: false,
        added: [
          {
            //id: 0,
            parts: [
              {
                part: 1,
                values: jobValues,
              },
            ],
          },
        ],
      },
      {
        propId: 19796,
        //wordid: 51478,
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
                      extraAttributes["سایز چاپ"] == "A3"
                        ? 35701
                        : extraAttributes["سایز چاپ"] == "A4"
                        ? 35700
                        : extraAttributes["سایز چاپ"] == "A5"
                        ? 35699
                        : "",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 19794,
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

                    value: extraAttributes["تکنولوژی چاپ"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 19794,
        //wordid: 51483,
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

                    value: extraAttributes["تکنولوژی چاپ"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 19798,
        //wordid: 51831,
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
                      extraAttributes["سرعت چاپ سیاه و سفید"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 19808,
        //wordid: 51488,
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
                      extraAttributes["توان کار ماهانه"] ??
                        extraAttributes["توان کار ماهانه"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 19817,
        //wordid: 51836,
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
                    value: extraAttributes["رزولوشن چاپ"],
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   propId: 15765,
      //   //wordid: 51837,
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
      //               value: extraAttributes["نوع پورت ارتباط به کامپیوتر"],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        propId: 19862,
        //@ts-console.warn(this //wordid not valid for "ابعاد");
        //wordid: 51838,
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
        schemaId: "C88B75EB-F3FA-4C09-8BA6-4BA75AE24CBF",
        paramUrl: "/C88B75EB-F3FA-4C09-8BA6-4BA75AE24CBF/fa/دستگاه چند کاره",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
