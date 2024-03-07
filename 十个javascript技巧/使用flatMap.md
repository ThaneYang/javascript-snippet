> 有些 **JavaScript** 方法尽管鲜为人知，但它们解决独特挑战的潜力能够增强编码效率， 比如 `flatMap()`

数组方法 `flatMap()` 本质上是 `map()`和 `flat()` 的组合，区别在于 `flatMap` 只能扁平1级，flat 可以指定需要扁平的级数，flatmap 比分别调用这两个方法稍微高效一些。

> 使用 **flat + map**

```js
const arr = [1, 2, [4, 5], 6, 7, [8]];

// 使用 map 对每个元素进行操作并用 flat 展平结果
const result = arr.map(element => Array.isArray(element) ? element : [element]).flat();

console.log(result); // output: [1, 2, 4, 5, 6, 7, 8]
```

> 使用 **flatmap**

```js
const arr = [1, 2, [4, 5], 6, 7, [8]] ;

console.log(arr.flatMap((element) => element)); 
// output :[1, 2, 4, 5, 6, 7, 8]
```

flatmap 尽管是一个方法，但也会有[ 中间数组 (指中间创建了必须进行垃圾收集的临时数组)](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray%2FflatMap%23description)的产生，flatMap 非常适合在需要灵活性和可读性的情况下使用。

