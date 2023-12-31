import * as fs from "node:fs";
import {
  RawPost,
  //  , RawPostWithResponse
} from "./models/rawPost";
import { Categories } from "./models/categories";
// import Monitor from "./ProcessCategories/monitor";
import Category from "./ProcessCategories/category";
// import InkjetPrinter from "./ProcessCategories/InkjetPrinter";
// import LaserPrinter from "./ProcessCategories/laserPrinter";
import Keyboard from "./ProcessCategories/keyboard";
import Speaker from "./ProcessCategories/speaker";
import { RawPostWithResponse } from "./models/rawPost";
import axios from "axios";
import {
  InternalServerError,
  // InternalServerErrorType,
} from "./models/internalServerError";
//import { ValidationError, ValidationErrorType } from "./models/validationError";
import csvParser from "csv-parser";
//import { BaseSchema } from "./models/BaseSchema";
import Ram from "./ProcessCategories/ram";
import CPU from "./ProcessCategories/CPU";
import Microphone from "./ProcessCategories/microphone";
import MultiJobPrinter from "./ProcessCategories/multiJobPrinter";
import Mouse from "./ProcessCategories/mouse";
import Power from "./ProcessCategories/Power";
import Laptop from "./ProcessCategories/laptop";
import MousePad from "./ProcessCategories/mousepad";
import Motherboard from "./ProcessCategories/motherboard";
import Phone from "./ProcessCategories/phone";
import Headphone from "./ProcessCategories/headphone";
import Convertor from "./ProcessCategories/convertor";
import Projector from "./ProcessCategories/projector";
import Case from "./ProcessCategories/Case";
import AllInOne from "./ProcessCategories/allinone";
import ProcessorFan from "./ProcessCategories/processorFan";
// import DotMatrixPrinter from "./ProcessCategories/dotMatrixPrinter";
// import scanner from "./ProcessCategories/scanner";
// import SSD from "./ProcessCategories/ssd";
// import PrinterLabel from "./ProcessCategories/printerLabel";
// import ExternalHard from "./ProcessCategories/externalHard";
import InternalHard from "./ProcessCategories/internalHard";
import AnalogCCTV from "./ProcessCategories/analogCctv";
import IPCCTV from "./ProcessCategories/ipcctv";
import Bag from "./ProcessCategories/bag";
import Keep from "./ProcessCategories/keep";
import FlashMemory from "./ProcessCategories/flashmemory";
import NVR from "./ProcessCategories/NVR";
import AccessPoint from "./ProcessCategories/accesspoint";
import Router from "./ProcessCategories/router";
import PatchCord from "./ProcessCategories/patchCord";
import NetworkWrench from "./ProcessCategories/networkWrench";
import VoiceCard from "./ProcessCategories/voiceCard";

