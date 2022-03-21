export {}

let str1 = 'Leo' // 变量类型为 string 可以为任意字符串

const str2 = 'Leo' // 不可更改的常量  字面量类型   --- Leo

// 字面量类型就是一个固定的值 可以和联合类型使用 ↓
 type FangXiang = 'left'| 'right' | 'up' | 'down'

 function changeFangXiang(fx: FangXiang) {

 }
 changeFangXiang("down")