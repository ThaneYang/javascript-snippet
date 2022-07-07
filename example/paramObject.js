// const getDetail = (icon, content) => {
//   console.log(icon)
//   console.log(content)
// }
// getDetail(data.icon, data.content)

// 更好的写法，因为后端返回的data里参数可能会变化

const getDetail = (data) => {
  const { icon, content } = data
  console.log(icon)
  console.log(content)
}
getDetail(data)