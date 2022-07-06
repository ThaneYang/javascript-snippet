
const foods = ['薯条', '汉堡', '奶茶', '可乐']

// let hasCoke = false
// for (let i = 0; i < foods.length; i++) {
//   if (foods[i] === '可乐') {
//     hasCoke = true
//   }
// }


// 更好的写法
const hasCoke = foods.includes('可乐')
console.log('hasCoke', hasCoke)