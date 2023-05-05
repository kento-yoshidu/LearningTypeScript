# スプレッド演算子

代入演算子を使った場合の挙動を確認します。

```ts
const obj = {
  name: "takashi",
  age: 30
}

const newObj = obj

// 同じ内容が出力される
console.log(`obj = ${obj}, newObj = ${newObj}`)
/*
  obj is { name: 'takashi', age: 30 }
  newObj is { name: 'takashi', age: 30 }
*/
```

オブジェクトは値がコピーされるわけではなく、2つの変数は同じ実体を指していることに注意が必要です。つまり、`obj`か`newObj`のどちらかを書き換えると、もう一方の値も書き変わることになります。

```ts
// objのnameプロパティを書き換える
obj.name = "keiko"
console.log("obj is", obj)
console.log("newObj is", newObj)

/*
  obj is { name: 'keiko', age: 30 }
  newObj is { name: 'keiko', age: 30 }
*/
```

これはメモリーの節約にはなりますが、初学者の混乱の原因になります。いわゆるプリミティブ値と呼ばれるデータ型とは違う挙動をしています。

基本的に、値を書き換えない方がいいとするのが現代のプログラミングにおける考え方だと思います。つまり、nameを書き換えたオブジェクトを使いたいなら、本当にコピーしたものを作成したいのです。

## シャローコピー

```ts
const obj2 = {
  name: "takashi",
  age: 30
}

const newObj2 = {...obj2}

console.log(obj2)
console.log(newObj2)
/*
  { name: 'takashi', age: 30 }
  { name: 'takashi', age: 30 }
*/
```

続いて、`newObj2.name`を書き換えてみます。

```ts
newObj.name = "keiko"
console.log("obj is", obj)
console.log("newObj is", newObj)
/*
  obj is { name: 'keiko', age: 30 }
  newObj is { name: 'keiko', age: 30 }
*/
```

https://qiita.com/silane1001/items/ae2e491abd64c01c7f3e


スプレッド演算子を使用し、オブジェクトをコピーすることができます。

```ts
const obj = {
  name: "kento",
  age: 30
}

const newObj = {...obj}

console.log(obj, newObj)
/*
  { name: 'takashi', age: 30 }
  { name: 'takashi', age: 30 }
*/
```

`newObj.name`は`keiko`に書き変わりましたが、`obj.name`はそのままであることが分かります。

```ts
newObj2.name = "keiko"
console.log(obj2)
console.log(newObj2)
/*
  { name: 'takashi', age: 30 }
  { name: 'keiko', age: 30 }
*/
```

## ディープコピー


https://qiita.com/silane1001/items/ae2e491abd64c01c7f3e

