// 对对象的形状的进行描述
// 鸭子类型
interface Person {
  name: string;
  age: number;
  address?: string;
  readonly id: number;
}

let garen: Person = {
  name: 'garen',
  age: 18,
  id: 1
}
garen.id = 123