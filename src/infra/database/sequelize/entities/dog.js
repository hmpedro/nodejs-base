const Sequelize = require('sequelize');

class Dog extends Sequelize.Model {}
Dog.init(
  {
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
  },
  {
    sequelize,
    modelName: 'Dog',
  },
);

module.exports = Profile;