const mysql = require('mysql2/promise');
// 连接配置
const cfg = {
        host: "localhost",
        user: "root", // 你的用户名
        password: "password", // 你的密码
        database: "database" // 数据库名称
 }
// 建立连接
const connection = await mysql.createConnection(cfg);
// 创建test表
let ret = await connection.execute(`
        CREATE TABLE IF NOT EXISTS test(
            id INT NOT NULL AUTO_INCREMENT,
            message VARCHAR(45) NULL,
        PRIMARY KEY (id))
`)
console.log('create', ret);

// 连接关闭
connection.end();
