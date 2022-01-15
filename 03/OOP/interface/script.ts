interface Person {
  name: string;
  age: number;
}

const p: Person = {name: "kento", age: 34}

const pArray: Person[] = [{name: "kento", age: 34}, {name: "kanako", age: 30}]

// クラスで実装する時は`implements`を使う

class PersonClass implements Person {
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  name: string;
  age: number
}

// https://qiita.com/suin/items/3b58e2151a29db0735b0

// readonlyにできる

interface Person2 {
  readonly name: string;
  age: number;
}

const p2: Person2 = {name: "takashi", age: 30}

// p2.name = "kouji"
// error TS2540: Cannot assign to 'name' because it is a read-only property.

console.log(p2.age = 60)
//=> 60

// interfaceを継承して新たにinterfaceを定義することができる

interface Person3 {
  name: string;
  age: number;
}

interface GreatPerson3 extends Person3 {
  flying: boolean
}

const gp: GreatPerson3 = {
  name: "takashi",
  age: 24,
  flying: true
}

// 型の宣言し直し

// stringから文字列リテラルに
interface ChangeProperty extends Person3 {
  name: "Name";
  age: number
}

// string→numberなどはできない
/*
interface NoGoodChange extends Person3 {
  name: number;
  age: string;
}
error TS2430: Interface 'NoGoodChange' incorrectly extends interface 'Person3'.
Types of property 'name' are incompatible.
Type 'number' is not assignable to type 'string'.
*/

// https://www.wakuwakubank.com/posts/756-typescript-in-typeof-keyof/

type A = {
  aaa: string
}

type B = A | {
  bbb: string
}

const obj: B = {
  aaa: "aaa",
  bbb: "bbb"
}

console.log(obj)