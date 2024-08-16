const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model{}

Cart.init(
  {

      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
       user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
       quantity:{
        type: DataTypes.INTEGER,
        allowNull: true    
          },
          game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
      }, 
      {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'cart',
      }
  )




module.exports = Cart