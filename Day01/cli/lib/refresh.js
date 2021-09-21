const fs = require('fs')
const handlebars = require('handlebars')
const chalk = require('chalk')

module.exports = async () => {
  const list = fs.readdirSync('./src/views')
    .filter(v => v !== 'Home.vue')
    .map(v => {
      name: v.replace('.vue', '').toLowerCase()
      file: v
    })
    
    // 生成路由定义
    compile({list}, './src/router.js', './template/router.js.hbs')
    // 生成彩蛋
    compile({list}, './src/App.vue', './template/App.js.hbs')

    function compile(meta, filepath, templatePath) {
      if(fs.existsSync(templatePath)) {
        const content = fs.readFileSync(templatePath).toString()
        const result = handlebars.compile(content)
        fs.writeFileSync(filePath, result)
        console.log(chalk.green(`${filePath} 创建成功`));
      }
    }
}