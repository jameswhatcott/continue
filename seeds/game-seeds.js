const { Game } = require('../models'); 

// GBA games
const gbaGameData = [
    { title: 'The Legend of Zelda: The Minish Cap', publisher: 'Nintendo', amount_players: 1, year_created: 2004, genre: 'Action-Adventure', image_path: '/images/gameCovers/gba/zelda-minish-cap.jpeg' },
    { title: 'Pokémon FireRed', publisher: 'Nintendo', amount_players: 1, year_created: 2004, genre: 'RPG', image_path: '/images/gameCovers/gba/pokemon-firered.jpeg' },
    { title: 'Super Mario Advance 3', publisher: 'Nintendo', amount_players: 1, year_created: 2002, genre: 'Platformer', image_path: '/images/gameCovers/gba/super-mario-advance-3.jpeg' },
    { title: 'Metroid Fusion', publisher: 'Nintendo', amount_players: 1, year_created: 2002, genre: 'Action', image_path: '/images/gameCovers/gba/metroid-fusion.jpeg' },
    { title: 'Mario Kart: Super Circuit', publisher: 'Nintendo', amount_players: 4, year_created: 2001, genre: 'Racing', image_path: '/images/gameCovers/gba/mario-kart-super-circuit.jpeg' },
    { title: 'Advance Wars', publisher: 'Nintendo', amount_players: 2, year_created: 2001, genre: 'Strategy', image_path: '/images/gameCovers/gba/advance-wars.jpeg' },
    { title: 'Fire Emblem', publisher: 'Nintendo', amount_players: 1, year_created: 2003, genre: 'Strategy', image_path: '/images/gameCovers/gba/fire-emblem.jpeg' },
    { title: 'Wario Land 4', publisher: 'Nintendo', amount_players: 1, year_created: 2001, genre: 'Platformer', image_path: '/images/gameCovers/gba/wario-land-4.jpeg' },
    { title: 'Castlevania: Aria of Sorrow', publisher: 'Konami', amount_players: 1, year_created: 2003, genre: 'Action', image_path: '/images/gameCovers/gba/castlevania-aria-of-sorrow.jpeg' },
    { title: 'The Legend of Zelda: Oracle of Seasons', publisher: 'Nintendo', amount_players: 1, year_created: 2001, genre: 'Action-Adventure', image_path: '/images/gameCovers/gba/zelda-oracle-of-seasons.jpeg' }
];

// DS games
const dsGameData = [
    { title: 'New Super Mario Bros.', publisher: 'Nintendo', amount_players: 2, year_created: 2006, genre: 'Platformer', image_path: '/images/gameCovers/ds/new-super-mario-bros.jpeg' },
    { title: 'Pokémon Diamond', publisher: 'Nintendo', amount_players: 1, year_created: 2006, genre: 'RPG', image_path: '/images/gameCovers/ds/pokemon-diamond.jpeg' },
    { title: 'Mario Kart DS', publisher: 'Nintendo', amount_players: 8, year_created: 2005, genre: 'Racing', image_path: '/images/gameCovers/ds/mario-kart-ds.jpeg' },
    { title: 'Animal Crossing: Wild World', publisher: 'Nintendo', amount_players: 4, year_created: 2005, genre: 'Simulation', image_path: '/images/gameCovers/ds/animal-crossing-wild-world.jpeg' },
    { title: 'The Legend of Zelda: Phantom Hourglass', publisher: 'Nintendo', amount_players: 1, year_created: 2007, genre: 'Action-Adventure', image_path: '/images/gameCovers/ds/zelda-phantom-hourglass.jpeg' },
    { title: 'Metroid Prime: Hunters', publisher: 'Nintendo', amount_players: 1, year_created: 2006, genre: 'Action', image_path: '/images/gameCovers/ds/metroid-prime-hunters.jpeg' },
    { title: 'Castlevania: Dawn of Sorrow', publisher: 'Konami', amount_players: 1, year_created: 2005, genre: 'Action', image_path: '/images/gameCovers/ds/castlevania-dawn-of-sorrow.jpeg' },
    { title: 'Pokémon HeartGold', publisher: 'Nintendo', amount_players: 1, year_created: 2009, genre: 'RPG', image_path: '/images/gameCovers/ds/pokemon-heartgold.jpeg' },
    { title: 'Mario & Luigi: Partners in Time', publisher: 'Nintendo', amount_players: 1, year_created: 2005, genre: 'RPG', image_path: '/images/gameCovers/ds/mario-luigi-partners-in-time.jpeg' },
    { title: 'WarioWare: Touched!', publisher: 'Nintendo', amount_players: 1, year_created: 2004, genre: 'Party', image_path: '/images/gameCovers/ds/warioware-touched.jpeg' }
];

