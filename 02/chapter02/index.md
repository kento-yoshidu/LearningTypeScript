## 型

類推される。

### 数値型

```typescript
const num1 = 1
const num2 = 1.0
const num3 = 0b1010 //=> 10
const num4 = 0o100 //=> 64
const num5 = 0x100 //=> 256
```

### 文字列型

シングル、ダブル、バッククオートのいずれかで囲う。

```typescript
const str1 = "Hello TypeScript"
const str2 = 'Hello TypeScript'
// バッククオートなら改行できる
const str3 = `Hello
  TypeScript` 
```

### 真偽値型

`true`と`false`がリテラルで用意されている。

### null、undefined、NaN

`undefined`は書き換え可能なグローバル変数。`NaN`は正確には数値型。

```typescript
const n = null
const u = undefined
const na = Nan
```

---

## 型アノテーション

型アノテーションを使って明示的に指定することもできるが、変数への代入時にはあまり使わない。

```typescript
const num: number = 1
const str: string = "string"
const bool: boolean = true
```

---

## 型のキャスト

`Number()`、`String()`を使う。

```typescript
let num = 1

num = Number("100") //=> 100
num = Number(false) //=> 0
num = Number(null) //=> 0
num = Number(undefined) //=> NaN
num = Number(NaN) //=> NaN

let str = "string"

str = String(1) //=> 1
str = String(true) //=> true
str = String([1, 2, 3]) //=> 1,2,3
str = String(null) //=> null
str = String(undefined) //=> undefined
str = String(NaN) //=> NaN
```

---

## 制御構文

### if-else

```typescript
const arr = [...Array(15).keys()].map(i => {
  if(i % 15 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  }
})
```

### 三項演算子

```typescript
const i = 10

console.log(i % 2 === 0 ? "偶数" : "奇数")
```

### switch

```typescript
[...Array(100).keys()].map(i => {
  i++
  switch(true) {
    case (i % 15 === 0):
      console.log(i, "FizzBuzz")
      break
    case (i % 3 === 0):
      console.log(i, "Fizz")
      break
    case (i % 5 === 0):
      console.log(i, "Buzz")
      break
    default:
      break
  }
})
```

---

## 配列

自動的に型がつく。

```typescript
const arr = [1,2,3]
arr.push("4")
//=> TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### 型アノテーション。

```typescript
const arr = [1,2,3]
arr.push("4")
//=> TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### readonly

```typescript
const arr: readonly number[] = [1, 2, 3]
arr.push(4)
//=> TS2339: Property 'push' does not exist on type 'readonly number[]'.
```

### for...of

```typescript
let total = 0

for (let i of [...Array(11).keys()]) {
  total += i
  //=> 55
}
```








