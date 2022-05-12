import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './css/index.css'

// const app = React.createElement('h1', null, 'Hello,React 脚手架')

// ReactDOM.render(app, document.getElementById('root'))

/**
 * JSX语法
 */
let loading = true
const isLoding = () => {
  if (loading) {
    return <div style={{ color: 'green' }}>疯狂加载中...</div>
  } else {
    return <div>嘿嘿，加载好啦~</div>
  }
}
const list = [
  { id: 1, name: '1' },
  { id: 2, name: '22' },
  { id: 3, name: '333' },
]
const app = (
  <div>
    <h1 className="H1Name">JSX语法</h1>
    <div>{isLoding()}</div>
    <ul>
      {list.map((item) => (
        <li
          className="liClass"
          style={{ color: 'red', fontSize: '16px' }}
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
)

// ReactDOM.render(title, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)
