## 変数宣言

`const`か`let`を使って変数宣言を行う。

```ts
const num = 1
let str = "1"
```

`let`は**再代入**が可能。また、変数宣言だけして、後から初期化することも可能。

```ts
let num = 1
num = 2
//=> 2

let str
str = "Hello World"
```

`const`は再代入不可。

```ts
const num = 1
num = 2
// Cannot assign to 'num' because it is a constant.ts(2588)

const obj = {}
obj = {id: 1}
// Cannot assign to 'obj' because it is a constant.ts(2588)
```

ただし、オブジェクトの値の書換は可能。

```ts
const obj = {id: 1}
obj.id = 2
console.log(obj.id)
//=> 2
```

## 型アノテーション

変数宣言時、変数の方を明示的に宣言する。TypeScriptが**型類推**してくれるので、あまり使わない。

```typescript
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
```

また、**ユニオン型**と言って、いずれかの値を指定する型アノテーションもできる。

```ts
// 数値型か文字列型を代入できる
const numOrString: number | string = "1"

// 3種類のうち、いずれかの文字列を代入できる
const janken: "goo" | "choki" | "par" = "goo"

// 数値型か文字列型を配列に代入できる
const numOrStrArr: (number|string)[] = [1, "2"]
```

## unknown型

実行するまで型が分からない時に指定する型。ラッパーオブジェクトのメソッドを実行しようとするとエラーになる。

```ts
const a: unknown = "hello"

console.log(a.toUpperCase())
//=> error TS2571: Object is of type 'unknown'.
```

`typeof`を使った型ガードによって、型を推定する。

```ts
const a: unknown = "hello"

if (typeof a === "string") {
  console.log(a.toUpperCase())
  //=> HELLO
}
```

もしくは、`as`で型アサーションを行う。

```ts
const a: unknown = "hello"

console.log((a as string).toUpperCase())
//=> HELLO
```

## オブジェクトの型アノテーション

```ts
const obj:
  {
    id: number;
    name: string;
  } = {
    id: 1,
    name: "kento"
  }
```

**interface**を使った方が分かりやすい。再利用もできる。

```ts
interface Obj {
  id: number
  name: string
}

const myObj: Obj = {
  id: 1,
  name: "kento"
}

console.log(myObj)

interface Obj {
  id: number
  name: string
}

const myObj: Obj = {
  id: 1,
  name: "kento"
}
```

メソッドも型定義できる。

```ts
interface Obj {
  square(num: number): number
  // func(num: number) => number
}

const myObj: Obj = {
  square(num: number) {
    return num * num
  }
}
```

## readonly

オブジェクトは`const`で指定しても、プロパティの書換が可能だが、`readonly`を用いることで読み取り専用にできる。

```ts
interface Obj {
  readonly id: number
}

const myObj: Obj = {
  id: 1
}

myObj.id = 2
//=> error TS2540: Cannot assign to 'id' because it is a read-only property.
```

ユーティリティ型のReadonlyを使えば、全てのプロパティを`readonly`にできる。

```ts
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
```

## インデックスシグネチャー

```ts
interface Obj {
  [key: string]: string;
}

const myObj: Obj = {
  0: "Hello",
  hello: "Hello"
}

```

[Typescript(インデックスシグネチャ) - 駆け足エンジニアの記録](https://tsuboi99553758.hatenablog.com/entry/2020/09/07/104603)


## オブジェクトの型について

`object`は、オブジェクトだけ（つまり、プリミティブ以外）を代入できる。

```ts
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
```

なお、プリミティブ型について、リテラルではなくコンストラクター関数を呼び出し作成した値はオブジェクトであり、代入可能である（通常、コンストラクター関数は使用しないため参考まで）。


```ts
let obj: object

obj = new Number(1) //=> [Number: 1]
obj = new String("Hello") //=> [String: 'Hello']
obj = new Boolean(true) //=> [Boolean: true]
```

`Object`はインターフェースであり、オブジェクト型はもちろん、ラッパーオブジェクトを持つ数値型、文字列型、真偽値型も代入可能。null、undefinedは不可。

```ts
let obj: Object

obj = 1
obj = "str"
obj = true
obj = {}

obj = null
//=> error TS2322: Type 'null' is not assignable to type 'Object'.
obj = undefined
//=> error TS2322: Type 'undefined' is not assignable to type 'Object'.
```

一部のプリミティブ型が代入できてしまうため、使う理由はなさそう。

`Object`と`{}`は同じ型。

[TypeScriptの`Object`型と`object`型と`{}`型の使い分けについて - 角待ちは対空](https://blog.yux3.net/entry/2017/06/08/202859)

## 分割代入

```ts
interface Props {
  id: number
  myName: string
  live: true
}

const {id, myName, live}: Props = { id: 1, myName: "Kento", live: true}

console.log(id) //=> 1
console.log(myName) //=> Kento
console.log(live) //=> true
```

## 配列

配列の型アノテーション。

```ts
const arr: number[] = [1, 2, 3]
const arr2: Array<number> = [4, 5, 6]
```

存在しないインデックスを指定して値を受け取ろうとしても、型エラーにならない。

```ts
const arr = [1, 2, 3,]
const num: number = arr[10]
console.log(num)
//=> undefined
```

これをエラーにしたいなら、`noUncheckedIndexedAccess`を有効にする。

```json
  "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
```

オブジェクトのプロパティと同じく、配列も読み取り専用にできる。

```ts
const arr: readonly number[] = [1, 2, 3]
arr[0] = 100
//=> error TS2542: Index signature in type 'readonly number[]' only permits reading.

const arr2: ReadonlyArray<number> = [4, 5 ,6]
arr2[0] = 100
// error TS2542: Index signature in type 'readonly number[]' only permits reading
```

配列を変更するメソッドはTypeScriptでは防げない。`push()`を使用すると、TypeScriptはエラーを出すが、コンパイルされたJavaScriptを見ると`push()`が残っている。

```ts
const arr: ReadonlyArray<number> = [1, 2, 3]
arr.push(4)
// error TS2339: Property 'push' does not exist on type 'readonly number[]'.
```

```js
var arr = [1, 2, 3];
arr.push(4);
console.log(arr)
//=> [ 1, 2, 3, 4 ]
```

通常、配列は配列に代入できますが、

```ts
const arr: number[] = [1, 2, 3]
const arr2: number[] = arr

console.log(arr2)
//=> [ 1, 2, 3, 4 ]
```

配列に**読み取り専用配列**を代入することはできません。

```ts
const arr: readonly number[] = [1, 2, 3]
const arr2: number[] = arr
// error TS4104: The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
```

逆に、読み取り専用配列を配列に代入することはできます。

```ts
const arr: number[] = [1, 2, 3]
const arr2: readonly number[] = arr
```

## タプル

```ts
const arr: [number, string, boolean] = [1, "string", true]
```


## constアサーション

機能的には`readonly`と似ています。

```ts
const myName = "Kento"

const obj = {
  myName
}

obj.myName = "yoshiko"

console.log(obj.myName)
//=> yoshiko
```

```ts
const myName = "kento"

const obj = {
  myName
} as const

obj.myName = "yoshiko"
// error TS2540: Cannot assign to 'myName' because it is a read-only property.
```







































