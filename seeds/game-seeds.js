const { Game } = require('../models'); 

// GBA games
const gbaGameData = [
    { title: 'The Legend of Zelda: The Minish Cap', publisher: 'Nintendo', amount_players: 1, year_created: 2004, genre: 'Action-Adventure' },
    { title: 'Pokémon FireRed', publisher: 'Nintendo', amount_players: 1, year_created: 2004, genre: 'RPG' },
    { title: 'Super Mario Advance 3', publisher: 'Nintendo', amount_players: 1, year_created: 2002, genre: 'Platformer' },
    { title: 'Metroid Fusion', publisher: 'Nintendo', amount_players: 1, year_created: 2002, genre: 'Action' },
    { title: 'Mario Kart: Super Circuit', publisher: 'Nintendo', amount_players: 4, year_created: 2001, genre: 'Racing' },
    { title: 'Advance Wars', publisher: 'Nintendo', amount_players: 2, year_created: 2001, genre: 'Strategy' },
    { title: 'Fire Emblem', publisher: 'Nintendo', amount_players: 1, year_created: 2003, genre: 'Strategy' },
    { title: 'Wario Land 4', publisher: 'Nintendo', amount_players: 1, year_created: 2001, genre: 'Platformer' },
    { title: 'Castlevania: Aria of Sorrow', publisher: 'Konami', amount_players: 1, year_created: 2003, genre: 'Action' },
    { title: 'The Legend of Zelda: Oracle of Seasons', publisher: 'Nintendo', amount_players: 1, year_created: 2001, genre: 'Action-Adventure' }
];

// DS games
const dsGameData = [
    { title: 'New Super Mario Bros.', publisher: 'Nintendo', amount_players: 2, year_created: 2006, genre: 'Platformer' },
    { title: 'Pokémon Diamond', publisher: 'Nintendo', amount_players: 1, year_created: 2006, genre: 'RPG' },
    { title: 'Mario Kart DS', publisher: 'Nintendo', amount_players: 8, year_created: 2005, genre: 'Racing' },
    { title: 'Animal Crossing: Wild World', publisher: 'Nintendo', amount_players: 4, year_created: 2005, genre: 'Simulation' },
    { title: 'The Legend of Zelda: Phantom Hourglass', publisher: 'Nintendo', amount_players: 1, year_created: 2007, genre: 'Action-Adventure' },
    { title: 'Metroid Prime: Hunters', publisher: 'Nintendo', amount_players: 1, year_created: 2006, genre: 'Action' },
    { title: 'Castlevania: Dawn of Sorrow', publisher: 'Konami', amount_players: 1, year_created: 2005, genre: 'Action' },
    { title: 'Pokémon HeartGold', publisher: 'Nintendo', amount_players: 1, year_created: 2009, genre: 'RPG' },
    { title: 'Mario & Luigi: Partners in Time', publisher: 'Nintendo', amount_players: 1, year_created: 2005, genre: 'RPG' },
    { title: 'WarioWare: Touched!', publisher: 'Nintendo', amount_players: 1, year_created: 2004, genre: 'Party' }
];

//  Wii games
const wiiGameData = [
    { title: 'The Legend of Zelda: Twilight Princess', publisher: 'Nintendo', amount_players: 1, year_created: 2006, genre: 'Action-Adventure' },
    { title: 'Super Smash Bros. Brawl', publisher: 'Nintendo', amount_players: 4, year_created: 2008, genre: 'Fighting' },
    { title: 'Mario Kart Wii', publisher: 'Nintendo', amount_players: 4, year_created: 2008, genre: 'Racing' },
    { title: 'Super Mario Galaxy', publisher: 'Nintendo', amount_players: 1, year_created: 2007, genre: 'Platformer' },
    { title: 'Metroid Prime 3: Corruption', publisher: 'Nintendo', amount_players: 1, year_created: 2007, genre: 'Action' },
    { title: 'Donkey Kong Country Returns', publisher: 'Nintendo', amount_players: 2, year_created: 2010, genre: 'Platformer' },
    { title: 'The Legend of Zelda: Skyward Sword', publisher: 'Nintendo', amount_players: 1, year_created: 2011, genre: 'Action-Adventure' },
    { title: 'Wii Sports', publisher: 'Nintendo', amount_players: 4, year_created: 2006, genre: 'Sports' },
    { title: 'New Super Mario Bros. Wii', publisher: 'Nintendo', amount_players: 4, year_created: 2009, genre: 'Platformer' },
    { title: 'Xenoblade Chronicles', publisher: 'Nintendo', amount_players: 1, year_created: 2010, genre: 'RPG' }
];

