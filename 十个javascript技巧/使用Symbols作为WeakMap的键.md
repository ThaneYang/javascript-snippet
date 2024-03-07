`WeakMap` 和 `Map` 很像，但不同点在于它的**键(key)** 只能是**对象 Objects 和 symbol**，这些键被作为**弱引用存储(weakly)**。

为什么？因为 **WeakMap** 的键必须是可垃圾回收的。大多数原始数据类型可以任意创建并且没有生命周期，因此它们不能用作键, 而 **对象Objects** 和 **non-registered symbols** 可以用作键，因为它们是垃圾可收集的 - [ MDN- WeakMap](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FWeakMap)。

> 这个特性意味着除了键之外内存中没有其他对对象的引用，**JavaScript** 引擎可以在需要时**对对象执行垃圾回收**。

```js
// map
let user = { name: "User" };

let map = new Map();
map.set(user, "刻晴");

user = null; // 置null来覆盖引用，'user'被存在 map 的内部，通过 map.keys() 获取

// WeakMap
let user = { name: "User" };

let weakMap = new WeakMap();
weakMap.set(user, "甘雨");

user = null; // 使用 WeakMap，'user' 已经被从内存中删除 
```

好了，那 **WeakMap** 到底有什么作用呢？根据其特点可以联想到 **WeakMap** 的用途可以是`自定义缓存`以及`检测内存泄漏`。

通过使用对象作为键，您可以将缓存的值与特定对象相关联。当对象被垃圾收集时，相应的 **WeakMap** 条目将被自动删除，立即清除缓存。

在 **ES14** 中， 使用 **symbol** 作为 **WeakMap** 的 **key** 已经成为可能， 这可以使**键值对**在 **WeakMap** 中扮演的角色更加清晰。因为**唯一能在 WeakMap 中被作为 key 使用的原始类型只有 symbol**， **symbol** 能保证 **key** 是 唯一的并且无法重新创建。

```js
let mySymbol = Symbol('mySymbol');

let myWeakMap = new WeakMap();

let obj = {
    name: '前端thaneyang'
};

myWeakMap.set(mySymbol, obj);

console.log(myWeakMap.get(mySymbol)); // Output: {name: '前端thaneyang'}
```

