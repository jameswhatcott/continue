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
          user_id: {
            type: DataTypes.INTEGER, // Change this to INTEGER
            allowNull: false,
            references: {
              model: 'user',
              key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          },
          game_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'game',
              key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          },
        },

          // other fields...
        
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cart',
    }  
)



module.exports = Cart