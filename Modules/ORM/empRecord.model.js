const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require('./setup');
const Company = require('./company.model');

class EmployeeRecord extends Model {}

EmployeeRecord.init(
  {
    employeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'employee_ID'
    },
    FIN: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    companyUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'company_UEN'
    },
    isWorkingToday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_working_today'
    },
    sickLeaveClaimed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sick_leave_claimed'
    },
    sickLeaveRemaining: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sick_leave_remaining'
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
    modelName: "EmployeeRecord",
    tableName: "EmployeeRecord",
  }
);

EmployeeRecord.belongsTo(
  Company,
  {
    foreignKey: 'companyUEN'
  }
);

module.exports = EmployeeRecord;

