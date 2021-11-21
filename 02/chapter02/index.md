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







