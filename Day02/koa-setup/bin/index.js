// import fs from 'fs'
// import {createIndexTemplate} from './indexTemplate.js'
// import {createPackageJsonTemplate} from './packageJsonTemplate.js'
// import {question} from './question/index.js'
// import { createConfig } from "./config.js";
// import execa from 'execa'

// const answer = await question()
// const config = createConfig(answer)

// // 1.创建文件夹
// fs.mkdirSync(getRootPath())
// // 2.创建index.js
// fs.writeFileSync(getRootPath() + "/index.js",createIndexTemplate(config))
// // 3.创建package.json
// fs.writeFileSync(getRootPath() + "/package.json", createPackageJsonTemplate(config))
// // 4. 安装依赖
// // TODO package -> yarn
// execa("npm install", {
//   cwd: getRootPath(),
//   stdio: [2,2,2]
// })

// function getRootPath() {
//   return 'haha'
// }

import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js";
import { createPackageJsonTemplate } from "./packageJsonTemplate.js";
import { question } from "./question/index.js";
import { createConfig } from "./config.js";
import execa from "execa";

const answer = question();
const config = createConfig(answer);

fs.mkdirSync(getRootPath());

// // 2. 创建了 index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(config));

// // 3. 创建了 Package.json
// // 练习点： 基于数据生成 package.json
fs.writeFileSync(
  getRootPath() + "/package.json",
  createPackageJsonTemplate(config)
);

// // 4. 安装依赖
// // TODO package  -> yarn
execa("yarn", {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});

function getRootPath() {
  return "./haha";
}
