const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require('./setup');

class NextOfKin extends Model {}

NextOfKin.init(
    {
      nextOfKinID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'next_of_kin_ID'
      },
      nextOfKinName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'next_of_kin_name'
      },
        nextOfKinContact: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'next_of_kin_contact'
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
      modelName: "NextOfKin",
      tableName: "nextOfKin",
    }
  );

module.exports = NextOfKin;