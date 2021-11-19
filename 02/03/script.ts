type objType = Readonly<{
  foo: string
  bar: string
}>

const myObj: objType = {
  foo: "foofoo",
  bar: "barbar"
}

myObj.foo = "hogehogehoge"