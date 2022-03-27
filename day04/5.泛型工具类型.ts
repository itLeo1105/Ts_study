export {}

// 一、  Partial   可以将所有属性变成 可选类型

type CustName = {
  name: string,
  age: number,
  address: string
}

type CustName2 =  Partial<CustName>
let preson: CustName2 = {
  name: '张三',
  age: 18,
  address: '深圳' 
}

// 源码方式
// type Partial<T> = {
//   [P in keyof T]? : T[P]

// }

// 二、  Readonly   可以将所有属性变成只读属性

type CustName3 = {
  name: string,
  age: number,
  money: number
}

type CustName4 = Readonly<CustName3>

let CustName5: CustName4   = {
  name: '里斯',
  age:8888,
  money: 123
}

// CustName5.money = 88888   //   只读属性不能修改

// 三、  Pick   从 Type 中选择一组属性来构造新类型

interface Tt {
  name: string,
  age: number,
  list:number[]
}

type CustName6 = Partial<Readonly<Pick<Tt, 'name'>>>

let Tt2:CustName6 = {
  // name:'wangwu',
  // age:999
}

