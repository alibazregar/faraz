import { RawPost } from "../models/rawPost";
import { BaseSchema } from "../models/BaseSchema";
import Category from "./category";
import {
  BultAnalogCCTVAttr,
  DamAnalogCCTVAttr,
  SpeedDomAnalogCCTVAttr,
} from "../models/extraAttributes";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

let bultCCTV = "دوربین بالت AHD";
let damCCTV = " دوربین دام AHD";
let speedDamCCTV = " دوربین اسپید دام AHD";
export default class AnalogCCTV extends Category {
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
    //@ts-ignore
    let result: BaseSchema = {};
    switch (category[2].split("|")[0]) {
      case bultCCTV:
        result = await this.processBaltCCTV(
          extra,
          images,
          category,
          rawPost,
          warranty
        );
        break;
      case damCCTV:
        result = await this.processDamCCTV(
          extra,
          images,
          category,
          rawPost,
          warranty
        );
        break;
      case speedDamCCTV:
        result = await this.processSpeedDomCCTV(
          extra,
          images,
          category,
          rawPost,
          warranty
        );
        break;
    }
    return result;
  }
  async processDamCCTV(
    extra: StringObject,
    //@ts-ignore
    images: Image[],
    //@ts-ignore
    category: string[],
    rawPost: RawPost,
    warranty: Warranty
  ): Promise<BaseSchema> {
    const extraAttributes = extra as DamAnalogCCTVAttr;

    const properties: Property[] = [
      {
        propId: 20168,
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
        propId: 20170,
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
        propId: 20189,
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
                    value: extraAttributes["برد دید در شب"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 20194,
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
                    value: extraAttributes["فاصله کانونی"],
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
                    value: warranty.status ? 37284 : "",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 20210,
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
        schemaId: "CF5238E9-6B1C-4869-B272-C4CE0C3EBA82",
        paramUrl: "/CF5238E9-6B1C-4869-B272-C4CE0C3EBA82/fa/دوربین دام آنالوگ",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
  async processBaltCCTV(
    extra: StringObject,
    //@ts-ignore
    images: Image[],
    //@ts-ignore
    category: string[],
    rawPost: RawPost,
    //@ts-ignore
    warranty: Warranty
  ): Promise<BaseSchema> {
    const extraAttributes = extra as BultAnalogCCTVAttr;

    const properties: Property[] = [
      {
        propId: 20033,
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
        propId: 20035,
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
        propId: 20075,
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
        schemaId: "70CA98CE-87B8-4C31-BACF-78983F1683A3",
        paramUrl: "/70CA98CE-87B8-4C31-BACF-78983F1683A3/fa/دوربین بولت آنالوگ",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
  async processSpeedDomCCTV(
    extra: StringObject,
    //@ts-ignore
    images: Image[],
    //@ts-ignore
    category: string[],
    rawPost: RawPost,
    //@ts-ignore
    warranty: Warranty
  ): Promise<BaseSchema> {
    const extraAttributes = extra as SpeedDomAnalogCCTVAttr;

    const properties: Property[] = [
      {
        propId: 19892,
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
        propId: 19894,
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
        propId: 19909,
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
                      extraAttributes["تعداد IR LED"]
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 19916,
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
                    value: extraAttributes["دید در شب"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        propId: 19937,
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
        schemaId: "418E2859-AD78-4B12-AB27-6B64F1A36F93",
        paramUrl:
          "/418E2859-AD78-4B12-AB27-6B64F1A36F93/fa/دوربین اسپید دام آنالوگ",
        lid: 1,
        schemaVersion: "1.0.0",
        usedForId: -1,
        properties: this.filterArrayByValues(properties),
      },
    };
    return result;
  }
}
