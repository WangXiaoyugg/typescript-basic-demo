// 内部类型

// 全局对象
const a: Array<number> = [1, 2, 3]
const date: Date = new Date()
date.getTime()
const reg: RegExp = /abc/
reg.test('abc')


// 内建对象
Math.pow(2, 2)

// DOM and BOM
let body = document.body
let allLis = document.querySelectorAll('li')
allLis.keys()

document.addEventListener('click', (e) => {
  e.preventDefault()
})

// 实用类型
interface IPerson2 {
  name: string;
  age: number;
}
let garen: IPerson2 = { name: 'garen', age: 30 }
type IPartial = Partial<IPerson2>
let garen2: IPartial = { name: 'garen2' }

type IOmit = Omit<IPerson2, 'name'>
let garen3: IOmit = { age: 40 }