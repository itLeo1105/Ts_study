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

export const todos = (state = initialState, action: any) => {
  return state;
};