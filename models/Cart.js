const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model{}

Cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        gameConsole_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
       user_id:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
       quantity:{
            type: DataTypes.INTEGER,
            allowNull: true
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