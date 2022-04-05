import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // useEffect 是一个hook
  useEffect(()=>{
    // 回调函数什么执行
    window.addEventListener('resize', function(){
      // 此时只要窗口发生变化就会出发
      console.log('窗口变化了');
    })
    // useEffect 可以返回内容
    return ()=>{
      // 回调函数的意义   settimeout  一直存在  
      // 执行时机 ----   销毁组件 或者 完成一次更新的时候会执行这个函数
    }
  },[])
  // useEffect()  // 第二个参数不传每次函数更新都会执行
  // userEffect (, [])  // 只会在渲染时执行第一次
  // userEffect (, [变量1，.....])  只要依赖的变量发生变化回调函数都会执行
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
