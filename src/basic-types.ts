let isDone: boolean = true

let username: string = 'garen'
let word: string = `hello ${username}`

let age: number = 24

// undefined, null 是任何类型的子类型
let u: undefined = undefined
let n: null = null

// any 任意类型
let notSure: any = 1000
notSure = 'my be a string'
notSure = true

notSure.name
notSure.getName()