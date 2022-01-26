"use strict";
// ジェネリクス
const func = (arg1, arg2) => {
    return Math.random() > 0.5 ? arg1 : arg2;
};
console.log(func("left", "right"));
console.log(func(0, 1));
console.log(func(true, false));
console.log(func(["left"], ["right"]));
console.log(func({ id: 1 }, { id: 2 }));
// 型類推される
console.log(func("left", "right"));
// 複数の型
const func2 = (arg1, arg2) => {
    console.log(`arg1は${typeof arg1}です。`);
    console.log(`arg2は${typeof arg2}です。`);
};
func2("Hello", true);
//=> arg1はstringです。
//=> arg2はbooleanです。
// map<T>
const arr = ["1", "2", "3", "4", "5"];
const newArr = arr.map((text) => {
    return Number(text);
});
console.log(newArr);
// Map<K, T> K=キーの型、T=値の型
const obj = new Map();
obj.set("kento", 34);
obj.set("kayako", 39);
console.log(obj);
// extendsで制約をつける
const func3 = (element) => {
    element.style.backgroundColor = "red";
    return element;
};
const func4 = (arg) => {
    console.log(typeof arg);
};
func4(1);
