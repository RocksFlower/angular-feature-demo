/**
 * 这个简写语法做了很多：

 * 声明了一个构造函数参数及其类型。

 * 声明了一个同名的公共属性。

 * 当创建该类的一个实例时，把该属性初始化为相应的参数值。
 */
export class Hero {
    constructor(
        public id: number,
        public name: string) { }
}

