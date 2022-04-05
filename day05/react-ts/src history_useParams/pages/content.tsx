import { useParams } from "react-router-dom"
const Content = () => {
  const params = useParams<{ userId?: string; name?: string }>()
  // useParams 泛型函数 接收固定结构的参数   传入的泛型结构
  console.log(params.userId)
  console.log(params.name)
  if (params.userId) {
    console.log(params.userId.length)
  }
  if (params.name) {
    console.log(params.name)
  }
  return <div>内容部分</div>
}
export default Content
