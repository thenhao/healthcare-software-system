const {DataTypes, Model} = require('Sequelize');
const {sequelize, testConnection} = require("./setup.js");

class MedicalRecord extends Model{}

MedicalRecord.init({
    regNo:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    
    },
    FIN:{
        type:DataTypes.INTEGER,
        allowNull:false

    },
    clinicID:{
        type:DataTypes.INTEGER,
        allowNull:false

    },
    issueMC:{
        type:DataTypes.BOOLEAN,
        allowNull:false

    },
    mcID:{
        type:DataTypes.INTEGER,
        allowNull:true

    },
    medicalHistory:{
        type:DataTypes.STRING,
        allowNull:false

    },
    currentDiagnosis:{
        type:DataTypes.STRING,
        allowNull:false

    },
    visitHistory:{
        type:DataTypes.STRING,
        allowNull:false

    },
    nextOfKinName:{
        type:DataTypes.STRING,
        allowNull:false

    },
    nextOfKinContact:{
        type:DataTypes.INTEGER,
        allowNull:false

    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:false

    },
    updatedAt:{
        type:DataTypes.DATE,
        allowNull:false

    }
}, 
    {
        sequelize, 
        modelName:"MedicalRecord",
        tableName:"MedicalRecord"
    });

//foreign key declare here
//remember to import in the neccessary models too
//example of foreign key linking
// Parkinghistories.belongsTo(Vehicle,{
//     foreignKey:"vehicle_id"
// });

MedicalRecord.sync();

module.exports= MedicalRecord;