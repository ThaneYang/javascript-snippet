const selectKey = null
// if (selectKey !== null && selectKey !== undefined) {
//   const activeKey = selectKey
// } else {
//   const activeKey = selectKey
// }

// 更好的写法
const activeKey = selectKey ?? ''
console.log('activeKey', typeof activeKey)