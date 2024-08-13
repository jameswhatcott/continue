//      CREATE TABLE game_info (
//        game_id INTEGER PRIMARY KEY  
//       developer VARCHAR(30) NOT NULL,
//       engine VARCHAR(30) NOT NULL
//        amount_players INTEGER NOT NULL,
//      );

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Console extends Model{}

Console.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        console:{
            type: DataTypes.STRING,
            allowNull: false
        },
        developer:{
            type: DataTypes.STRING,
            allowNull: false
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Console',
    }  
)

module.exports = Console