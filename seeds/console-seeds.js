const { Console } = require('../models'); // Adjust the path according to your project structure

// Data for consoles
const consoleData = [
    { console: 'GBA', developer: 'Nintendo' },
    { console: 'DS', developer: 'Nintendo' },
    { console: 'Wii', developer: 'Nintendo' },
    { console: 'PS4', developer: 'Sony' },
    { console: 'Xbox Original', developer: 'Microsoft' }
];

// Seeder function
// const seedConsoles = async () => {
//     try {
//         await Console.bulkCreate(consoleData);
//         console.log('Consoles have been seeded successfully.');
//     } catch (err) {
//         console.error('Error seeding consoles:', err);
//     }
// };

const seedConsoles = () => Console.bulkCreate(consoleData);


module.exports = seedConsoles;