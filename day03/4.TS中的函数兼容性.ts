export {}

type F1 = (a: number)=> void
type F2 = (a: number, b: number)=> void // void 表示没有返回值

// 函数参数的兼容性 参数少的 可以赋值给参数多的
let func: F1 =(a: number)=>{
  return a // 这里返回值不会影响 少的类型  void
}

let  func2: F2 = func