// PS4 games
const ps4GameData = [
    { title: 'The Last of Us Part II', publisher: 'Sony', amount_players: 1, year_created: 2020, genre: 'Action-Adventure' },
    { title: 'God of War', publisher: 'Sony', amount_players: 1, year_created: 2018, genre: 'Action-Adventure' },
    { title: 'Spider-Man', publisher: 'Sony', amount_players: 1, year_created: 2018, genre: 'Action' },
    { title: 'Bloodborne', publisher: 'Sony', amount_players: 1, year_created: 2015, genre: 'Action RPG' },
    { title: 'Uncharted 4: A Thief’s End', publisher: 'Sony', amount_players: 1, year_created: 2016, genre: 'Action-Adventure' },
    { title: 'Horizon Zero Dawn', publisher: 'Sony', amount_players: 1, year_created: 2017, genre: 'Action RPG' },
    { title: 'Red Dead Redemption II', publisher: 'Rockstar Games', amount_players: 1, year_created: 2018, genre: 'Action-Adventure' },
    { title: 'Persona 5', publisher: 'Atlus', amount_players: 1, year_created: 2017, genre: 'RPG' },
    { title: 'Gran Turismo Sport', publisher: 'Sony', amount_players: 2, year_created: 2017, genre: 'Racing' },
    { title: 'Ghost of Tsushima', publisher: 'Sony', amount_players: 1, year_created: 2020, genre: 'Action-Adventure' }
];

// Xbox games
const xboxGameData = [
    { title: 'Halo: Combat Evolved', publisher: 'Microsoft', amount_players: 1, year_created: 2001, genre: 'First-Person Shooter' },
    { title: 'Fable', publisher: 'Microsoft', amount_players: 1, year_created: 2004, genre: 'RPG' },
    { title: 'Ninja Gaiden', publisher: 'Tecmo', amount_players: 1, year_created: 2004, genre: 'Action' },
    { title: 'Star Wars: Knights of the Old Republic', publisher: 'LucasArts', amount_players: 1, year_created: 2003, genre: 'RPG' },
    { title: 'Forza Motorsport', publisher: 'Microsoft', amount_players: 2, year_created: 2005, genre: 'Racing' },
    { title: 'The Elder Scrolls III: Morrowind', publisher: 'Bethesda', amount_players: 1, year_created: 2002, genre: 'RPG' },
    { title: 'Conker: Live & Reloaded', publisher: 'Microsoft', amount_players: 2, year_created: 2005, genre: 'Platformer' },
    { title: 'Jade Empire', publisher: 'Microsoft', amount_players: 1, year_created: 2005, genre: 'RPG' },
    { title: 'Tom Clancy’s Splinter Cell', publisher: 'Ubisoft', amount_players: 1, year_created: 2002, genre: 'Action' },
    { title: 'Panzer Dragoon Orta', publisher: 'Sega', amount_players: 1, year_created: 2003, genre: 'Rail Shooter' }
];

const seedGbaGames = async () => {
    try {
        await Game.bulkCreate(gbaGameData);
        console.log('GBA games have been seeded successfully.');
    } catch (err) {
        console.error('Error seeding GBA games:', err);
    }
};

const seedDsGames = async () => {
    try {
        await Game.bulkCreate(dsGameData);
        console.log('DS games have been seeded successfully.');
    } catch (err) {
        console.error('Error seeding DS games:', err);
    }
};

const seedWiiGames = async () => {
    try {
        await Game.bulkCreate(wiiGameData);
        console.log('Wii games have been seeded successfully.');
    } catch (err) {
        console.error('Error seeding Wii games:', err);
    }
};

const seedPs4Games = async () => {
    try {
        await Game.bulkCreate(ps4GameData);
        console.log('PS4 games have been seeded successfully.');
    } catch (err) {
        console.error('Error seeding PS4 games:', err);
    }
};

const seedXboxGames = async () => {
    try {
        await Game.bulkCreate(xboxGameData);
        console.log('Xbox Original games have been seeded successfully.');
    } catch (err) {
        console.error('Error seeding Xbox games:', err);
    }
};

// Function to seed all games
const seedAllGames = async () => {
    await seedGbaGames();
    await seedDsGames();
    await seedWiiGames();
    await seedPs4Games();
    await seedXboxGames();
};


module.exports = seedAllGames;



// Execute the seeding
// seedAllGames();