export {}

type CustomObj1 = {
  name: string,
  age: number,
  sex: string,
  address: string
}
type CustomObj2 = {
  name: string,
  age: number,
  sex: string
}
 let p1: CustomObj1 ={
   name: '张三',
   age: 18,
   sex: '男',
   address: '深圳'
   //  对象的兼容性    对象多的属性  =>  可以赋值给对象少的属性
 }

 // 具有相同结构可以相互赋值
 let p2: CustomObj2 = p1

 // ts 是结构化的类型系统
 
