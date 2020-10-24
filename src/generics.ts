// 泛型
function echo<T>(arg: T): T {
  return arg;
}

const result = echo(123)
const isDone = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const r1 = swap([1.3444, 'string'])
r1[0].toUpperCase()
r1[1].toFixed(2)

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg;
}
const args = echoWithArr([1, 2, 4])

interface IWithLength {
  length: number;
}

function echoWithArr1<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg;
}
const str = echoWithArr1('str')
const obj = echoWithArr1({ length: 10, width: 10 })
const arr2 = echoWithArr1([1, 2, 3])
echoWithArr1(10)
