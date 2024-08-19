// models/index.js
const Cart = require('./Cart');
const Game = require('./Game');
const Console = require('./Console');
const gamesConsoles = require('./gamesConsole'); // Assuming this is your join table model


Console.belongsToMany(Game, {
  through: gamesConsoles,
  foreignKey: 'console_id',
});

Game.belongsToMany(Console, {
  through: gamesConsoles,
  foreignKey: 'game_id',
});




// Game to gamesConsoles
Game.hasMany(gamesConsoles, {
  foreignKey: 'game_id',
});

gamesConsoles.belongsTo(Game, {
  foreignKey: 'game_id',
});

// Console to gamesConsoles
Console.hasMany(gamesConsoles, {
  foreignKey: 'console_id',
});

gamesConsoles.belongsTo(Console, {
  foreignKey: 'console_id',
});

// Cart to gamesConsoles
Cart.belongsTo(gamesConsoles, {
  foreignKey: 'gameConsole_id',
});

gamesConsoles.hasMany(Cart, {
  foreignKey: 'gameConsole_id',
});

// Optionally, you may have a User model to link carts to users
const User = require('./User');
User.hasMany(Cart, {
  foreignKey: 'user_id',
});
Cart.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {
  Cart,
  Game,
  Console,
  gamesConsoles,
  User, // If you have a User model
};