class WpToSchema {
  setCurrent(categoryArray: string[]): Category | undefined {
    let current;
    // if (categoryArray[3] == Categories.NetworkWrench) {
    //   return new NetworkWrench();
    // }
    // if (
    //   Categories.headset == categoryArray[3] ||
    //   categoryArray[3] == Categories.HandsFree
    // ) {
    //   return new Headphone();
    // }
    // const routerArray = [
    //   `${Categories.Router}`,
    //   `${Categories.Router2}`,
    //   `${Categories.Router3}`,
    //   `${Categories.Router4}`,
    // ];
    // if (
    //   routerArray?.includes(categoryArray[3]) ||
    //   routerArray?.includes(categoryArray[2])
    // ) {
    //   return new Router();
    // }
    // if (Categories.AnalogCCTV == categoryArray[3]) {
    //   return new AnalogCCTV();
    // }
    // if (Categories.PatchCord == categoryArray[3]) {
    //   return new PatchCord();
    // }
    // if (Categories.networkCCTV == categoryArray[3]) {
    //   return new IPCCTV();
    // }
    // if (Categories.ServerHard == categoryArray[3] || categoryArray[3]?.includes(Categories.ServerHard)) {
    //   return new InternalHard();
    // }
    // if (
    //   Categories.VoiceCard == categoryArray[3] ||
    //   Categories.VoiceCard1 == categoryArray[3]
    // ) {
    //   return new VoiceCard()
    // }
    // if (Categories.Laptop == categoryArray[0]) {
    //   return new Laptop();
    // }
    // if (categoryArray[1] == Categories.Projector) {
    //   return new Projector();
    // }
    // if (categoryArray[3] == Categories.Motherboard) {
    //   return new Motherboard();
    // }
    // if (
    //   categoryArray[3] == Categories.HandsFree ||
    //   categoryArray[3] == Categories.Headphone
    // ) {
    //   return new Headphone();
    // }
    // if (
    //   categoryArray[2] == Categories.Tablet ||
    //   (categoryArray[2]?.includes(Categories.MobileAndTablet) &&
    //     (categoryArray[3] == Categories.Phone ||
    //       categoryArray[3] == Categories.Mobile))
    // ) {
    //   return new Phone();
    // }
    if (categoryArray[3] == Categories.Case) {
      return new Case();
    }
    switch (categoryArray[2]) {
      // case Categories.NVR || Categories.NVR2:
      //   current = new NVR();
      //   break;
      // case Categories.AccessPoint:
      //   current = new AccessPoint();
      //   break;
      // case Categories.MemoryCard:
      //   current = new FlashMemory();
      //   break;
      // case Categories.Bag:
      //   current = new Bag();
      //   break;
      // case Categories.KeyBoard:
      //   current = new Keyboard();
      //   break;
      // case Categories.Speaker:
      //   current = new Speaker();
      //   break;
      // case Categories.ServerRam:
      //   current = new Ram();
      //   break;
      case Categories.Ram:
        current = new Ram();
        break;
    //   case Categories.Cpu:
    //     current = new CPU();
    //     break;
    //   case Categories.MousePad:
    //     current = new MousePad();
    //     break;
    //   case Categories.MultiJobPrinter:
    //     current = new MultiJobPrinter();
    //     break;
    //   case Categories.ProcessorFan:
    //     current = new ProcessorFan();
    //     break;
    //   case Categories.Keeper:
    //     current = new Keep();
    //     break;
    //   case Categories.MainParts:
    //     if (categoryArray[4] == Categories.Power) {
    //       current = new Power();
    //     }
    //     break;
    //   case Categories.AllInOne:
    //     return new AllInOne();
    //     break;
    //   case Categories.FlashMemory:
    //     current = new Microphone();
    //     break;
    //   case Categories.Accessories:
    //     if (categoryArray[3] == Categories.Microphone) {
    //       current = new Microphone();
    //     }
    //     if (categoryArray[3] == Categories.Mouse) {
    //       current = new Mouse();
    //     }
    //     break;
    //   case Categories.Convertor:
    //     current = new Convertor();
    //     break;

    //   case Categories.Monitor:
    //     current = new Monitor();
    //     break;
    //   case Categories.ExternalHard:
    //     current = new ExternalHard();
    //     break;
    //   case Categories.InternalHard:
    //     current = new InternalHard();
    //     break;
    //   case Categories.PrinterAndScanner:
    //     //      with or operation add other printers too (if have)
    //     if (categoryArray[2] == Categories.InkjetPrinter) {
    //       current = new InkjetPrinter();
    //       break;
    //     } else if (categoryArray[2] == Categories.LaserPrinter) {
    //       current = new LaserPrinter();
    //     } else if (categoryArray[2] == Categories.MultiJobPrinter) {
    //       //   this was not in schema
    //     } else if (categoryArray[2] == Categories.DotMatrixPrinter) {
    //       current = new DotMatrixPrinter();
    //     }
    //     //     SCANNERS
    //     else if (categoryArray[2] == Categories.Scanner) {
    //       current = new scanner();
    //     } else {
    //       return;
    //     }
    //     break;
    //   case Categories.PcParts:
    //     if (categoryArray[2] == Categories.InternalSSD) {
    //       current = new SSD(175270);
    //     } else if (categoryArray[2] == Categories.ExternalSSD) {
    //       current = new SSD(175271);
    //     }
    //     break;
    //   case Categories.PrinterEssentials:
    //     if (categoryArray[2] == Categories.PrinterLabel2) {
    //       current = new PrinterLabel();
    //     }
    //     break;
    }
    return current;
  }
  private hasPropertyWithValue(arr: [], targetValue: string): boolean {
    return arr.some((element) => element["title"] === targetValue);
  }
  private async readWpObject(path: string): Promise<RawPostWithResponse[]> {
    return new Promise(async (resolve, reject) => {
      const jsonArray = await fs.promises.readFile(
        "successfulfiles.json",
        "utf-8"
      );
      const resultArray = JSON.parse(jsonArray);
      let retVal: RawPostWithResponse[] = [];
      console.log(retVal);
      fs.createReadStream(path)
        .pipe(csvParser())
        .on("data", (row: RawPost) => {
          setTimeout(async () => {
            if (!row["tax:product_cat"]) {
              return;
            }
            const current = this.setCurrent(row["tax:product_cat"].split(">"));
            console.log("current:", current);

            if (current) {
              const result = await current.job(row);
              if (!result.data?.properties) {
                console.log("result1:", result);
                return;
              } else {
              }
              if (
                this.hasPropertyWithValue(
                  resultArray,
                  result.data?.properties[0].added[0].parts[0].values[0]
                    .value as string
                )
              ) {
                return;
              }
              try {
                console.log("result: ", result?.data?.properties);
                const response = await axios.post(
                  "http://basispanel.ir/schema/basiscore/81B123A6-384C-4356-9203-C350B275D3CE/editobject",
                  result,
                  { insecureHTTPParser: true }
                );
                
                retVal.push({
                  result,
                  rawPost: row,
                  response: response.status,
                });
              } catch (error) {
                retVal.push({ result, rawPost: row, err: error });
                console.log(error);
              }
            }
          }, 5000);
        })
        .on("end", async () => {
          resolve(retVal);
        })
        .on("error", (error: Error) => {
          reject(new InternalServerError(error.message));
        });
    });
  }
  removeSpaces = (str: string) => {
    return str.replace(/\s/g, "");
  };
  static async WpToSchema(path: string, resultPath: string): Promise<void> {
    const wpToSchema = new WpToSchema();
    const retVal = await wpToSchema.readWpObject(path);
    const jsonString = JSON.stringify(retVal);
    console.log(retVal.length);
    await fs.promises.writeFile(resultPath, jsonString);
  }
}
WpToSchema.WpToSchema("./faraz.csv", "faraz5.json").then(() => {
  console.log("JOB DONE");
});
