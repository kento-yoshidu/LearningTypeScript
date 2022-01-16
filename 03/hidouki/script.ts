type Callback<T> = (result: T) => void;

function request1(callback: Callback<number>) {
  setTimeout(() => {
    callback(1)
  }, 1)
}

function request2(result1: number, callback: Callback<number>) {
  setTimeout(() => {
    callback(result1 + 1)
  }, 1)
}

function request3(result2: number, callback: Callback<number>) {
  setTimeout(() => {
    callback(result2 + 1)
  }, 1)
}

request1((result1) => {
  request2(result1, (result2) => {
    request3(result2, (result3) => {
      console.log(result3)
      //=> 3
    })
  })
})

function request1(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("request1...")
      resolve(1)
    }, 1000)
  })
}

function request2(result: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("request2...")
      resolve(result + 1)
    }, 1000)
  })
}

function request3(result: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("request3...")
      resolve(result + 1)
    }, 1000)
  })
}

request1()
  .then((result) => {
    return request2(result)
  })
  .then((result) => {
    return request3(result)
  })
  .then((result) => {
    console.log(result)
    //=> 3
  })

type User = {
  name: string;
  age: number;
}

function getUser(): Promise<User> {
  return new Promise((resolve) => {
    const user: User = {
      name: "拓郎",
      age: 30,
    }

    resolve(user)
  })
}

getUser().then((obj) => {
  console.log(obj)
})

async function requestAsync(): Promise<number> {
  return 1
}

requestAsync().then((result) => console.log(result))
//=> 1

type User = {
  name: string;
  age: number;
}

function getUser (): Promise<User> {
  return new Promise((resolve) => {
    const user: User = {
      name: "拓郎",
      age: 52,
    }
    setTimeout(() => {
      resolve(user)
    }, 2000)
  })
}

async function main() {
  console.time("a")
  console.log("start!")
  const result = await getUser()

  console.log(result)

  console.timeEnd("a")
}

main()

function request1(): Promise<number> {
  return new Promise((resolve) => {
    console.log("リクエスト1")
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

function request2(num: number): Promise<number> {
  return new Promise((resolve) => {
    console.log("リクエスト2")
    setTimeout(() => {
      resolve(num + 1)
    }, 1000)
  })
}

function request3(num: number): Promise<number> {
  return new Promise((resolve) => {
    console.log("リクエスト3")
    setTimeout(() => {
      resolve(num + 1)
    }, 1000)
  })
}

async function main() {
  const result1 = await request1() 
  const result2 = await request2(result1)
  console.log(await request3(result2))
}

main()