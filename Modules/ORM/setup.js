const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('postgres://enjgmasmlnsqyo:c70f126f919e457d8b4c68e8841d8b126d1c7eb982a6dd97bb50e40beeb36932@ec2-54-89-105-122.compute-1.amazonaws.com:5432/d4o0c0mfigoj4p', {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = {sequelize};