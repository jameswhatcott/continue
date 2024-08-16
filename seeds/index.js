const sequelize = require('../config/connection');
const seedConsoles = require('./console-seeds');
const seedAllGames = require('./game-seeds');
const seedGameConsoles = require('./gameConsole-seeds');
const seedUsers = require('./user-seeds');



const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedConsoles();

  await seedAllGames();

  await seedGameConsoles();

  process.exit(0);
};

seedAll();