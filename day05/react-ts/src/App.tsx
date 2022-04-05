import {useSelector} from  'react-redux'
import type {TodoList} from './store/reducers/todos'
import {RootState} from './store/index'
function App() {
  // 方式一
  // 没有指定类型  需要指定 泛型类型 <总体的state，获取的state>
  // const todos = useSelector<{todos:TodoList},TodoList>((state)=> state.todos)
  // console.log(todos);

  // 方式二
  // 可以不指定泛型类型  指定回调参数的类型
  // const todos = useSelector((state:{todos:TodoList}) => state.todos)
  //  使用returnType 导出类型  state 类型不需要手动写
  const todos = useSelector((state:RootState) => state.todos)
  
  return (
    <div>
      <h1>Leo</h1>
      <ul>
        {/*react 中写ts 只要有类型就会有提示*/}
        {todos.map(item =>{
          return <li key={item.id}>{item.text}</li>
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