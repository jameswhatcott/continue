const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class gamesConsoles extends Model{}

gamesConsoles.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        console_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        condition:{
            type: DataTypes.STRING,
            allowNull: false
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: true
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'gamesConsoles',
    }  
)

module.exports = gamesConsoles