const { Model, DataTypes, condition } = require('sequelize');
const sequelize = require('../config/connection');
const { timestamps } = require('console');

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
        amount_players:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        year_created:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        genre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
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
        modelName: 'game',
    }  
)


module.exports = Game;