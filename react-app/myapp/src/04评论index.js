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
    user: '',
    content: '',
    contentList: [],
  }
  changeValue = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  publishContent = () => {
    const { user, content, contentList } = this.state
    if (user === '') {
      alert('请输入评论name')
      return false
    } else if (content === '') {
      alert('请输入评论content')
      return false
    } else {
      const newContentList = [
        {
          id: Math.random(),
          name: user,
          content,
        },
        ...contentList,
      ]
      // console.log(this.state)
      this.setState({
        contentList: newContentList,
        user: '',
        content: '',
      })
    }
  }

  returnList() {
    return this.state.contentList.length === 0 ? (
      <div style={{ color: 'red' }}>暂无评论，等下再来吧~</div>
    ) : (
      <ul>
        {this.state.contentList.map((item) => (
          <li key={item.id}>
            <h3>评论name：{item.name} 😵</h3>
            <p>评论内容：{item.content} 😻</p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const { user, content } = this.state
    return (
      <div className="bigbox">
        <input
          placeholder="请输入评论name"
          className="user"
          type="text"
          name="user"
          value={user}
          onChange={this.changeValue}
        ></input>
        <br />
        <br />
        <textarea
          placeholder="请输入评论content"
          className="content"
          name="content"
          value={content}
          onChange={this.changeValue}
        ></textarea>
        <br />
        <br />
        <button onClick={this.publishContent}>发表评论🚗</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        {this.returnList()}
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
