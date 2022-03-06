//npm init to initialize
//npm install sequelize pg pg-hstore to install sequelize for postgres

//getting sequelize ready
//just need to do it once hence can just do it in the setup

const {Sequelize} = require('Sequelize');

//Specifying the settings for the database
//use psql to connect
//use \du to see the users so that you know which to connect
const sequelize = new Sequelize("d8bcp6hg8hh3v5","vaixwvbauopgdz","3f2b2376c4aa30c28ef71880197e538638318a8bf9923fadd52d803e071fac54",{
    host:'ec2-54-83-21-198.compute-1.amazonaws.com',
    dialect: 'postgres',
});

async function sequelizeConnect(){
    try{
        await sequelize.authenticate();
        console.log('DB successfully connected !');
        return true;
    }catch(error){
        console.log("DB error is:", error);
        return false;
    }
}

//sequelizeConnect();

module.exports ={
    sequelize,
    sequelizeConnect
};