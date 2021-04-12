const {Sequelize} = require('sequelize');

<<<<<<< HEAD
<<<<<<< HEAD
const sequelize = new Sequelize(process.env.DATABASE_URL, { logging: false });
=======
const sequelize = new Sequelize(process.env.DATABASE_URL, {logging: false});
>>>>>>> 848dbb53572b80539d7a63f822d9d3ad64ff734a
=======
const sequelize = new Sequelize(process.env.DATABASE_URL, { logging: false });
>>>>>>> d52e1c086b2eb5be3da976f198a9267a7604065d

module.exports = sequelize;
