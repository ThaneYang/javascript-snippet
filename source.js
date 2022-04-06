const getPrice = (name) => {
  if (name === '汉堡') {
    return 20
  } else if (name === '薯条') {
    return 15
  } else if (name === '冰淇淋')  {
    return 10
  }
}
console.log(getPrice('汉堡'))


const foodMap = {
  '汉堡': 20,
  '薯条': 15,
  '冰淇淋': 10
}
const getPrice = (name) => {
  return foodMap[name]
}
console.log(getPirce('汉堡'))


