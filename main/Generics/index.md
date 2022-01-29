
# Generics

実際に利用されるまで型が確定しないような関数であったりインターフェイスを定義することができます。それらを**利用する時に**型を示すと言う事です。

## 型の数だけ増えるコード

まずは**ジェネリクス**を利用しないと効率が悪くなるパターンを紹介します。

例として、受け取った値をそのまま返す関数を定義します。例えば数値型の`1`を渡せば数値型の`1`が返ってくることを期待します。文字列型の`"1"`が返ってきては駄目です。

いささかシンプル過ぎる気もしますが、まずはこんな例から始めます。まずはこんな風に定義します。

```typescript
function returnFunc(arg) {
  return arg
}

console.log(returnFunc('Hello World'))
//=> Helo World
```

これではTypeScriptの意味がないですね。引数と戻り値の型を明記します。

```typescript:title=script.ts
function returnFunc(arg: string): string {
  return arg
}
```

とりあえずは文字列型の値が渡されることを想定して関数を定義しましたが、数値型の場合、真偽値型の場合、オブジェクトの場合、、、などにも対応する必要があります。

それぞれの型に対応する関数を一つずつ書いていけば対応できますが、これがスマートでないことは分かりますね。

```typescript
// 文字列型を受け取って文字列を返す
function strFunc(arg: string): string {
  return arg
}

// 数値型を受け取って数値を返す
function numFunc(arg: number): number {
  return arg
}

// ...以下、真偽値、オブジェクト、配列、、、などと続く
```

では`string | number | ...`という風にユニオン型で型注釈すればいいと思うかもしれませんが、これでは違う型の値が返ってくる可能性があります。

```typescript
function returnFunc(arg: string | number): string | number {
  return arg + 1
}

console.log(typeof returnFunc("1"))
//=> string
// 数値型を渡しているのに文字列型を返すことができてしまう
// 数値型を渡しているなら数値型が返ってきて欲しい
```

こんな時はジェネリクスの出番です。関数名の後に`<T>`と記述します。そして引数と戻り値の型定義にも`T`を指定します。

```typescript
function returnFunc<T>(arg: T): T {
  return arg
}
```

この`T`には何かしらの型が入りますが、それはまだ決まっていません。**関数を呼び出す時**に決めるのです。

以下のように、

```typescript
returnFunc<string>("1")
returnFunc<number>(1)
returnFunc<boolean>(true)
returnFunc<object>({})
returnFunc<[]>([])
```

https://zenn.dev/dowanna6/articles/63fdebe8dd167f