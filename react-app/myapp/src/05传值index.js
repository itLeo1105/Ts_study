import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './css/index.css'

/**
 * 组件
 * 1.函数组件 -- 大写字母开头，必须有返回值
 * 2.class组件 -- 大写开头，继承React.Component,有render且有返回值
 */

class Child extends React.Component {
  state = {
    msg: '儿子叫爸爸了！！！！',
  }

  clickSon = () => {
    this.props.getMsg(this.state.msg)
  }
  render() {
    return (
      <div>
        父组件传递过来的值：{this.props.name}
        <button onClick={this.clickSon}>给爸爸传值</button>
      </div>
    )
  }
}

class App extends React.Component {
  state = { name: 'Leo', msg: '' }
  getMsg = (data) => {
    console.log('儿子给我传值了', data)
    this.setState({
      msg: data,
    })
  }
  render() {
    return (
      <div>
        {/**class 组件 props 传值 */}
        Name:{this.props.name}
        {this.state.msg}
        <Child name={this.state.name} getMsg={this.getMsg} />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App name="Leo" />)
