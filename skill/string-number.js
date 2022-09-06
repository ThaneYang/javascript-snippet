// 常规写法
// const num = parseInt("10")

// console.log('num', num)
// console.log(typeof num)

// 优雅写法
const num = +"10"
console.log('num',num)
console.log(typeof num)
console.log(+"10" === 10)

// 判断是否是整数
const isInteger = (val) => Number.isInteger(+val)
console.log(isInteger("DEV"))
console.log(isInteger("30"))
console.log(isInteger(30))