import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './css/index.css'
import Hello from './components/Hello'

/**
 * 组件
 * 1.函数组件 -- 大写字母开头，必须有返回值
 * 2.class组件 -- 大写开头，继承React.Component,有render且有返回值
 */

// function Zujian1() {
//   return <div>这是组件一</div>
// }
// 函数组件
const Zujian1 = () => <div style={{ color: 'red' }}>这是组件一</div>

// class 类组件
class Zujian2 extends React.Component {
  render() {
    return <div style={{ color: 'skyblue' }}>这是组件二</div>
  }
}
const app = (
  <div>
    <Zujian1 />
    <Zujian2 />
    <Hello />
  </div>
)

// ReactDOM.render(title, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)
