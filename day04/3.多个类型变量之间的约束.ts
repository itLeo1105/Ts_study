export {}

// 定义方法  获取对象中的属性的值

const obj  = {name:'张三',age:18}

const o1 = {name:'里斯',age:88}
//  传入对象 属性
/**
 * Key extends keyof T
 * @param Key  自定义类型变量名称
 * @param extends  继承
 *  keyof 表示属于后面对象中的一个值
 */
function getObjValue  <T extends object ,Key extends keyof T>(obj: T, key:Key | '') {

}
// getObjValue<object>(obj,'')

// key 的值只能 o里面的元素
// extends keyof  
function  getO1Name<T extends object,Key extends keyof T> (o:T ,key: Key | ''){

}
getO1Name(o1, 'name')
// key 必须是第一个参数中的一个值
getObjValue({name:'里斯'},'name')
getObjValue(obj,'age')