const sequelizeConn = require('./sequelize');

module.exports = {
  /**
   *
   * @return { Sequelize } sequelizeConn
   */
  connect() {
    return sequelizeConn;
  },
  disconnect() {
    return sequelizeConn.close();
  },
};
