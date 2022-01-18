const m = new Map<string, number>()
m.set("id", 1)

console.log(m)
//=> Map(1) { 'id' => 1 }

console.log(m.get("id"))
//=> 1

const m2 = new Map()
console.log(m2)
//=> Map(0) {}

// 型注釈
const func = (m: Map<string, number>) => {
  console.log(m)
}

func(m)

// nullとundefinedは違う
const m3 = new Map<any, number>([[null, 1]])
console.log(m3.has(null))
//=> true

console.log(m3.has(undefined))
//=> false

// 上書き
const m4 = new Map<string, number>([["id", 1]])

m4.set("id", 2)
console.log(m4)
//=> Map(1) { 'id' => 2 }

// オブジェクトは別
const m5 = new Map<object, string>([[{}, "1"]])
m5.set({}, "2")
console.log(m5)
//=> Map(2) { {} => '1', {} => '2' }

// deleteでキーを指定して削除
const m6 = new Map<string, number>([
  ["a", 1],
  ["b", 2]
])

m6.delete("a")
console.log(m6)
//=> Map(1) { 'b' => 2 }

// sizeで要素の数
console.log(m6.size)
//=> 1

m6.set("c", 3)
console.log(m6.size)
//=> 2

// clearで全要素の削除
m6.clear()
console.log(m6)
//=> Map(0) {}

// キーの列挙

const m7 = new Map<string, number>([
  ["a", 1],
  ["b", 2]
])

for (const key of m7.keys()) {
  console.log(key)
  //=> a
  //=> b
}

// 値の列挙

for (const value of m7.values()) {
  console.log(value)
  //=> 1
  //=> 2
}

// キーと値の列挙

for (const pair of m7.entries()) {
  console.log(pair)
  //=> [ 'a', 1 ]
  //=> [ 'b', 2 ]
}

for (const [key, value] of m7) {
  console.log(`${key}, ${value}`)
  //=> a, 1
  //=> b, 2
}

// シャローコピー

const m8 = new Map<string, number>(m7)

console.log(m8)
//=> Map(2) { 'a' => 1, 'b' => 2 }

// 一度オブジェクトにしてからJSONにする

const obj8 = Object.fromEntries(m8)
console.log(JSON.stringify(obj8))
//=> {"a":1,"b":2}

