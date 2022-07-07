
// const activekey = (selectKey) => {
//   let result = []
//   if (selectKey) {
//     if (selectKey !== 'key1') {
//       result = getKey(selectKey)
//     }
//   }
//   return result
// }
// 更好的写法，提前结束，避免阅读多余的代码
const activekey = (selectKey) => {
  if (!selectKey) return []
  if (selectKey !== 'key1') {
    result = getKey(selectKey)
  }
  return []
}