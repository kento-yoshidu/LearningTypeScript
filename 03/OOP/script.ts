/*
class Person {}

const p: Person = new Person()

console.log(p)
//=> Person()

// コンストラクタ

class Person {
  private name: string

  constructor(name: string) {
    this.name = name
  }
}

const p: Person = new Person("Keito")
console.log(p)
//=> Person { name: 'Keito' }

// フィールド

// strictNullChecksとstrictPropertyInitializationが有効な場合
class Person {
  myName: string;
  // error TS2564: Property 'myName' has no initializer and is not definitely assigned in the constructor.
}
const alice = new Person();
alice.myName = "Alice";

class Person {
  name: string | undefined
}

const p: Person = new Person()
p.name = "Bob"
console.log(p)
//=> Person { name: 'Bob' }

// メソッド

class Person {
  addString (name: string): string {
    return `Hello ${name}`
  }
}

const p = new Person()

console.log(p.addString('kento'))


// フィールドの初期化子
// コンストラクターで初期化するのと同じ

class Person {
  name: string = "No Name"
}

const p = new Person()
console.log(p.name)
//=> No Name


// アクセス修飾子

class Person {
  public name: string

  constructor(name: string) {
    this.name = name
  }
}

const p: Person = new Person("Kento")

p.name = "Bob"

console.log(p.name)
//=> Bob

class Person {
  protected name: string

  constructor(name: string) {
    this.name = name
  }
}

const p: Person = new Person("Kento")

console.log(p.name)
// error TS2445: Property 'name' is protected and only accessible within class 'Person' and its subclasses.

class Person {
  protected name: string

  constructor(name: string) {
    this.name = name
  }
}

class SubPerson extends Person {
  getName() {
    return this.name
  }
}

const p: SubPerson = new SubPerson("Kento")

console.log(p.getName())
//=> Kento


class Person {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

const p: Person = new Person("Kento")

// console.log(p.name)
//=> error TS2341: Property 'name' is private and only accessible within class 'Person'.

console.log(p.getName())
//=> Kento

// constructor shorthand

class Test {
  constructor(
    arg0: number,
    public arg1: number,
    protected arg2: number,
    private arg3: number,
  ) {
    console.log({ arg0, arg1, arg2, arg3 })
  }
}

const t = new Test(0, 1, 2, 3)
//=> { arg0: 0, arg1: 1, arg2: 2, arg3: 3 }

// cannot access
//console.log(t.arg0)
// error TS2339: Property 'arg0' does not exist on type 'Test'.

// can acess
// console.log(t.arg1)
//=> 1

// cannot access
// console.log(t.arg2)
// error TS2445: Property 'arg2' is protected and only accessible within class 'Test' and its subclasses.

// cannot acess
// console.log(t.arg3)
// error TS2341: Property 'arg3' is private and only accessible within class 'Test'.

// 読み取り専用フィールド

class Person {
  readonly name: string
  readonly age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  setProperty(name: string, age: number): void {
    this.name = name
    // error TS2540: Cannot assign to 'name' because it is a read-only property.
    this.age = age
    // error TS2540: Cannot assign to 'age' because it is a read-only property.
  }
}

// 静的プロパティ

class Person {
  static str: string = "World"

  static sayHello() {
    console.log(`Hello ${this.str}`)
  }
}

Person.sayHello()
//=> Hello World

class Operator {
  protected value: number

  constructor(value: number) {
    this.value = value
  }

  sum(value: number): void {
    this.value += value
  }
  subtract(value: number): void {
    this.value -= value
  }
  multiply(value: number): void {
    this.value *= value
  }
  devide(value: number): void {
    this.value /= value
  }

  getValue() {
    return this.value
  }
}

const p = new Operator(10)

p.sum(20)
console.log(p.getValue())
//=> 30

p.subtract(3)
console.log(p.getValue())
//=> 27

p.multiply(10)
console.log(p.getValue())
//=> 270

p.devide(3)
console.log(p.getValue())
//=> 90

*/

class Operator {
  protected value: number

  constructor(value: number) {
    this.value = value
  }

  sum(value: number): void {
    this.value += value
  }
  subtract(value: number): void {
    this.value -= value
  }
  multiply(value: number): void {
    this.value *= value
  }
  devide(value: number): void {
    this.value /= value
  }

  getValue() {
    return this.value
  }
}

const p = new Operator(10)
