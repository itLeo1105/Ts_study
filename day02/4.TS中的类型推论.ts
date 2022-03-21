export {}

// 类型推论  Ts 可以自动推导出类型
let name = 'Leo' // 声明初始值时进行了类型的推导
// name = 1 

function add (num1: number, num2: number) {
  return num1 + num2
}
let arr = '123'
// arr = add(1,2)