const Sequelize = require('sequelize');
module.exports={
    mongoUrl:'mongodb://localhost:27017/vin-cars'
};
/*
module.exports =  new Sequelize('codegig', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
*/