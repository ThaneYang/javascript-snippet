const foods = [{
  name: '薯条',
  group: 1
}, {
  name: '汉堡',
  group: 1
}, {
  name: '奶茶',
  group: 2
}, {
  name: '可乐',
  group: 1
}]

// const names = []
// for (let i = 0; i < foods.length; i++) {
//   if (foods[i].group === 1) {
//     names.push(foods[i].name)
//   }
// }

// 更好的写法
const names = foods
  .filter(i => i.group === 1)
  .map(i => i.name)

console.log(names)