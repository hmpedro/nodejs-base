const Sequelize = require('sequelize');
const entities = require('./entities');
/*
new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  logging: false,
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
});
*/

/**
 * sqliteConn
 * @typedef Sequelize
 */
const sqliteConn = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3',
});

entities.init(sqliteConn);

/**
 * returns { Sequelize } sqliteConn
 */
module.exports = sqliteConn;
