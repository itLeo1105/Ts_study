export {}

// 加上约束  T 类型必须有 length 数型
type CustomFunc = <T>(vlaue: T[])=>T[]

let func: CustomFunc = (value)=>{
  console.log(value.length)
  return value  
}


interface Ilength {
  length: number
}
let t1: Ilength = ''
// let t2: Ilength = 12

// ex2: extends 关键字
type CustomFunc2 = <T extends Ilength>(vlaue: T)=>T
let func2: CustomFunc2 =(vlaue)=>{
  console.log(vlaue.length)
  return vlaue
}
// func2(1)  数字没有length 属性
func2('')

