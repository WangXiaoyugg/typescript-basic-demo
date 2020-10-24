let numberArray: number[] = [1, 2, 3]
numberArray.push(4)

function test() {
  console.log(arguments)
}
let tuple: [string, number] = ['123', 1]
// 元组使用数组的方法跨界，但元素类型只能是tuple中规定的类型
tuple.push(1)
tuple.push('123')