import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './css/index.css'

/**
 * 组件
 * 1.函数组件 -- 大写字母开头，必须有返回值
 * 2.class组件 -- 大写开头，继承React.Component,有render且有返回值
 */

class App extends React.Component {
  state = {
    a: '',
    content: '',
    checked: false,
  }
  changeValue = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.value : target.checked
    this.setState({
      // [name]: value,
    })
  }
  // textAreaValue = (e) => {
  //   this.setState({
  //     content: e.target.value,
  //   })
  // }
  // checkValue = (e) => {
  //   this.setState({
  //     checked: e.target.checked,
  //   })
  // }

  render() {
    return (
      <div>
        <input
          type="text"
          name="a"
          value={this.state.a}
          onChange={this.changeValue}
        ></input>
        <br />
        <br />
        <br />
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.changeValue}
        ></textarea>
        <br />
        <br />
        <br />
        <input
          name="checked"
          type="checkbox"
          checked={this.state.checked}
          onChange={this.changeValue}
        ></input>
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
