const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../index");

const User = sequelize.define(
  "user",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // cretated_at: {
    //   type: DataTypes.TIME,
    //   allowNull: false,
    // },
    // updated_at: {
    //   type: DataTypes.TIME,
    //   allowNull: true,
    // },
  },
  { timestamps: true, underscored: true }
);

module.exports = User;
