import { Property } from "./property";
interface Data{      
          schemaId: string;
          paramUrl: string;
          schemaVersion: "1.0.0";
          lid: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
          usedForId: number;
          properties: Property[];
 }
//  interface Options {
//    tableName: "answer.data";
//    keyFieldName: "";
//    statusFieldName: "";
//    mergeType: 0;
//  }
//  interface Source {
//       options: Options;
//       data: Data[];
//  }
// export interface BaseSchema  {
//   setting: {
//     keepalive: true;
//   };
//   sources: Source[];
// }
export interface BaseSchema {
  data : Data
}