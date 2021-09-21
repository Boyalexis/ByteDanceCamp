(async () => {
  const Sequelize = require("sequelize");
  // 连接数据库
  const sequelize = new Sequelize('mysql', 'root', "djh123456", {
      host: "localhost",
      dialect: "mysql"
  });
  // 定义模型
  const Fruit = sequelize.define('Fruit', {
      name: { type: Sequelize.STRING(20), allowNull: false },
      price: { type: Sequelize.FLOAT, allowNull: false },
      stock: {
          type: Sequelize.INTEGER, defaultValue: 0
      }
  })
  let ret = await Fruit.sync();
  console.log('sync', ret)
  // 增
  ret = await Fruit.create({
      name: "香蕉",
      price: 3.5
  })
  console.log('create', ret)
  // 查
  ret = await Fruit.findAll();
  console.log('find', JSON.stringify(ret));
  // 改
  await Fruit.update({ price: 5 }, { where: { name: "香蕉" } })
  // 条件查询
  const Op = Sequelize.Op;
  ret = await Fruit.findAll({
      where: { price: { [Op.lt]: 5, [Op.gt]: 2 } }
  })
  console.log(ret)
})()
