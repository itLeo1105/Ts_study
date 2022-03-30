import { useRef } from "react"
import "./App.css"
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
            console.log(inpuref.current?.value)
          }}
        >
          打印DOM
        </button>
      </div>
    </div>
  )
}

export default App
