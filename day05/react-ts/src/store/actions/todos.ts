// // 第一种方式 
// // 现实todos  的增 删 改 查
// // 新建一个 新增类型的   action

// type AddToDo = {
//   type:'todos/add', // 字面量类型
//   payload:string // 添加 todo 参数    载荷参数
// }
// type DeleToDo = {
//   type:'todos/dele',
//   payload: number    // 删除时可以根据 ID 来删除
// }  
// // action-creator 返回一个action 对象   {type:'',payload: '' }
// //  现有类型 后有action 
// export const addtodo = (name:string):AddToDo=>({
//   type:'todos/add',
//   payload:name
// })

// // 删除类型
// export const deletodo = (id:number): DeleToDo=>({
//   type:'todos/dele',
//   payload:id
// })
// export {}

// 第二种方式

// 添加todos
export const AddToDo = (name: string) =>({
  type:'todos/add' as const,
  payload: name
})
// 删除todos
export const DelToDo = (id: number) =>({
  type:'todos/del' as const,
  payload: id
})
// 替换todos
export const toggleToDo = (id: number) =>({
  type:'todos/toggle' as const,
  payload: id
})
type addtodo = ReturnType<typeof AddToDo>
type deltodo = ReturnType<typeof DelToDo>
type toggletodo = ReturnType<typeof toggleToDo>

export type toDoAction = addtodo | deltodo | toggletodo