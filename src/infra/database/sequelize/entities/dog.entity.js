const Sequelize = require('sequelize');

module.exports.init = (sequelize) => {
  sequelize.define('Dog', {
    // Model attributes are defined here
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    colors: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    breed: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    // Other model options go here
  });
};
