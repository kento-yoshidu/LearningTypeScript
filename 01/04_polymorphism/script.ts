type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

const filter: Filter = (array, f) => {
  let result = []

  for(let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

console.log(filter([1, 2, 3, 4, 5], _ => _ < 3))
// [1, 2]

console.log(filter(['a', 'b', 'c'], _ => _ === 'a'))
// ['a']

const names = [
  { firstName: "kento" },
  { firstName: "hiroshi" },
  { firstName: "keiko"},
]

console.log(filter(names, _ => _.firstName.startsWith('k')))
// [ { firstName: 'kento' }, { firstName: 'keiko' } ]

//-----------------------------------------------------------------

// 型エイリアスにTのスコープを設定

type Sample<T> = {
  (arg: T): T
}

const sample: Sample<string> = (str) => {
  return str
}

console.log(sample('Hello World'))
// Hello World

//-----------------------------------------------------------------

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = []

  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  
  return result
}

console.log(map([1, 2, 3], _ => _ * 2))
// [ 2, 4, 6 ]

//-----------------------------------------------------------------
// 明示的にアノテート

function map2<T> (array: T[]): T[] {
  return array 
}

console.log(map2<string>(["hoge", "foo"]))
// [ 'hoge', 'foo' ]