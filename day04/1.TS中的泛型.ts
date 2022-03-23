export {}

//   可以综合传入的不同类型  在函数中处理

// 定义一个ID 函数 传入什么值返回什么值

function id(value: number): number{
  return value
}

// <a>  是泛型的变量  可以是任意类型
// 创建泛型函数
function CustomId <a>(value: a){
  return value
}

CustomId<number>(1)
CustomId(1) // 类型推导


// 泛型函数语法  能够保证类型安全  不是any
type CustomFunc = <T>(value1:T,vlaue2:T) => T

let func1: CustomFunc = (value) =>{
  return value
}
let num: string= func1('','')

