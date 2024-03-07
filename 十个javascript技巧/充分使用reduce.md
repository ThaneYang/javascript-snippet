在写 **javascript** 时，有时候需要**以键值分组的格式提供数据**，大多数开发者会使用 **.forEach()** 方法或者 **map()** 方法，类似于这样的方式。

```js
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(res=>res.json())
  .then(todos=>{
    
    // using forEach() or Map
    const todosForUserMap = {};
    todos.forEach(todo=>{
      if (todosForUserMap[todo.userId]){
        todosForUserMap[todo.userId].push(todo);  
      }else{
        todosForUserMap[todo.userId] = [todo];
      }  
    })

    console.log(todosForUserMap)
  })
```

这里使用 **forEach** 而不是 **map** 方法。是因为使用 **map** 方法会返回一个新的数组，而**数组创建和赋值产生的性能开销较大**，尤其是在数据量较大时， 而这不会在 **forEach** 中发生

> 还有一种相当干净且可读性强的方法是使用数组的 **reduce** 方法

```js
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(res=>res.json())
  .then(todos=>{
    
    // using reduce
    const todosForUserMap = todos.reduce((accumulator, todo)=>{
      if (accumulator[todo.userId]) accumulator[todo.userId].push(todo);
      if (!accumulator[todo.userId]) accumulator[todo.userId] = [todo];
      return accumulator;
    },{})

    console.log(todosForUserMap)
  })
```

