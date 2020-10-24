/**
 * 类 定义一切事物的抽象特点
 * 对象 类的实例
 * 面向对象三大特性 封装 继承，多态
 * 
 * 三种修饰符
 * public 修饰的属性或方法是公有的
 * private 修饰的属性和方法是私有的
 * protected 修饰的属性和方法只能在父类和子类访问, 实例不能调用
 */

class Animal {
  readonly name: string
  constructor(name) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}
const snake = new Animal('lisa')
snake.name = '123'
console.log(snake.run())

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}
const wangcai = new Dog('wangcai')
console.log(wangcai.run())

class Cat extends Animal {
  static categories = ['mammal']
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run()
  }
}
const goudan = new Cat('goudan')
console.log(goudan.run())
console.log(Cat.categories)