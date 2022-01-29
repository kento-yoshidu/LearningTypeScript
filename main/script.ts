function pick<T, K extends keyof T>(args: T, key: K) {
  return args[key];
};

const obj = {
  name: 'Tom',
  amount: 0,
  flag: false,
};

const value = pick(obj, 'name') // const value: string
console.log(value)
const value1 = pick(obj, 'amount') // const value1: number
const value2 = pick(obj, 'flag') // const value2: booolean
// const value3 = pick(obj, 'test') // error 'test' プロパティはない