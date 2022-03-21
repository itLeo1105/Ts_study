export{}
type CustomFun = (start?: number, end? :number) => void
// 可选参数的位置必须处于必须参数的后面
const slice: CustomFun = () => {

}
slice()
slice(1,2)

// TS中的对象类型
let person: {
  userName: string, // 用户名类型是 String 类型
  age: number,
  run: Function,

} = {
  userName: 'Leo',
  age: 18,
  run(){
    console.log('1433223');
    
  }
}

let preson1: {
  run(): string, // 方法(): 返回值 返回值是字符串
}= {
  run () {
    return ''
  }
}

// 自定义类型 对象类型
type CustonObj = {
  username?: string, // ? 设置为可选参数
  age?: number,
  run: ()=> string // 可以指定返回值
  // run(): string  可以指定返回值
  // run: Function  无法指定返回值
}
let Leo: CustonObj  = {
  username: 'Leo',
  age:18,
  run: ()=>{
    return '你好呀'
  }
}
let Loo: CustonObj ={
  run: ()=>{
    return ''
  }
}