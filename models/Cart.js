const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model{}

Cart.init(
            primaryKey: {true
        },
       user_id:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
       quantity:{
=======
            references: {
              model: 'user',
              key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          },
          game_id: 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cart',
    }  
)



module.exports = Cart