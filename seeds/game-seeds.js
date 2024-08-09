const { Game } = require('../models'); 

const gbaGameData = [
    {
        title: 'The Legend of Zelda: The Minish Cap',
        publisher: 'Nintendo',
        amount_players: 1,
        year_created: 2004,
        genre: 'Action-adventure',
        price: 40,
        condition: 'Excellent',
        stock: 20 // Adjust as needed
    },
    {
        title: 'Pokémon FireRed',
        publisher: 'Nintendo',
        amount_players: 1,
        year_created: 2004,
        genre: 'Role-Playing',
        price: 35,
        condition: 'Very Good',
        stock: 20
    },
    {
        title: 'Pokémon Emerald',
        publisher: 'Nintendo',
        amount_players: 1,
        year_created: 2004,
        genre: 'Role-Playing',
        price: 35,
        condition: 'Very Good',
        stock: 20
    },
    {
        title: 'Advance Wars',
        publisher: 'Nintendo',
        amount_players: 1,
        year_created: 2001,
        genre: 'Turn-Based Strategy',
        price: 30,
        condition: 'Good',
        stock: 20
    },
    {
        title: 'Castlevania: Aria of Sorrow',
        publisher: 'Konami',
        amount_players: 1,
        year_created: 2003,
        genre: 'Action-adventure',
        price: 40,
        condition: 'Excellent',
        stock: 20
    },
    {
        title: 'Mario Kart: Super Circuit',
        publisher: 'Nintendo',
        amount_players: 1,
        year_created: 2001,
        genre: 'Racing',
        price: 30,
        condition: 'Good',
        stock: 20
    },
    {
        title: 'Fire Emblem',
        publisher: 'Nintendo',
        amount_players: 1,
        year_created: 2003,
        genre: 'Tactical Role-Playing',
        price: 45,
        condition: 'Very Good',
        stock: 20 
    },
    {
        title: 'WarioWare, Inc.: Mega Microgames!',
        publisher: 'Nintendo',
        amount_players: 1,
        year_created: 2003,
        genre: 'Party',
        price: 25,
        condition: 'Good',
        stock: 20 
    },
    {
        title: 'The Legend of Zelda: Link\'s Awakening DX',
        publisher: 'Nintendo',
        amount_players: 1,
        year_created: 2000,
        genre: 'Action-adventure',
        price: 40,
        condition: 'Excellent',
        stock: 20 
    },
    {
        title: 'Golden Sun',
        publisher: 'Nintendo',
        amount_players: 1,
        year_created: 2001,
        genre: 'Role-Playing',
        price: 40,
        condition: 'Very Good',
        stock: 20 
    }
];

const seedGbaGames = async () => {
    try {
        await Game.bulkCreate(gbaGameData);
        console.log('GBA games have been seeded successfully.');
    } catch (err) {
        console.error('Error seeding GBA games:', err);
    }
};

seedGbaGames();