//  Wii games
const wiiGameData = [
    { title: 'The Legend of Zelda: Twilight Princess', publisher: 'Nintendo', amount_players: 1, year_created: 2006, genre: 'Action-Adventure', image_path: '/images/gameCovers/wii/zelda-twilight-princess.jpeg' },
    { title: 'Super Smash Bros. Brawl', publisher: 'Nintendo', amount_players: 4, year_created: 2008, genre: 'Fighting', image_path: '/images/gameCovers/wii/super-smash-bros-brawl.jpeg' },
    { title: 'Mario Kart Wii', publisher: 'Nintendo', amount_players: 4, year_created: 2008, genre: 'Racing', image_path: '/images/gameCovers/wii/mario-kart-wii.jpeg' },
    { title: 'Super Mario Galaxy', publisher: 'Nintendo', amount_players: 1, year_created: 2007, genre: 'Platformer', image_path: '/images/gameCovers/wii/super-mario-galaxy.jpeg' },
    { title: 'Metroid Prime 3: Corruption', publisher: 'Nintendo', amount_players: 1, year_created: 2007, genre: 'Action', image_path: '/images/gameCovers/wii/metroid-prime-3-corruption.jpeg' },
    { title: 'Donkey Kong Country Returns', publisher: 'Nintendo', amount_players: 2, year_created: 2010, genre: 'Platformer', image_path: '/images/gameCovers/wii/donkey-kong-country-returns.jpeg' },
    { title: 'The Legend of Zelda: Skyward Sword', publisher: 'Nintendo', amount_players: 1, year_created: 2011, genre: 'Action-Adventure', image_path: '/images/gameCovers/wii/zelda-skyward-sword.jpeg' },
    { title: 'Wii Sports', publisher: 'Nintendo', amount_players: 4, year_created: 2006, genre: 'Sports', image_path: '/images/gameCovers/wii/wii-sports.jpeg' },
    { title: 'New Super Mario Bros. Wii', publisher: 'Nintendo', amount_players: 4, year_created: 2009, genre: 'Platformer', image_path: '/images/gameCovers/wii/new-super-mario-bros-wii.jpeg' },
    { title: 'Xenoblade Chronicles', publisher: 'Nintendo', amount_players: 1, year_created: 2010, genre: 'RPG', image_path: '/images/gameCovers/wii/xenoblade-chronicles.jpeg' }
];

