import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { type } from "os"

type CustomArr = {
  id: number
  name: string
}[]
// TS 先有类型 再写代码
let fn = () => {
  // 手动抛出异常
  // throw new Error("err....") // 抛出异常永远不会返回内容
  // while (true) {} // 死循环永远没有结果 ===> never
  const a = 1
  if (a != 1) {
    n = a
  } // 永远不会进入
}
let n = fn() // n => never
function App() {
  const [unmber] = useState(0) // 直接传入泛型的写法
  const [count, setCount] = useState<CustomArr>([]) // useState 必须指定一个泛型类型 是对象 数组 等
  return (
    <div className="App">
      {/* <div>当前计数 {{ count }}</div> */}
      <ul>
        {count.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
      <br />
      <button
        onClick={() => {
          setCount([
            {
              id: 1,
              name: "v_xinzhuang",
            },
          ])
        }}
      >
        添加类型
      </button>
    </div>
  )
}

export default App
