const chineseFood = ['蛋炒饭', '牛肉面']

// 数组合并
// 写法1
// const food = ['汉堡', '可乐', ... chineseFood]

// 去重
const food = [...new Set(['汉堡', '可乐', '牛肉面', ...chineseFood])]

console.log('food', food)