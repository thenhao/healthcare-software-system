const {DataTypes, Model} = require('Sequelize');
const {sequelize, testConnection} = require("./setup.js");

class Mc extends Model{}

Mc.init({
    mcId:{
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
    mcStartDate:{
        type:DataTypes.DATE,
        allowNull:false

    },
    mcEndDate:{
        type:DataTypes.DATE,
        allowNull:false

    },
    status:{
        type:DataTypes.STRING,
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
        modelName:"Mc",
        tableName:"Mc"
    });

//foreign key declare here
//remember to import in the neccessary models too
//example of foreign key linking
// Parkinghistories.belongsTo(Vehicle,{
//     foreignKey:"vehicle_id"
// });

    Mc.sync();
    module.exports= Mc;