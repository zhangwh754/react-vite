export default class CustomError extends Error {
  code: number

  constructor(message: string, code: number) {
    super(message) // 调用基类的构造函数，并传递错误消息

    this.code = code // 自定义错误代码
  }
}
