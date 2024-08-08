//      CREATE TABLE game_info (
//        game_id INTEGER PRIMARY KEY  
//       developer VARCHAR(30) NOT NULL,
//       engine VARCHAR(30) NOT NULL
//        amount_players INTEGER NOT NULL,
//      );

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GameInfo extends Model{}

GameInfo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        developer:{
            type: DataTypes.STRING,
            allowNull: false
        },
        engine:{
            type: DataTypes.STRING,
            allowNull: true
        },
        amount_players:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        game_id:{
            type: DataTypes.INTEGER,
            allowNull: true,
            references:{
                model: 'game', 
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'gameinfo',
    }  
)

module.exports = GameInfo