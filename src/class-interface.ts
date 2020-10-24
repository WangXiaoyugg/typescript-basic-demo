// 继承的困境
// 类去implements 接口
// 抽象和验证类的属性和方法，更加灵活

interface Radio {
  switchRadio(trigger: boolean): void;
}
// interface Battery {
//   checkBatteryStatus(): void
// }

interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void
}

class Car implements Radio {
  switchRadio(trigger: boolean) { }
}

class Cellphone implements RadioWithBattery {
  switchRadio(trigger: boolean) { }
  checkBatteryStatus() { }
}