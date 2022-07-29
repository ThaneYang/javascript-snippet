const chineseFood = ['蛋炒饭', '牛肉面']

// 常规
for(let i = 0; i < chineseFood.length; i++){
  console.log(chineseFood[i])
}

// 优雅
for (food of chineseFood) {
  console.log(food)
}
