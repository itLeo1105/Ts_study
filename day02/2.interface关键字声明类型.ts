export {}

// interface I 接口名称 {}

// 接口类型只能用来描述 对象形式

interface IPerple {
  username: string,
  age: number,
  run?: ()=> string
}

let p1: IPerple = {
  username: '张三',
  age: 18
}

/** 
区别  
type  可以给任意类型指定别名
interface 只能为对象指定类型
*/


// 接口继承
interface Point2D {
  x: number,
  y: number
}
interface Point3D extends Point2D { // 继承Point2D 的属性
  z: number
}