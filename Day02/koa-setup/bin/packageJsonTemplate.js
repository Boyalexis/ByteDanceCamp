import fs from 'fs'
import prettier from 'prettier'

export function createPackageJsonTemplate(config) {
  const template = fs.readFileSync("./template/package.ejs", "utf-8");

  const code = ejs.render(template, {
    packageName: config.packageName,
    router: config.middleware.router,
    static: config.middleware.static
  })
  return prettier.format(code, {
    parser: "json"
  })
}