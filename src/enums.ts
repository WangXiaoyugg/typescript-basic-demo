// 枚举

// 数字枚举
enum Direction {
  Up = 10,
  Down,
  Left,
  Right,
}
// Up
Direction[0]

// 编译后的代码, 反向映射
// var Direction;
// (function (Direction){
//   Direction[Direction['Up']= 10] = 'Up'
//   Direction[Direction['Down']= 11] = 'Down'
//   Direction[Direction['Left']= 12] = 'Left'
//   Direction[Direction['Right']= 13] = 'Right'
// })(Direction || Direction = {})

// 字符串枚举
enum Direction2 {
  Up = 'UP',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// 常量枚举 提升性能
const enum Direction3 {
  Up = 'UP',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
const value = 'UP'
if (value === Direction3.Up) {
  console.log('go up')
}