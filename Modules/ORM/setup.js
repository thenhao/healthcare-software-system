const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('postgres://tmuobgzlcxdjns:28b2ce88edc5e7f0158274881a606f0cfb2ba3de12c5c3091fa844c3c67dc21b@ec2-44-198-29-193.compute-1.amazonaws.com:5432/d1u82dm0bpprsr', {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = {sequelize};