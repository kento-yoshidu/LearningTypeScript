const obj = {
  name: "takashi",
  age: 30
}

const newObj = obj

console.log("obj is", obj)
console.log("newObj is", newObj)

newObj.name = "keiko"
console.log("obj is", obj)
console.log("newObj is", newObj)

// シャローコピー

const obj2 = {
  name: "takashi",
  age: 30
}

const newObj2 = {...obj2}

console.log(obj2)
console.log(newObj2)
// { name: 'takashi', age: 30 }
// { name: 'takashi', age: 30 }

newObj2.name = "keiko"
console.log(obj2)
console.log(newObj2)
// { name: 'takashi', age: 30 }
// { name: 'keiko', age: 30 }

// ディープコピー

const obj3 = {
  name: "takashi",
  age: 30,
  child: {
    name: "miyuki",
    age: 1
  }
}

const newObj3 = {...obj3}

newObj3.child.name = "xxx"

console.log(obj3)
console.log(newObj3)
// { name: 'takashi', age: 30, child: { name: 'xxx', age: 1 } }
// { name: 'takashi', age: 30, child: { name: 'xxx', age: 1 } }

const obj4 = {
  name: "takashi",
  age: 30,
  child: {
    name: "miyuki",
    age: 1
  }
}

const newObj4 = structuredClone(obj4)

newObj4.child.name = "xxx"
console.log(obj4)
console.log(newObj4)
