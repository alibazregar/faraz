import { RawPost } from "../models/rawPost";
import { StringObject } from "../models/stringObject";
import { Image } from "../models/image";
import { BaseSchema } from "../models/BaseSchema";
import { Property } from "../models/property";
import { Warranty } from "../models/warranty";

export default abstract class Category {
  protected processPostExcerpt(excerpt: string): StringObject {
    const deletedUlString = excerpt.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, "$1");
    const items = deletedUlString
      .replace(/[\r\n\t]/g, "")
      .split(/<\/?li( [^>]+)?>/)
      .filter(Boolean);
    let object: StringObject = {};
    items.forEach((item) => {
      if (!/\S/.test(item)) {
        return;
      } else if (item.includes("=")) {
        return;
      } else {
        // if (this.areAllWordsPersian(item)) {
        //   const keyValue = item.split(":");

        //   if (keyValue.length === 2) {
        //     object[`${keyValue[1]}`] = keyValue[0];
        //   }
        // } else {
        const keyValue = item.split(":");

        if (keyValue.length === 2) {
          object[`${keyValue[0]}`] = keyValue[1];
        } else {
          object[`${keyValue[0]}`] = true;
        }
      }
      //   }
    });

    return object;
  }

  protected parseImage(string: string): Image[] {
    const images = string.split("|");
    let result: Image[] = [];
    images.forEach((image) => {
      let keyValues = image.split("!");
      let retVal: Image = {
        link: keyValues[0],
      };
      keyValues.shift();
      keyValues.forEach((keyValue) => {
        let array  = keyValue.split(":");
        //@ts-ignore
        retVal[array[0]] = array[1];
      });
      result.push(retVal);
    });
    return result;
  }
  //if json cannot detect farsi key-values
  //   private areAllWordsPersian(text: string): boolean {
  //     const persianPattern = /^[\u0600-\u06FF0-9\s]+$/;

  //     const words = text.split(/\s+/);

  //     for (const word of words) {
  //       if (!persianPattern.test(word)) {
  //         return false;
  //       }
  //     }

  //     return true;
  //   }
  protected processWarranty(
    warrantyValue: string | undefined,
    warrantyStatus: string | undefined
  ): Warranty {
    if (!warrantyStatus || !warrantyValue || warrantyStatus == "0|0|0") {
      return {
        status: false,
        avilableWarranty: {},
      };
    }
    let retVal: Warranty = {
      status: true,
      avilableWarranty: {},
    };
    const splitedWarantyStatus = warrantyStatus.split("|");
    const splitedWarantyValue = warrantyValue.split("|");
    if (splitedWarantyStatus[0] == "1") {
      retVal.avilableWarranty.faraz = splitedWarantyValue[0];
      splitedWarantyValue.shift();
    }
    if (splitedWarantyStatus[1] == "1") {
      retVal.avilableWarranty.companyWarranty = splitedWarantyValue[0];
      splitedWarantyValue.shift();
    }
    if (splitedWarantyStatus[2] == "0") {
      retVal.avilableWarranty.faraz = splitedWarantyValue[0];
      splitedWarantyValue.shift();
    }
    return retVal;
  }
  protected processCategory(string: string) {
    return string.split(">");
  }
  protected removeAllPartsExceptNumber(str:string):string{
    if(typeof str == "string"){
      return str.replace(/[^0-9]/g, "");
    }
    return ""
  }
  protected filterArrayByValues(dataArray: Property[]) {
    return dataArray.filter((item) => {
      const values = item.added[0]?.parts[0]?.values; // Safely access the values array
      if (!values) {
        return false; // If values is undefined or null, keep the object
      }
      // Check if all values are undefined, null, or empty strings
      const allEmptyOrNull = values.every(
        (val) =>
          val.value === "" ||
          val.value === undefined ||
          val.value === null ||
          val.value == "NaN * NaN * NaN"
      );
      return !allEmptyOrNull; // Return true if at least one value is not empty, undefined, or null
    });
  }
  async job(row: RawPost): Promise<BaseSchema> {
    let extraAttributes = this.processPostExcerpt(row.post_excerpt);
    let images = this.parseImage(row.images);
    let category = this.processCategory(row["tax:product_cat"]);
    let warranty = this.processWarranty(
      row["attribute:pa_گارانتی"],
      row["attribute_data:pa_گارانتی"]
    );
    row.post_excerpt = "";
    row.images = "";
    row["tax:product_cat"] = "";
    return this.process(extraAttributes, images, category, row, warranty);
  }
  abstract process(
    extraAttributes: StringObject,
    images: Image[],
    category: string[],
    row: RawPost,
    warranty: Warranty
  ): Promise<BaseSchema>;
}
