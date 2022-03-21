export {}

// enum 定义一个变量名提供一个可枚举
// 枚举值从  0 开始   可以直接  = xx数值   指定从 xx 开始递增
enum str {
  left = 88,
  right,
  up,
  dowm
}
function changeStr(a: str) {

}
changeStr(str.dowm)
changeStr(89)