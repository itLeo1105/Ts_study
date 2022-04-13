let arr = [
  { value1: 12, arr1: [{ vlaue: 'ni', name: 'aa' }] },
  { value1: 12, arr1: [{ vlaue: 'hao', name: 'bb' }] },
  { value1: 12, arr1: [{ vlaue: 'ya', name: 'cc' }] },
]
let list = []
list = arr.map((item) => {
  item.arr1.map((val) => {
    aa: val.vlaue
    console.log(val)
  })
})
console.log(list)
