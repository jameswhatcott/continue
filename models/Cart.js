const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user', // Make sure 'user' is the name of your User model
        key: 'id',
      },
    },
    gameConsole_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gamesConsoles', // Make sure 'gamesConsoles' is the name of your gamesConsoles model
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Set a default value of 1 for quantity
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart',
  }
);

module.exports = Cart;
