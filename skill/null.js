// // 常规逻辑
// function getUserRole(role) {
//   let userRole;
//   if (role) {
//       userRole = role;
//   } else {
//       userRole = "USER";
//   }
//   return userRole;
// }

// console.log(getUserRole()); // "USER"
// console.log(getUserRole("ADMIN")); // "ADMIN";

// 优雅写法
function getUserRole(role) {
  return role || "USER"; // 默认值定义的常见方法
}

console.log(getUserRole()); // "USER"
console.log(getUserRole("ADMIN")); // "ADMIN";