// PS4 games
const ps4GameData = [
    { title: 'The Last of Us Part II', publisher: 'Sony', amount_players: 1, year_created: 2020, genre: 'Action-Adventure', image_path: '/images/gameCovers/ps4/the-last-of-us-part-ii.jpeg' },
    { title: 'God of War', publisher: 'Sony', amount_players: 1, year_created: 2018, genre: 'Action-Adventure', image_path: '/images/gameCovers/ps4/god-of-war.jpeg' },
    { title: 'Spider-Man', publisher: 'Sony', amount_players: 1, year_created: 2018, genre: 'Action', image_path: '/images/gameCovers/ps4/spiderman.jpeg'},
    { title: 'Bloodborne', publisher: 'Sony', amount_players: 1, year_created: 2015, genre: 'Action RPG', image_path: '/images/gameCovers/ps4/bloodborne.jpeg' },
    { title: 'Uncharted 4: A Thief’s End', publisher: 'Sony', amount_players: 1, year_created: 2016, genre: 'Action-Adventure', image_path: '/images/gameCovers/ps4/uncharted-4.jpeg' },
    { title: 'Horizon Zero Dawn', publisher: 'Sony', amount_players: 1, year_created: 2017, genre: 'Action RPG', image_path: '/images/gameCovers/ps4/horizon-zero-dawn.jpeg' },
    { title: 'Red Dead Redemption II', publisher: 'Rockstar Games', amount_players: 1, year_created: 2018, genre: 'Action-Adventure', image_path: '/images/gameCovers/ps4/red-dead-redemption-ii.jpeg' },
    { title: 'Persona 5', publisher: 'Atlus', amount_players: 1, year_created: 2017, genre: 'RPG', image_path: '/images/gameCovers/ps4/persona-5.jpeg' },
    { title: 'Gran Turismo Sport', publisher: 'Sony', amount_players: 2, year_created: 2017, genre: 'Racing', image_path: '/images/gameCovers/ps4/gran-turismo-sport.jpeg' },
    { title: 'Ghost of Tsushima', publisher: 'Sony', amount_players: 1, year_created: 2020, genre: 'Action-Adventure', image_path: '/images/gameCovers/ps4/ghost-of-tsushima.jpeg' }
];

// Xbox games
const xboxGameData = [
    { title: 'Halo: Combat Evolved', publisher: 'Microsoft', amount_players: 1, year_created: 2001, genre: 'First-Person Shooter', image_path: '/images/gameCovers/xbox/halo-combat-evolved.jpeg' },
    { title: 'Fable', publisher: 'Microsoft', amount_players: 1, year_created: 2004, genre: 'RPG', image_path: '/images/gameCovers/xbox/fable.jpeg' },
    { title: 'Ninja Gaiden', publisher: 'Tecmo', amount_players: 1, year_created: 2004, genre: 'Action', image_path: '/images/gameCovers/xbox/ninja-gaiden.jpeg' },
    { title: 'Star Wars: Knights of the Old Republic', publisher: 'LucasArts', amount_players: 1, year_created: 2003, genre: 'RPG', image_path: '/images/gameCovers/xbox/star-wars-kotor.jpeg' },
    { title: 'Forza Motorsport', publisher: 'Microsoft', amount_players: 2, year_created: 2005, genre: 'Racing', image_path: '/images/gameCovers/xbox/forza-motorsport.jpeg' },
    { title: 'The Elder Scrolls III: Morrowind', publisher: 'Bethesda', amount_players: 1, year_created: 2002, genre: 'RPG', image_path: '/images/gameCovers/xbox/elder-scrolls-morrowind.jpeg' },
    { title: 'Conker: Live & Reloaded', publisher: 'Microsoft', amount_players: 2, year_created: 2005, genre: 'Platformer', image_path: '/images/gameCovers/xbox/conker-live-reloaded.jpeg' },
    { title: 'Jade Empire', publisher: 'Microsoft', amount_players: 1, year_created: 2005, genre: 'RPG', image_path: '/images/gameCovers/xbox/jade-empire.jpeg' },
    { title: 'Tom Clancy’s Splinter Cell', publisher: 'Ubisoft', amount_players: 1, year_created: 2002, genre: 'Action', image_path: '/images/gameCovers/xbox/splinter-cell.jpeg' },
    { title: 'Panzer Dragoon Orta', publisher: 'Sega', amount_players: 1, year_created: 2003, genre: 'Rail Shooter', image_path: '/images/gameCovers/xbox/panzer-dragoon-orta.jpeg' }
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