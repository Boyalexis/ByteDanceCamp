// 打印欢迎界面
// promisify可以将普通的方法包装成promise风格
const { promisify } = require("util");

// figlet可以在命令行输出类似logo的海报，用于打印欢迎页面，是一个异步过程
const figlet = promisify(require("figlet"));
// 清屏
const clear = require("clear");
// chalk可以修改命令行输出的字符颜色
const chalk = require("chalk");
const { clone } = require('./download')


const log = content => console.log(chalk.green(content));

module.exports = async name => {
  // 打印欢迎界面
  clear()
  const data = await figlet('RONALDO')
  log(data)

  //项目模板
  log('创建项目' + name)
  await clone("github:littleluckly/vueDemo", name)
}