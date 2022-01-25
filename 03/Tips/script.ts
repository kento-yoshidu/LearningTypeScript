/*
// シャローコピー
const obj = {
  id: 1,
  name: "kento"
}

const newObj = {...obj}

console.log(newObj)
//=> { id: 1, name: 'kento' }

const obj2 = {
  id: 1,
  name: "kento",
  demo: {
    city: "kyoto"
  }
}

const newObj2 = {...obj2}

console.log(newObj2)
//=> { id: 1, name: 'kento', demo: { city: 'kyoto' } }

newObj2.id = 2
newObj2.demo.city = "kagoshima"

console.log(newObj2)
//=> { id: 2, name: 'kento', demo: { city: 'kagoshima' } }
console.log(obj2)
//=> { id: 1, name: 'kento', demo: { city: 'kagoshima' } }

// マージ

const obj3a = {
  id: 1,
  name: "kento"
}

const obj3b = {
  hobby: "tennis",
  lang: "japanese"
}

const newObj3 = {...obj3a, ...obj3b}

console.log(newObj3)
//=> { id: 1, name: 'kento', hobby: 'tennis', lang: 'japanese' }

// 同じ名前のキーは上書きされる

const obj4a = {
  id: 1,
  name: "kento"
}

const obj4b = {
  id: 2,
  hobby: "tennis"
}

const newObj4 = {...obj4a, ...obj4b}

console.log(newObj4)
//=> { id: 2, name: 'kento', hobby: 'tennis' }

*/

// 抽出

// 即時関数

const profile = {
  id: 1,
  name: "kento",
  age: 34,
  hobby: "tennis",
  city: "shiga",
  tel: "000-0000-0000",
  living: true,
}

// 分割代入で受け取る
const obj5 = (({id, city, tel}) => {
  return {
    id,
    city,
    tel 
  }
})(profile)

console.log(obj5)
//=> { id: 1, city: 'shiga', tel: '000-0000-0000' }

// もっと短く

const obj5a = (({id, city, tel})=>({id, city, tel}))(profile)

console.log(obj5a)
//=> { id: 1, city: 'shiga', tel: '000-0000-0000' }

// 除きたいプロパティを記述する。残りを...restで受け取る

const obj6 = (({id, ...rest}) => ({ rest }))(profile)

console.log(obj6.rest)
//=> { name: 'kento', age: 34, hobby: 'tennis', city: 'shiga', tel: '000-0000-0000', living: true }

// オブジェクトから型生成

const obj7 = {
  id: 1,
  name: "kento",
  age: 34,
}

type Obj7 = typeof obj7

const obj7a: Obj7 = {
  id: 2,
  name: "takashi",
  age: 33,
}

// as const でリテラル型

const obj7b = {
  id: 2,
  name: "takashi",
  age: 33,
} as const

type Obj7b = typeof obj7b

/*
const obj7c: Obj7b = {
  id: 3,
  // error TS2322: Type '3' is not assignable to type '2'.
  name: "keiko",
  // error TS2322: Type '"keiko"' is not assignable to type '"takashi"'.
  age: 19,
  // error TS2322: Type '19' is not assignable to type '33'.
}
*/

// 特定のプロパティだけを定数値で取得したい場合

const obj7d = {
  id: 3,
  name: "keiko",
  grade: "A" as "B" | "C" | "D"
}

type Obj7d = typeof obj7d

const newObj7d: Obj7d = {
  id: 3,
  name: "keiko",
  grade: "D",
}

// オブジェクトからキーだけを抜き出す

const obj8 = {
  id: 1,
  name: "kento",
  age: 42,
}

type Obj8 = keyof typeof obj8
// "id" | "name" | "age"

// プロパティだけ欲しい

const obj9 = {
  id: 1,
  name: "kento",
  age: 42,
} as const

type KeyObj9 = keyof typeof obj9

type PropertyObj9 = typeof obj9[KeyObj9]
// 1 | "kento" | 42

// 配列からタイプを生成する

const arr = ["Japan", "America", "India"] as const
type CountryType = typeof arr[number]
