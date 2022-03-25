const dogEntity = require('./dog.entity');

module.exports.init = (sequelize) => {
  dogEntity.init(sequelize);
};
