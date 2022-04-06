# javascript-snippet
分享一看就会的实用JavaScript小技巧



### 减少if...else代码

- 一旦当我们写到超过两个`if...else`的函数的时候就该想想是否有更好的优化方法。
- 比如现在需要让我们根据名称计算出麦某劳的食品价格，你可能会这么做。

```
const getPrice = (name) => {
  if (name === '汉堡') {
    return 20
  } else if (name === '薯条') {
    return 15
  } else if (name === '冰淇淋')  {
    return 10
  }
}
console.log(getPiice('汉堡'))
```
这样的写法会让函数体有很多的条件判断语句，而当我们想下次增加一个商品的时候就需要修改函数内的逻辑增加一个`if...else`语句，这一定程度上也违反了**开闭原则**,当我们需要增加一个逻辑的时候要尽量通过扩展软件实体来解决需求变化，而不是通过修改已有的代码来完成变化。

这是很经典的优化方式，我们可以使用一个类似`Map`结构的数据来保存所有商品，这里我们直接建立一个对象来存储。

```
const foodMap = {
  '汉堡': 20,
  '薯条': 15,
  '冰淇淋': 10
}
const getPrice = (name) => {
  return foodMap[name]
}
console.log(getPirce('汉堡'))
```

- 这样我们下次需要再增加一个商品时就不需要改动`getPrice`的逻辑了，当然了这里其实更多人喜欢直接在用的地方直接使用`foodMap`，我这里只是简单举了个例子表述这个思路。






