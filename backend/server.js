const Dictionary = require('./app/dictionary')();
const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const http = require('http').Server(app);
const cors = require('cors');
const saltRounds = +process.env.saltRounds;
const db = process.env.db;
const dbusr = process.env.dbusr;
const dbpss = process.env.dbpss;
const srvport = +process.env.srvport;

const dbConnection = new Sequelize(db, dbusr, dbpss, {
    host: 'localhost',//'host.docker.internal',
    dialect: 'mysql',
    timezone: "-04:00",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "5mb", parameterLimit: 500 }));

app.use('/api', router);

function getRoute(req) {
    return `${req.hostname}${req.originalUrl}` 
  }
  
  app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`${req.method} ${getRoute(req)} ${res.statusCode}`) 
    })
    next()
  });

app.use('/', express.static(process.env.staticpath));

require('./app')(router, jwt, Sequelize, dbConnection, bcrypt, saltRounds, dbpss, Dictionary)
router.get('/',  (req, res) => {
    res.json({ message: 'Api Agil Ganaderia.' });
});


app.get('/', (req, res) => {
    res.sendFile(process.env.indexpath);
});


http.listen(srvport)