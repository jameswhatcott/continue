const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { timeStamp } = require('console');

class Game extends Model {}


Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publisher:{
            type: DataTypes.STRING,
            allowNull: false
        },
        player_perspective:{
            type: DataTypes.STRING,
            allowNull: false
        },
        year_created:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        genre:{
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }  
)


module.exports = Game;