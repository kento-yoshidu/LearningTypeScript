// ジェネリクス
const func = <T>(arg1: T, arg2: T): T => {
  return Math.random() > 0.5 ? arg1 : arg2
}

console.log(func<string>("left", "right"))
console.log(func<number>(0, 1))
console.log(func<boolean>(true, false))
console.log(func<string[]>(["left"], ["right"]))
console.log(func<object>({id: 1}, {id: 2}))

// 型類推される
console.log(func("left", "right"))

// 複数の型

const func2 = <T, S>(arg1: T, arg2: S): void => {
  console.log(`arg1は${typeof arg1}です。`)
  console.log(`arg2は${typeof arg2}です。`)
}

func2<string, boolean>("Hello", true)
//=> arg1はstringです。
//=> arg2はbooleanです。

// map<T>
const arr = ["1", "2", "3", "4", "5"]

const newArr: number[] = arr.map<number>((text: string) => {
  return Number(text)
})

console.log(newArr)

// Map<K, T> K=キーの型、T=値の型

const obj = new Map<string, number>()
obj.set("kento", 34)
obj.set("kayako", 39)

console.log(obj)

// extendsで制約をつける
const func3 = <T extends HTMLElement>(element: T) => {
  element.style.backgroundColor = "red";
  return element;
}

const func4 = <T = string>(arg: T) => {
  console.log(typeof arg)
}

func4(1)