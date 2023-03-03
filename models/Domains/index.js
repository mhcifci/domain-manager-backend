const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../index");

const Domains = sequelize.define(
  "domains",
  {
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    host: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_banned: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true, underscored: true, tableName: "domains" }
);

const UnusedDomains = sequelize.define(
  "unused_domains",
  {
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    host: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_banned: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true, underscored: true, tableName: "unused_domains" }
);

module.exports = { Domains, UnusedDomains, sequelize };
