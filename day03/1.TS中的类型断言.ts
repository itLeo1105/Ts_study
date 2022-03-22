export {}

const aLink = document.getElementById('alink')  as HTMLAnchorElement // 类型断言

aLink.href = "http://www.baidu.com"

// TS 只能推到一个宽泛类型的时候 可以用类型断言直接推导
// 类型断言 明确知道一个变量的类型 => 强制转换 => 真是的类型

type CustomObj1 ={
  username: string,
  age: number
}
type CustomObj2 ={
  username: string,
  age: number,
  sex: string
}
let p: CustomObj1 ={
  username:'张三',
  age: 18
}
p = {
  username:'张三',
  age: 18,
  sex:"男"
} as CustomObj2