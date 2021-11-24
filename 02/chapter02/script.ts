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

let str = "string"

str = String(1) //=> 1
str = String(true) //=> true
str = String([1, 2, 3]) //=> 1,2,3
str = String(null) //=> null
str = String(undefined) //=> undefined
str = String(NaN) //=> NaN

console.log(str) //=> 1

---

[...Array(30).keys()].map(i => {
  if(i % 15 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  }
})

const i = 10

console.log(i % 2 === 0 ? "偶数" : "奇数")


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

---

const arr = [1,2,3]
arr.push("4")
//=> TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

const arr: readonly number[] = [1, 2, 3]
arr.push(4)
//=> TS2339: Property 'push' does not exist on type 'readonly number[]'.

let total = 0

for (let i of [...Array(11).keys()]) {
  total += i
  //=> 55
}

---

## タプル

const arr: [string, number] = ["kento", 34]

---

## enum

*/

enum Framework {
  React,
  Vue,
  Svelte
}

const myFramework: Framework  = Framework.React
const myFramework2: Framework  = Framework.Vue
const myFramework3: Framework  = Framework.Svelte
console.log(myFramework) //=> 0
console.log(myFramework2) //=> 1
console.log(myFramework3) //=> 2
