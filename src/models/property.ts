export type Value = {
  //id: number;
  value: number | string;
};
type Part = {
  part: number;
  values: Value[];
};
type Answer = {
  //id: number;
  parts: Part[];
};

export type Property = {
  propId: number;
  //wordid: number;
  multi: boolean;
  added: Answer[];
};
