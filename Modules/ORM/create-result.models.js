const { DataTypes, Model} = require("sequelize");
const {sequelize} = require('./setup');
const Clinic = require('./clinic.model');
const Person = require('./person.model');

class TestResult extends Model {}

TestResult.init(
  {
    resultId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'result_ID'
    },
    FIN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clinicID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'clinic_ID'
    },
    result: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    outcome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
      defaultValue: new Date(),
    },
  },
  {
    sequelize,
    modelName: "MC",
    tableName: "MC",
  }
);

TestResult.belongsTo(
  Clinic,
  {
    foreignKey: 'clinicID'
  }
);

TestResult.belongsTo(
  Person,
  {
    foreignKey: 'FIN'
  }
);

module.exports = TestResult;