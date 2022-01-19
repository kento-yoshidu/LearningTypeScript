// required

interface Person {
  name?: string;
  age?: number
}

/*
const obj: Required<Person> = {
  name: "kento"
}
// error TS2741: Property 'age' is missing in type '{ name: string; }' but required in type 'Required<Person>'.
*/

// readonly

interface Person2 {
  name: string;
  age: number;
}

const obj2: Readonly<Person2> = {
  name: "kento",
  age: 34,
}

// obj2.name = "takashi"
// error TS2540: Cannot assign to 'name' because it is a read-only property.

// 再帰的に読み取り専用にはしてくれない

interface Person3 {
  info: {
    name: string;
    age: number;
  };
}

const obj3: Readonly<Person3> = {
  info: {
    name: "kento",
    age: 34,
  }
}

obj3.info.name = "takashi"
console.log(obj3)
// { info: { name: 'takashi', age: 34 } }

// as constを使う

const obj4 = {
  info: {
    name: "kento",
    age: 34,
  } 
} as const

// obj4.info.name = "takashi"
// error TS2540: Cannot assign to 'name' because it is a read-only property.

// 全てをオプションにする

interface Person5 {
  name: string;
  age: number;
}

const partialPerson: Partial<Person5> = {}

console.log(partialPerson)
//=> {}

// オブジェクト型を作る

type Person6 = Record<"id" | "name" | "hobby", string>

const person6: Person6 = {
  id: "001",
  name: "kento",
  hobby: "soccer"
}

// キーをピックアップする

interface Person7 {
  id: number;
  name: string;
  living: boolean;
  hobby: string;
  country: string;
}

const person7: Pick<Person7, "id" | "name"> = {
  id: 1,
  name: "kento"
}

// プロパティを除く

interface Person8 {
  id: number;
  name: string;
  living: boolean;
  hobby: string;
  country: string;
}

const person8: Omit<Person8, "hobby" | "country"> = {
  id: 1,
  name: "#kento",
  living: false,
}

// Exclude ユニオン型から任意の型を除いたユニオン型を返す

type Grade = "A" | "B" | "C" | "D" | "E"

const grade: Exclude<Grade, "D" | "E"> = "A"
const grade2: Exclude<Grade, "D" | "E"> = "B"
const grade3: Exclude<Grade, "D" | "E"> = "C"
// const grade4: Exclude<Grade, "D" | "E"> = "D"
// error TS2322: Type '"D"' is not assignable to type '"A" | "B" | "C"'.

// Extract ユニオン型のうち任意の型を抽出したユニオン型を返す

type newGrade = Extract<Grade, "A" | "B">

const newObj: newGrade = "A"
const newObj2: newGrade = "B"
// const newObj3: newGrade = "C"
// error TS2322: Type '"C"' is not assignable to type '"A" | "B"'.


