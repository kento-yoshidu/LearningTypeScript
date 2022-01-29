/*
function returnFunc(arg: any) {
  return arg
}

console.log(returnFunc('Hello World'))
//=> Helo World

function returnFunc(arg: string): string {
  return arg
}
*/

// 文字列型を受け取って文字列を返す
function strFunc(arg: string): string {
  return arg
}

// 数値型を受け取って数値を返す
function numFunc(arg: number): number {
  return arg
}

function returnFunc(arg: string | number): string | number {
  return arg.toString()
}

console.log(typeof returnFunc(1))
//=> string

/*
function returnFunc<T>(arg: T): T {
  return arg
}

returnFunc<string>("1")
returnFunc<number>(1)
returnFunc<boolean>(true)
returnFunc<object>({})
returnFunc<[]>([])