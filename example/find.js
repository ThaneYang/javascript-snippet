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

// const findFood = (foods, name, group) => {
//   for (let i = 0; i < foods.length; i++) {
//     if (foods[i].group === group && foods[i].name === name) {
//       return foods[i]
//     }
//   }
// }

// const humbugger = findFood(foods, '汉堡', 1)

// 更好的写法
const humbugger = foods.find(i => i.name === '汉堡' && i.group === 1)

console.log('humbugger', humbugger)