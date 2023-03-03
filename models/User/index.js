const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../index");

const User = sequelize.define(
  "users",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, underscored: true, tableName: "users" }
);

module.exports = User;
