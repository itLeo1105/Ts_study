import { useHistory } from "react-router-dom"
type CustomLei = { name: string; age: number }
export type { CustomLei }
const Login = () => {
  const history = useHistory<CustomLei>()
  return (
    <div>
      <div>登录页</div>
      <div>
        <button
          onClick={() => {
            //   可以不传参数   传递参数就必须完整
            history.push("/home", {
              name: "xxxx",
              age: 18,
            })
          }}
        >
          登录
        </button>
      </div>
    </div>
  )
}
export default Login
