const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../index");

const DomainsCategory = sequelize.define(
  "domains_category",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { timestamps: true, underscored: true, tableName: "domains_category" }
);

module.exports = {
  DomainsCategory
};
