// // 常规逻辑
// const employee = { name: "DevPoint", age: 30 };
// const salary = { grade: "A" };
// const summary = salary;
// for (const key in employee) {
//     summary[key] = employee[key];
// }
// console.log(summary); // { grade: 'A', name: 'DevPoint', age: 30 }
// 优雅写法
const employee = { name: "DevPoint", age: 30 };
const salary = { grade: "A" };
const summary = { ...employee, ...salary };
console.log(summary); // { name: 'DevPoint', age: 30, grade: 'A' }
