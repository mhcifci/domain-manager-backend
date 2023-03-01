const Sequelize = require('sequelize');

const sequelize = new Sequelize('database_name', 'user_name', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;