// 打印欢迎界面
// promisify可以将普通的方法包装成promise风格
const { promisify } = require("util");

// figlet可以在命令行输出类似logo的海报，用于打印欢迎页面，是一个异步过程
const figlet = promisify(require("figlet"));
// 清屏
const clear = require("clear");
// chalk可以修改命令行输出的字符颜色
const chalk = require("chalk");
const { clone } = require('./download');
const open = require('open')

const log = content => console.log(chalk.green(content));
const spawn = async(...args) => {
  const { spawn } = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}

module.exports = async name => {
  // 打印欢迎界面
  clear()
  const data = await figlet('RONALDO')
  log(data)

  //项目模板
  log('创建项目' + name)
  await clone("github:su37josephxia/vue-template", name)
  log(`🚲安装依赖...`)
  
  log(chalk.green(
    `
      👌安装完成
      To get Start:
      =================
      cd ${name}
      npm run serve
      =================
    `
  ));
  open("http://localhost:8080")
  await spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install'], { cwd: `./${name}` })
  
}