const sample = {
  name: "kento",
  age: 30
}

type Obj = typeof sample

/*
const newObj: Obj = {
  name: "takashi",
  age: 40,
  living: true,
}
// error TS2322: Type '{ name: string; age: number; living: boolean; }' is not assignable to type '{ name: string; age: number; }'.
// Object literal may only specify known properties, and 'living' does not exist in type '{ name: string; age: number; }'.
*/

// keyof プロパティ名を型として返す

type Person = {
  name: string;
  age: number;
}

type PersonKey = keyof Person

const newObj: PersonKey = "name"
const newObj2: PersonKey = "age"
// const newObj3: PersonKey = "hogehoge"
// error TS2322: Type '"hogehoge"' is not assignable to type 'keyof Person'.



