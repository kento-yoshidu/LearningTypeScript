/*
console.log("Hello TypeScript")

const num1 = 1
const num2 = 1.0
const num3 = 0b1010 //=> 10
const num4 = 0o100 //=> 64
const num5 = 0x100 //=> 256

const str1 = "Hello TypeScript"
const str2 = 'Hello TypeScript'
// バッククオートなら改行できる
const str3 = `Hello
  TypeScript` 

const n = null
const u = undefined
const nu = NaN

---

const num: number = 1
const str: string = "string"
const bool: boolean = true

---

let num = 1

num = Number("100") //=> 100
num = Number(false) //=> 0
num = Number(null) //=> 0
num = Number(undefined) //=> NaN
num = Number(NaN) //=> NaN

console.log(num)
*/

let str = "string"

str = String(1) //=> 1
str = String(true) //=> true
str = String([1, 2, 3]) //=> 1,2,3
str = String(null) //=> null
str = String(undefined) //=> undefined
str = String(NaN) //=> NaN

console.log(str) //=> 1
