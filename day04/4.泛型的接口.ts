export {}
// 泛型 接口  定义  interface

interface func<T> {
  name: (value: T) => T,
  obj?:()=>T
}

let nameFunc: func<string> = {
  name:(value)=>{
    return value
  }
}

nameFunc.name('123')