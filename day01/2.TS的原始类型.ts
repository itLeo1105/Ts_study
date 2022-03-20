export {}
// 1.原始类型 string
let username: string = "Leo huang"
// 原始类型 number
let age: number = 23
// 2.原始类型 boolean
let isTrue: boolean = false
// 3.原始类型 null
let nullType: null = null 
// 4.原始类型 undefined
let undType: undefined = undefined
// 5.原始类型 symbol
let uniqe: symbol = Symbol()
//每个symbol方法返回的值永远是唯一的
// 在框架中需要唯一的标识可以使用此类型 

// 数组命名

// 1. 数型[] 写法
let list1: string[] = ['Leo','Lee','Lao']
list1.forEach(item => {
  // item.push() // ts检测到数组元素不是数组类型没有push 方法

})

// 2. Array<类型>
let list2: Array<string> = ['Leo','Lee','Lao']
let numList: Array<number> = [1,2,3,4]

// 联合类型 ---- (使用 | 将需要的类型进行分割)
let psk: number | null  = 122
// 数组存在多个类型
let arr1: (string | number)[] = [111,'hello']
let arr2: Array<number|string> = ['psk',111]

// 使用类型别名
// 当该类别类型被频繁使用时   ---  大驼峰
type ArrList =Array<string|number>
let arr3: ArrList = [123,'1234']

// 函数类型值
// 约束传值类型
function add(num1: string,num2: number): string{  // 限制返回值是字符串类型
  return num1 + num2
}
add('1',2)
// let psk1 :string = add('1',2)
// 箭头函数函数写法
const add2 =(num1:number,num2:number): number=> {
   return num1 + num2
}
// 同时指定参数和返回值
// 自定义类型的函数用的返回值 指定 不再是 ：   而是用箭头函数
type FunCust = (num1: number,num2: number) => number
const add3: FunCust= ()=> { // add3 指定参数是数字 返回值也是数字
  return 123
}
add3(1,2)

// void 类型
// 假如函数没有返回值 可以用 void 关键字来指定
type FunCust2 = () => void
// 表示函数没有返回值
const add4: FunCust2 = () =>{
  // 类型兼容  未指定返回值类型 返回了值
  return 123
}
// 什么都不写返回值 默认是 void
const  add5 = () => {}

