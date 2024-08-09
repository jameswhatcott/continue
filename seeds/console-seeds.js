const { GameInfo } = require('../models'); // Adjust the path as needed

const gameInfoData = [
    {
        console: 'Game Boy Advance',
        developer: 'Nintendo',
        game_id: 1 // Adjust to match your actual game_id
    },
    {
        console: 'Game Boy Advance',
        developer: 'Capcom',
        game_id: 2 // Adjust to match your actual game_id
    },
    {
        console: 'Game Boy Advance',
        developer: 'Konami',
        game_id: 3 // Adjust to match your actual game_id
    },
    {
        console: 'Game Boy Advance',
        developer: 'Square Enix',
        game_id: 4 // Adjust to match your actual game_id
    },
    {
        console: 'Game Boy Advance',
        developer: 'Namco',
        game_id: 5 // Adjust to match your actual game_id
    }
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('gameinfo', gameInfoData, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('gameinfo', null, {});
    }
};