// 类型推论
let str = 'string'
str = 123

// 联合类型
let numberOrString: number | string
// numberOrString = 'abc'
// numberOrString = 123
// 只能反问联合类型的公有属性和方法
numberOrString.toString()

// 类型断言
function getLength(input: string | number): number {
  const str = input as string;
  if (str.length) {
    return str.length
  } else {
    const number = input as number;
    return number.toString().length
  }
}

// 类型守卫，条件语句缩小类型范围
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}
