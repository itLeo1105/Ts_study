export {}

// js 中的上下文 typeof
console.log(typeof 'hello');


let p = {
   x: 1,
   y: 2
}
type CustomObj = {
  x: number,
  y: number
}
function formP (a: CustomObj){

}
formP(p)

type customType = typeof p 
function formP2(b: customType) {

}

let c = {
  x: 1,
  y: 2
}
formP2(c)