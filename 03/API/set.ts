// set 値のみを扱う 値の重複はできない

const set = new Set<number>([1, 2, 3, 3])
console.log(set)
//=> Set(3) { 1, 2, 3 }

// 型注釈

const setFunc = (s: Set<number>) => {
  console.log(s)
}

setFunc(set)
//=> Set(3) { 1, 2, 3 }

// 値の追加

set.add(4).add(5)
console.log(set)
//=> Set(5) { 1, 2, 3, 4, 5 }

// 値の削除 配列と違ってインデックスなどはないので、値を指定する

// 削除できたらtrueが返る
console.log(set.delete(1))
//=> true

console.log(set)
//=> Set(4) { 2, 3, 4, 5 }

// 個数を取得
console.log(set.size)
//=> 4

// 値があるかを確認
console.log(set.has(3))
//=> true

// for-ofで回せる

for (const s of set) {
  console.log(s)
  //=> 2
  //=> 3
  //=> 4
  //=> 5
}

// 空にする

set.clear()
console.log(set)
//=> Set(0) {}

console.log("--------------------------------")

// ばらす

const set2 = new Set<number>([1, 2, 3, 4, 5])
console.log(...set2)
//=> 1 2 3 4 5

// 配列に変換
console.log([...set2])
//=> [ 1, 2, 3, 4, 5 ]

// 重複している値を取り除く

const arr: number[] = [1, 1, 2, 2, 3, 3]
const newArr: number[] = [...new Set(arr)]

console.log(newArr)
//=> [ 1, 2, 3 ]
