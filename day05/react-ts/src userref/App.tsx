import { useRef } from "react"
import "./App.css"

let x: null | undefined | { name: string }
let x1 = x
let x2 = x! // 非空断言  断定x 不能为空也不可能为 undefend
// 为空断言 主观上不报错  程序运行该报错还是会报错

let a: number | string = 1
if (typeof a === "number") {
  console.log(a)
} else {
  console.log(a)
}
function App() {
  const inpuref = useRef<HTMLInputElement>(null)
  // 此时的ref 类型是 input 类型 所以需指定泛型为 HTMLInputElement
  return (
    <div className="App">
      {/*获取input dom*/}
      <input type="text" ref={inpuref} />
      <div>
        <button
          onClick={() => {
            {
              /**? 可选链操作符 */
            }
            if (inpuref.current) {
              console.log(inpuref.current.value)
            }
            // console.log(inpuref.current?.value)
          }}
        >
          打印DOM
        </button>
      </div>
    </div>
  )
}

export default App
