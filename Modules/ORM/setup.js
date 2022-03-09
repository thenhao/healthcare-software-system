const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('postgres://czrhtxaxrmwyxv:e70ab5cb4a4a63699238999e6fb3df947e920547b399c6163a911c95f90782a1@ec2-18-210-191-5.compute-1.amazonaws.com:5432/d84tq21cltsr8i', {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = {sequelize};