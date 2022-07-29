// Get the object with the name 'Apples' inside the array
const inventory = [
  { name: "Bananas", quantity: 5 },
  { name: "Apples", quantity: 10 },
  { name: "Grapes", quantity: 2 },
];

// 常规写法
function getApples(arr) {
  for (let index = 0; index < arr.length; index++) {
      if (arr[index].name === "Apples") {
          return arr[index];
      }
  }
}

// 优雅写法
function getApples(arr) {
  return arr.find((obj) => obj.name === 'Apples')
}