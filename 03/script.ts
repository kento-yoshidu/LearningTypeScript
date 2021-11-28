/*
## 変数宣言

const num = 1
let str = "1"

let num = 1
num = 2
//=> 2

const num = 1
num = 2
// Cannot assign to 'num' because it is a constant.ts(2588)

const obj = {}
obj = {id: 1}
// Cannot assign to 'obj' because it is a constant.ts(2588)

const obj = {id: 1}
obj.id = 2
console.log(obj.id)
//=> 2

## 型アノテーション

const num: number = 1
const str: string = "string"
const bool: boolean = true
const nul: null = null
const unde: undefined = undefined
const big: bigint = 100n
const arr: [] = []
const numArr: number[] = [1,2,3]
const obj: object = {}
const obj2: { id: number } = {id: 1}

// 数値型か文字列型を代入できる
const numOrString: number | string = "1"

// 3種類のうち、いずれかの文字列を代入できる
const janken: "goo" | "choki" | "par" = "goo"

// 数値型か文字列型を配列に代入できる
const numOrStrArr: (number|string)[] = [1, "2"]

const a: unknown = "hello"

if (typeof a === "string") {
  console.log(a.toUpperCase())
  //=> HELLO
}

const a: unknown = "hello"

console.log((a as string).toUpperCase())
//=> HELLO

const obj:
  {
    id: number;
    name: string;
  } = {
    id: 1,
    name: "kento"
  }

interface Obj {
  id: number
  name: string
}

const myObj: Obj = {
  id: 1,
  name: "kento"
}

interface Obj {
  square(num: number): number
  // func(num: number) => number
}

const myObj: Obj = {
  square(num: number) {
    return num * num
  }
}

interface Obj {
  readonly id: number
}

const myObj: Obj = {
  id: 1
}

myObj.id = 2
//=> error TS2540: Cannot assign to 'id' because it is a read-only property.

interface Obj {
  id: number
  name: string
}

const myObj: Readonly<Obj> = {
  id: 1,
  name: "lken"
}

myObj.id = 2
//=> error TS2540: Cannot assign to 'id' because it is a read-only property.

interface Obj {
  [key: string]: string;
}

const myObj: Obj = {
  0: "Hello",
}

## オブジェクトの型について


let obj: object

obj = {}
obj = []
obj = /0-9/

// obj = 1
//=> error TS2322: Type 'number' is not assignable to type 'object'.
// obj = "1"
//=> error TS2322: Type 'string' is not assignable to type 'object'.
// obj = true
//=> error TS2322: Type 'boolean' is not assignable to type 'object'.
// obj = null
//=> error TS2322: Type 'null' is not assignable to type 'object'.
// obj = undefined
//=> error TS2322: Type 'undefined' is not assignable to type 'object'.

let obj: object

obj = new Number(1) //=> [Number: 1]
obj = new String("Hello") //=> [String: 'Hello']
obj = new Boolean(true) //=> [Boolean: true]


let obj: Object

obj = 1
obj = "str"
obj = true
obj = {}

// obj = null
//=> error TS2322: Type 'null' is not assignable to type 'Object'.
// obj = undefined
//=> error TS2322: Type 'undefined' is not assignable to type 'Object'.

let obj: {}

obj = {
  id: 1
}

interface Props {
  id: number
  myName: string
  live: true
}

const {id, myName, live}: Props = { id: 1, myName: "Kento", live: true}

console.log(id) //=> 1
console.log(myName) //=> Kento
console.log(live) //=> true

## 配列

const arr: number[] = [1, 2, 3]
const arr2: Array<number> = [4, 5, 6]

const arr = [1, 2, 3,]
const num: number = arr[10]
//=> error TS2322: Type 'number | undefined' is not assignable to type 'number'.

const arr: readonly number[] = [1, 2, 3]
arr[0] = 100
// error TS2542: Index signature in type 'readonly number[]' only permits reading.

const arr2: ReadonlyArray<number> = [4, 5 ,6]
arr2[0] = 100
// error TS2542: Index signature in type 'readonly number[]' only permits reading

const arr: ReadonlyArray<number> = [1, 2, 3]
arr.push(4)
// error TS2339: Property 'push' does not exist on type 'readonly number[]'.
console.log(arr)


const arr: number[] = [1, 2, 3]
const arr2: number[] = arr

console.log(arr2)
//=> [ 1, 2, 3, 4 ]

const arr: readonly number[] = [1, 2, 3]
const arr2: number[] = arr
// error TS4104: The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.

const arr: number[] = [1, 2, 3]
const arr2: readonly number[] = arr

console.log(arr2)

## タプル


const arr: [number, string, boolean] = [1, "string", true]

## 列挙型


enum Position {
  Top,
  right,
  bottom,
  left
}

console.log(Position.Top) //=> 0
console.log(Position.right) //=> 1
console.log(Position.bottom) //=> 2
console.log(Position.left) //=> 3

//このように型アノテーションできる。この時、`列挙型.プロパティ`という形で代入する。

// const p: Position = Position.Top

// ただ、通知も代入できる。それどころか、プロパティに存在しない値まで代入できる。

const p: Position = 1

console.log(p)

const p2: Position = 10

console.log(p2)
//=> 10

// このような形を**数値列挙型**という。

enum Position {
  top,
  right,
  bottom,
  left
}

// 任意の数値を代入することができる。

enum Position2 {
  top = 10, //=> 10
  right, //=> 11
  bottom, //=> 12
  left //=> 13
}

## 文字列列挙型

enum Strings {
  One = "One",
  Two = "Two",
  Three = "Three",
  Four = "Four"
}

// これはOKだが
// const str: Strings = Strings.One //=> One

//これはNG

const str: Strings = "One"
// error TS2322: Type '"One"' is not assignable to type 'Strings'.

## ユニオン型

let framework: "React" | "Vue" | "Svalte"

framework = "JQuery"
// error TS2322: Type '"JQuery"' is not assignable to type '"React" | "Vue" | "Svalte"'.

// 配列のユニオン型

const arr: (string | number)[] = ["one", "two", "three"]
//=> [ 'one', 'two', 'three' ]

const arr2: (string | number)[] = [1, 2, 3]
//=> [ 1, 2, 3 ]

// ごちゃ混ぜにもできる
const arr3: (string | number)[] = [1, "two", 3]
//=> [ 1, 'two', 3 ]

// 文字列のみの配列か数値のみの配列を指定するには以下のようにする
const arr4: string[] | number[] = [1, "two", 3]
// error TS2322: Type '(string | number)[]' is not assignable to type 'string[] | number[]'.

// 絞り込み

function StringOrNull () {
  if (Math.random() * 10 < 5) {
    return "Hello"
  } else {
    return null
  }
}

console.log(StringOrNull().toUpperCase())
// error TS2531: Object is possibly 'null'.

*/

// 文字列かnullを返す関数
function StringOrNull () {
  if (Math.random() * 10 < 5) {
    return "Hello"
  } else {
    return null
  }
}

// どちらかを受け取る
const result: string | null = StringOrNull()

if (typeof result === "string") {
  console.log(result.toUpperCase())
} else {
  console.log('nullでした')
}



/*
## 型アサーション

const str: string = 1
// error TS2322: Type 'number' is not assignable to type 'string'.


## widening Literal Types


const myName = "Kento"

const obj = {
  myName
}

obj.myName = "yoshiko"

console.log(obj.myName)
//=> yoshiko

const myName = "kento"

const obj = {
  myName
} as const

obj.myName = "yoshiko"
// error TS2540: Cannot assign to 'myName' because it is a read-only property.

*/




