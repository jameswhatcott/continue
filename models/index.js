const User = require('./User')
const Game = require('./Game')
const Console = require('./Console')
const Cart = require('./Cart')



Console.belongsToMany(Game, {
    through: 'gamesConsoles',
})

Game.belongsToMany(Console,{
    through: 'gamesConsoles'
})

User.hasMany(Game, {
    foreignKey: 'user_id'
})

User.hasMany(Cart, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
  Cart.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  Game.hasMany(Cart, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
  });
  
  Cart.belongsTo(Game, {
    foreignKey: 'game_id',
  });



module.exports = {User, Game, Console, Cart}









// CREATE TABLE game (
//       game_id INTEGER NOT NULL,
//    title VARCHAR(30) NOT NULL
//      publisher TEXT NOT NULL,
//       player_perspective VARCHAR(20) NOT NULL,
//       year_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
//        genre VARCHAR(30)
//      );
    
//      CREATE TABLE game_info (
//        game_id INTEGER PRIMARY KEY  
//       developer VARCHAR(30) NOT NULL,
//       engine VARCHAR(30) NOT NULL
//        amount_players INTEGER NOT NULL,
//      );
    
//      CREATE TABLE product (
//          productID INTEGER PRIMARY KEY 
//          condition VARCHAR(30) NOT NULL,
//         price DECIMAL(10, 2) NOT NULL,
//          Stock INT DEFAULT 10,
//          currency 
//      )