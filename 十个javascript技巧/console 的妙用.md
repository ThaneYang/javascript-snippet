> **console** 并不只有 `console.log()`,  实际生产中都会使用已经封装好的log库，而 **控制台对象 console** 实际上内置了许多非常有用的方法，帮助您提高调试输出的质量和可读性，掌握它们能使您更轻松地 **debug** 和修复代码中的问题。

```js
// 1. console.time 和 console.timeEnd
// 测量执行一段代码所需的时间。识别代码中的性能瓶颈并对其进行优化
console.time('开始获取数据');

fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => {
    console.timeEnd('获取数据花费时间：');
    // ...code
  });
  
// 2. console.dir
// console.dir 方法以分层格式输出对象的属性。方便查看对象的结构以及其所有属性和方法
const promise = new Promise((resolve, reject) => resolve('foo'));
console.dir(promise);

// 3. console.count
// console.count 方法来计算特定日志消息的输出次数。这对于跟踪特定代码路径的执行次数以及识别代码中的热点非常有用
const fun = (x) => console.count(x);

fun('刻晴'); // 1
fun('甘雨'); // 1
fun('刻晴'); // 2

// 4. console.trace
// trace 可以输出堆栈跟踪。对于理解代码中的执行流程以及识别特定日志消息的来源非常有用
const foo = () => console.trace();
const bar = () => foo();
bar();

// 5. console.profile profileEnd
// 测量代码块的性能。这对于识别性能瓶颈以及优化代码以提高速度和效率非常有用。
console.profile('MyProfile');

// 想要测量性能的代码
for (let i = 0; i < 100000; i++) {
  // ...code
}

console.profileEnd('MyProfile');
```

