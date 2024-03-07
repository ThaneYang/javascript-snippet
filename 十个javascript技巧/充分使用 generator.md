**生成器 (Generator)** 和 **迭代器 (iterators)** 可能是 **JavaScript** 开发人员最不常使用的代码，其知识仅限于编码面试。（因为有更好用的语法糖 `async/await` ？😂）

> **生成器 (Generator)** 是控制异步编程、生成可迭代对象和生成多个值的强大方法。生成器与传统函数不同。他们可以多次启动和停止执行。这使它们能够产生大量值并在以后继续执行，从而使它们非常适合管理异步操作、构造迭代器和处理无尽的数据流。

试想一下，假如在一个获取数据的场景下，**数据库/ API 的数据量可能是无限的**，而你必须将它们传输到前端，你会怎么做呢？

这种情况下， **react** 中最常用的方案就是无限加载方案， 如果是**在 node 中**或者**原生JS**，你该如何实现**无限加载之类的功能**。

```js
async function *fetchProducts(){
  while (true){
    const productUrl = "https://fakestoreapi.com/products?limit=2";
    const res = await fetch(productUrl)
    const data = await res.json()
    yield data;
        // 在这里操作用户界面
        // 或将其保存在数据库或其他地方
        // 将其用作副作用的地方
        // 即使某些条件匹配，也中断流程
  }
}

async function main() {
  const itr = fetchProducts();
        // 这应该根据用户交互来调用
        // 或者其他技巧，因为您不希望出现无限加载。
  console.log( await itr.next() );
}

return main()
```

这就是 **迭代器 (iterators)** 真正有用的地方，而不是将请求的大量数据流式传输到本地存储或者某些位置。这是使用 **异步生成器(async generators)** 执行此操作的这样之一， 这样我们就可以解决JS中的无限加载问题。

