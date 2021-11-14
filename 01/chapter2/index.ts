/*
// タプル型
const me: [string, number] = ["kento", 34]

// enum型

enum janken {
	goo,
	choki,
	paa
}

type name = string
type age = number

const arr: [name, age] = ["Kento", 34]
console.log(arr[0])

type name = string
type mail = string
type age = number
type Person = [name, mail, number]

const kento: Person = ["kento", "hogeo", 35]

console.log(kento)
*/

// ユーティリティ型

type data = [string, number]
//type ReqData = Readonly<data>

const x: data = ["taro", 39]

x[1] = 28
y[1] = 17

console.log(x[1])