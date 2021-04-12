const {Sequelize} = require('sequelize');

<<<<<<< HEAD
const sequelize = new Sequelize(process.env.DATABASE_URL, { logging: false });
=======
const sequelize = new Sequelize(process.env.DATABASE_URL, {logging: false});
>>>>>>> 848dbb53572b80539d7a63f822d9d3ad64ff734a

module.exports = sequelize;
