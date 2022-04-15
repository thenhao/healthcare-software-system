const { DataTypes, Model} = require("sequelize");
const {sequelize} = require('./setup');
const Clinic = require('./clinic.model');
const Person = require('./person.model');

class Mc extends Model {}

Mc.init(
  {
    mcId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'mc_ID'
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
    mcStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'mc_start_date'
    },
    mcEndDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'mc_end_date'
    },
    status: {
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

Mc.belongsTo(
  Clinic,
  {
    foreignKey: 'clinicID'
  }
);

Mc.belongsTo(
  Person,
  {
    foreignKey: 'FIN'
  }
);

module.exports = Mc;