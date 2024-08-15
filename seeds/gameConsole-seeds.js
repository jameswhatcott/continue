const { Game, Console, gamesConsoles } = require('../models');
const gameConsoleData = [
    // GBA Games
    { console_id: 1, game_id: 1, price: 29.99, condition: 'New', stock: 10 }, 
    { console_id: 1, game_id: 2, price: 19.99, condition: 'Used', stock: 5 }, 
    { console_id: 1, game_id: 3, price: 24.99, condition: 'New', stock: 8 },  
    { console_id: 1, game_id: 4, price: 34.99, condition: 'New', stock: 12 }, 
    { console_id: 1, game_id: 5, price: 14.99, condition: 'Used', stock: 6 }, 
    { console_id: 1, game_id: 6, price: 27.99, condition: 'New', stock: 7 },   
    { console_id: 1, game_id: 7, price: 22.99, condition: 'New', stock: 11 }, 
    { console_id: 1, game_id: 8, price: 19.99, condition: 'Used', stock: 4 },   
    { console_id: 1, game_id: 9, price: 31.99, condition: 'New', stock: 9 },   
    { console_id: 1, game_id: 10, price: 25.99, condition: 'Used', stock: 5 }, 

    // DS Games
    { console_id: 2, game_id: 11, price: 24.99, condition: 'New', stock: 12 },
    { console_id: 2, game_id: 12, price: 34.99, condition: 'Used', stock: 7 }, 
    { console_id: 2, game_id: 13, price: 19.99, condition: 'New', stock: 9 },   
    { console_id: 2, game_id: 14, price: 29.99, condition: 'New', stock: 11 },  
    { console_id: 2, game_id: 15, price: 14.99, condition: 'Used', stock: 5 }, 
    { console_id: 2, game_id: 16, price: 21.99, condition: 'New', stock: 10 },
    { console_id: 2, game_id: 17, price: 26.99, condition: 'Used', stock: 6 },
    { console_id: 2, game_id: 18, price: 28.99, condition: 'New', stock: 8 }, 
    { console_id: 2, game_id: 19, price: 23.99, condition: 'New', stock: 7 },  
    { console_id: 2, game_id: 20, price: 15.99, condition: 'Used', stock: 4 }, 

    // Wii Games
    { console_id: 3, game_id: 21, price: 49.99, condition: 'New', stock: 15 }, 
    { console_id: 3, game_id: 22, price: 39.99, condition: 'Used', stock: 10 }, 
    { console_id: 3, game_id: 23, price: 44.99, condition: 'New', stock: 12 },
    { console_id: 3, game_id: 24, price: 29.99, condition: 'New', stock: 8 }, 
    { console_id: 3, game_id: 25, price: 34.99, condition: 'Used', stock: 6 }, 
    { console_id: 3, game_id: 26, price: 55.99, condition: 'New', stock: 9 }, 
    { console_id: 3, game_id: 27, price: 42.99, condition: 'Used', stock: 7 },
    { console_id: 3, game_id: 28, price: 39.99, condition: 'New', stock: 11 },
    { console_id: 3, game_id: 29, price: 47.99, condition: 'New', stock: 13 }, 
    { console_id: 3, game_id: 30, price: 36.99, condition: 'Used', stock: 5 },

    // PS4 Games
    { console_id: 4, game_id: 31, price: 59.99, condition: 'New', stock: 20 },
    { console_id: 4, game_id: 32, price: 49.99, condition: 'Used', stock: 15 },
    { console_id: 4, game_id: 33, price: 54.99, condition: 'New', stock: 18 }, 
    { console_id: 4, game_id: 34, price: 39.99, condition: 'New', stock: 12 },
    { console_id: 4, game_id: 35, price: 44.99, condition: 'Used', stock: 9 }, 
    { console_id: 4, game_id: 36, price: 65.99, condition: 'New', stock: 22 }, 
    { console_id: 4, game_id: 37, price: 57.99, condition: 'Used', stock: 14 },
    { console_id: 4, game_id: 38, price: 62.99, condition: 'New', stock: 17 },
    { console_id: 4, game_id: 39, price: 51.99, condition: 'New', stock: 20 },
    { console_id: 4, game_id: 40, price: 45.99, condition: 'Used', stock: 11 }, 

    // Xbox Original Games
    { console_id: 5, game_id: 41, price: 39.99, condition: 'New', stock: 15 }, 
    { console_id: 5, game_id: 42, price: 29.99, condition: 'Used', stock: 12 }, 
    { console_id: 5, game_id: 43, price: 34.99, condition: 'New', stock: 18 }, 
    { console_id: 5, game_id: 44, price: 24.99, condition: 'New', stock: 10 }, 
    { console_id: 5, game_id: 45, price: 27.99, condition: 'Used', stock: 8 },  
    { console_id: 5, game_id: 46, price: 32.99, condition: 'New', stock: 11 }, 
    { console_id: 5, game_id: 47, price: 28.99, condition: 'Used', stock: 7 }, 
    { console_id: 5, game_id: 49, price: 30.99, condition: 'New', stock: 12 }, 
    { console_id: 5, game_id: 50, price: 21.99, condition: 'Used', stock:10}
]

const seedGameConsoles = async () => {
    try {
        await gamesConsoles.bulkCreate(gameConsoleData, { returning: true });
        console.log('GameConsole data has been seeded successfully.');
    } catch (err) {
        console.error('Error seeding GameConsole data:', err);
    }
};


seedGameConsoles();