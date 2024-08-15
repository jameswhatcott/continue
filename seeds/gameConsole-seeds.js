const { GameConsole } = require('../models');
const gameConsoleData = [
    // GBA Games
    { console_id: 1, game_id: 1, price: 29.99, condition: 'New', stock: 10 }, // GBA Game 1
    { console_id: 1, game_id: 2, price: 19.99, condition: 'Used', stock: 5 },  // GBA Game 2
    { console_id: 1, game_id: 3, price: 24.99, condition: 'New', stock: 8 },   // GBA Game 3
    { console_id: 1, game_id: 4, price: 34.99, condition: 'New', stock: 12 },  // GBA Game 4
    { console_id: 1, game_id: 5, price: 14.99, condition: 'Used', stock: 6 },   // GBA Game 5
    { console_id: 1, game_id: 6, price: 27.99, condition: 'New', stock: 7 },   // GBA Game 6
    { console_id: 1, game_id: 7, price: 22.99, condition: 'New', stock: 11 },  // GBA Game 7
    { console_id: 1, game_id: 8, price: 19.99, condition: 'Used', stock: 4 },   // GBA Game 8
    { console_id: 1, game_id: 9, price: 31.99, condition: 'New', stock: 9 },   // GBA Game 9
    { console_id: 1, game_id: 10, price: 25.99, condition: 'Used', stock: 5 }, // GBA Game 10

    // DS Games
    { console_id: 2, game_id: 11, price: 24.99, condition: 'New', stock: 12 }, // DS Game 1
    { console_id: 2, game_id: 12, price: 34.99, condition: 'Used', stock: 7 },  // DS Game 2
    { console_id: 2, game_id: 13, price: 19.99, condition: 'New', stock: 9 },   // DS Game 3
    { console_id: 2, game_id: 14, price: 29.99, condition: 'New', stock: 11 },  // DS Game 4
    { console_id: 2, game_id: 15, price: 14.99, condition: 'Used', stock: 5 },  // DS Game 5
    { console_id: 2, game_id: 16, price: 21.99, condition: 'New', stock: 10 },  // DS Game 6
    { console_id: 2, game_id: 17, price: 26.99, condition: 'Used', stock: 6 },  // DS Game 7
    { console_id: 2, game_id: 18, price: 28.99, condition: 'New', stock: 8 },   // DS Game 8
    { console_id: 2, game_id: 19, price: 23.99, condition: 'New', stock: 7 },   // DS Game 9
    { console_id: 2, game_id: 20, price: 15.99, condition: 'Used', stock: 4 },  // DS Game 10

    // Wii Games
    { console_id: 3, game_id: 21, price: 49.99, condition: 'New', stock: 15 }, // Wii Game 1
    { console_id: 3, game_id: 22, price: 39.99, condition: 'Used', stock: 10 }, // Wii Game 2
    { console_id: 3, game_id: 23, price: 44.99, condition: 'New', stock: 12 }, // Wii Game 3
    { console_id: 3, game_id: 24, price: 29.99, condition: 'New', stock: 8 },  // Wii Game 4
    { console_id: 3, game_id: 25, price: 34.99, condition: 'Used', stock: 6 }, // Wii Game 5
    { console_id: 3, game_id: 26, price: 55.99, condition: 'New', stock: 9 }, // Wii Game 6
    { console_id: 3, game_id: 27, price: 42.99, condition: 'Used', stock: 7 }, // Wii Game 7
    { console_id: 3, game_id: 28, price: 39.99, condition: 'New', stock: 11 }, // Wii Game 8
    { console_id: 3, game_id: 29, price: 47.99, condition: 'New', stock: 13 }, // Wii Game 9
    { console_id: 3, game_id: 30, price: 36.99, condition: 'Used', stock: 5 }, // Wii Game 10

    // PS4 Games
    { console_id: 4, game_id: 31, price: 59.99, condition: 'New', stock: 20 }, // PS4 Game 1
    { console_id: 4, game_id: 32, price: 49.99, condition: 'Used', stock: 15 }, // PS4 Game 2
    { console_id: 4, game_id: 33, price: 54.99, condition: 'New', stock: 18 }, // PS4 Game 3
    { console_id: 4, game_id: 34, price: 39.99, condition: 'New', stock: 12 }, // PS4 Game 4
    { console_id: 4, game_id: 35, price: 44.99, condition: 'Used', stock: 9 },  // PS4 Game 5
    { console_id: 4, game_id: 36, price: 65.99, condition: 'New', stock: 22 }, // PS4 Game 6
    { console_id: 4, game_id: 37, price: 57.99, condition: 'Used', stock: 14 }, // PS4 Game 7
    { console_id: 4, game_id: 38, price: 62.99, condition: 'New', stock: 17 }, // PS4 Game 8
    { console_id: 4, game_id: 39, price: 51.99, condition: 'New', stock: 20 }, // PS4 Game 9
    { console_id: 4, game_id: 40, price: 45.99, condition: 'Used', stock: 11 }, // PS4 Game 10

    // Xbox Original Games
    { console_id: 5, game_id: 41, price: 39.99, condition: 'New', stock: 15 }, // Xbox Game 1
    { console_id: 5, game_id: 42, price: 29.99, condition: 'Used', stock: 12 }, // Xbox Game 2
    { console_id: 5, game_id: 43, price: 34.99, condition: 'New', stock: 18 }, // Xbox Game 3
    { console_id: 5, game_id: 44, price: 24.99, condition: 'New', stock: 10 }, // Xbox Game 4
    { console_id: 5, game_id: 45, price: 27.99, condition: 'Used', stock: 8 },  // Xbox Game 5
    { console_id: 5, game_id: 46, price: 32.99, condition: 'New', stock: 11 }, // Xbox Game 6
    { console_id: 5, game_id: 47, price: 28.99, condition: 'Used', stock: 7 }, // Xbox Game 7
    { console_id: 5, game_id: 48, price: 25.99, condition: 'New', stock: 9 },  // Xbox Game 8
    { console_id: 5, game_id: 49, price: 30.99, condition: 'New', stock: 12 }, // Xbox Game 9
    { console_id: 5, game_id: 50, price: 21.99, condition: 'Used', stock:10}
]

const seedGameConsoles = async () => {
    try {
        await GameConsole.bulkCreate(gameConsoleData, { returning: true });
        console.log('GameConsole data has been seeded successfully.');
    } catch (err) {
        console.error('Error seeding GameConsole data:', err);
    }
};


seedGameConsoles();