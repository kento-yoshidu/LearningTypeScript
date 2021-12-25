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

*/

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



