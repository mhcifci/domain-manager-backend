const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../index");

const DomainsHosts = sequelize.define(
  "domains_hosts",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, underscored: true, tableName: "domains_hosts" }
);

module.exports = {
  DomainsHosts,
};
