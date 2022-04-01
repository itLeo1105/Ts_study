import "./App.css"
// 导出路由模式
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Content from "./pages/content"
function App() {
  return (
    <div className="App">
      {/**路由放置规则 */}
      <Router>
        <ul>
          <li>
            <Link to="/Login">登录</Link>
          </li>
          <li>
            <Link to="/Home">首页</Link>
          </li>
          <li>
            <Link to="/Content">内容</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          {/* switch当前只有一个符合条件的路由 */}
          <Route path="/Login" component={Login}>
            {/* <Login></Login> */}
          </Route>
          <Route path="/Home" component={Home}>
            {/* <Home></Home> */}
          </Route>
          {/* 路由上接收动态参数 */}
          <Route path="/Content/:userId?" component={Content}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
