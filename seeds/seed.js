// const sequelize = require('./config/connection');
// const { Game } = require('./models'); 
// const { User } = require('./models');

// const seedGames = async () => {
//     try {
//         await Game.bulkCreate(gbaGameData);
//         console.log('Games have been seeded successfully.');
//     } catch (err) {
//         console.error('Error seeding games:', err);
//     }
// };

// const seedUsers = async () => {
//     try {
//         await User.bulkCreate(userData);
//         console.log('Users have been seeded successfully.');
//     } catch (err) {
//         console.error('Error seeding users:', err);
//     }
// };

// const seedAll = async () => {
//     await sequelize.sync({ force: true });
//     await seedGames();
//     await seedUsers();
//     process.exit(0);
// };

// seedAll();