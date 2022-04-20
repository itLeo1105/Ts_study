import {useSelector} from  'react-redux'
import type {TodoList} from './store/reducers/todos'
import {RootState} from './store/index'
import {useDispatch} from 'react-redux'
import { useRef } from 'react'
import { AddToDo, DelToDo,toggleToDo } from './store/actions/todos'
function App() {
  // 方式一
  // 没有指定类型  需要指定 泛型类型 <总体的state，获取的state>
  // const todos = useSelector<{todos:TodoList},TodoList>((state)=> state.todos)
  // console.log(todos);

  // 方式二
  // 可以不指定泛型类型  指定回调参数的类型
  // const todos = useSelector((state:{todos:TodoList}) => state.todos)
  //  使用returnType 导出类型  state 类型不需要手动写
  const dispatch = useDispatch()
  const inpRef = useRef<HTMLInputElement>(null)
  const todos = useSelector((state:RootState) => state.todos)
  const add = ()=>{
    // 使用ref 获取 input 的值 通过 action 添加到列表
    if(inpRef.current) {
      dispatch(AddToDo(inpRef.current.value))
      inpRef.current.value = '' // 清空 input 的值

      // dispatch({ // 原始分发
      //   type:'todos/add',
      //   payload:inpRef.current.value
      // })
    }
  }
  const del =(id: number)=>{
    dispatch(DelToDo(id))
  }
  const toggle = (id:number)=>{
    dispatch(toggleToDo(id))
  }
  const changeValue =(event:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.value);
    
  }
  return (
    <div>
      <h1>Leo</h1>
      <ul>
        {/*react 中写ts 只要有类型就会有提示*/}
        <div>
          <input type="text" onChange={changeValue} ref={inpRef}/> <button onClick={add}>添加任务</button>
        </div>
        <hr />
        {todos.map(item =>{
          return <li key={item.id}>
            <span onClick={()=>toggle(item.id)} style={{display:'inline-block',width:'300px',color:item.done?'green':'red'}}>{item.text}</span>
            <button onClick={()=>del(item.id)}>删除</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default App

// useSelector 类型，源码如下：
// TState = DefaultRootState 是 泛型参数 的默认值，设置默认值后，将来在调用该函数时，可以省略该泛型参数不写
// export function useSelector<TState = DefaultRootState, TSelected = unknown>(
// 	// 第一个参数：回调函数，用来获取 redux 状态的回调函数，通过回调函数的返回值来指定要获取的状态
//   selector: (state: TState) => TSelected,
//   // 第二个参数：可以拿到更新前后的两次状态，通过返回的布尔值就可以来知道状态是否发生变化
//   equalityFn?: (left: TSelected, right: TSelected) => boolean
// ): TSelected;