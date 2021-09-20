const fs = require('fs')

// 复制图片  read + write 读全部图片 占用全部内存 x

// 
const rs = fs.createReadStream('./1.png')
const ws = fs.createReadStream('./2.png')
rs.pipe(ws)