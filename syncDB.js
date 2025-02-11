const sequelize = require('./config/connection');
const { User, Game, Console, gamesConsoles } = require('./models'); // Adjust based on your models

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Drops existing tables and recreates them
    console.log('✅ Database synced successfully.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error syncing database:', error);
    process.exit(1);
  }
};

syncDatabase();
