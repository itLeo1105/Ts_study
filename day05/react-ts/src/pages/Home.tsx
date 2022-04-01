import { useLocation } from "react-router-dom"
import { CustomLei } from "./Login"
const Home = () => {
  // 可以获取到路由传递的内容
  const location = useLocation<CustomLei | undefined>() // 接受的泛型时 state 的数据类型
  // console.log(location.state.name)
  // 解决undefined 报错的三种方法
  // 1. 可选链 ？
  console.log(location.state?.name)
  // 2. 非空断言  --->  主观上不为空 该报错还是报错
  console.log(location.state!.name)
  // 3. 流程控制判断  if
  if (location.state?.name) {
    console.log(location.state.name)
  }

  return <div>主页</div>
}
export default Home
