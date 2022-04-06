import type {toDoAction} from '../actions/todos'

type TodoList = {
  id: number;
  text: string;
  done: boolean;
}[];
export type {TodoList}
const initialState: TodoList = [
  {
    id: 1,
    text: '吃饭',
    done: false,
  },
  {
    id: 2,
    text: '睡觉',
    done: true,
  },
  {
    id: 3,
    text: '打豆豆',
    done: false,
  },
];

// reducer  参数
export const todos = (state = initialState, action: toDoAction): TodoList => {
  // reducer中的作用     根据当前 action type 进行逻辑数据处理  返回一个新的状态 ----->  UI 更新
  switch (action.type) {
    case 'todos/add':
      const id =  state.length===0? 1 : state[state.length -1 ].id + 1 
      return [...state, {
        text: action.payload,
        done:true,
        id
      }]
      case 'todos/del':
        return state.filter(item => item.id != action.payload)
      case 'todos/toggle':
        return state.map(item => {
          if(item.id === action.payload) {
            return {...item, done:!item.done}
          }
          return item
        })
  
    default:
      return state
  }
};