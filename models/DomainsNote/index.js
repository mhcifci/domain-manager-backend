const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../index");

const DomainsNote = sequelize.define(
  "domains_note",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    domain_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, underscored: true, tableName: "domains_note" }
);

module.exports = {
  DomainsNote
};
