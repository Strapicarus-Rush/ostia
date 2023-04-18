module.exports =  (router, jwt, Sequelize, dbConnection, bcrypt, saltRounds, dbpss, Dictionary) => {

    const User = require('../models/user')(Sequelize, dbConnection, bcrypt, saltRounds, dbpss);
    
    require('./users/auth')(User, router, jwt, Sequelize, dbConnection, bcrypt, Dictionary, saltRounds);


}