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

// 型エイリアスにTのスコープを設定

type Sample<T> = {
  (arg: T): T
}

const sample: Sample<string> = (str) => {
  return str
}

console.log(sample('Hello World'))
// Hello World
