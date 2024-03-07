此前，如果开发人员想要深拷贝对象，经常需要依赖第三方库来实现或者手动实现一个神拷贝，或者采取 `const cloneObj = JSON.parse(JSON.stringify(obj));` 的 hack， 但其在处理**包含循环引用**或**不符合 JSON 的数据类型（如 Map 和 Set，Blob 等 ）** 的更复杂对象时，是有很多不足之处的

> 而现在，**JavaScript** 内置了一个 **structuredClone()** 的方法， 此方法提供了一种简单有效的方法来深度克隆对象， 且适用于大多数现代浏览器和 Node.js v17 以上

```js
// 将原始对象传递给该函数， 它将返回一个具有不同引用和对象属性引用的深层副本

const obj = { name: 'Mike', friends: [{ name: 'Sam' }] };
const clonedObj = structuredClone(obj);

console.log(obj.name === clonedObj); // false
console.log(obj.friends === clonedObj.friends); // false
```

与众所周知的 `JSON.parse(JSON.stringify())”` 不同， `structuredClone()` 允许您克隆循环引用，这是目前在 **JavaScript** 中使用深拷贝最简单的方法。