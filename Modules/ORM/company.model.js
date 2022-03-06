const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require('./setup');

class Company extends Model {}

Company.init(
  {
    UEN: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
      defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
      defaultValue: Sequelize.fn('NOW'),
    },
  },
  {
    sequelize,
    modelName: "Company",
    tableName: "Company",
  }
);

module.exports = Company;