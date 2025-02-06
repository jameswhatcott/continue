const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost', // Default to 'localhost' if not specified
      dialect: process.env.DB_DIALECT || 'postgres', // Default to 'postgres' if not specified
    }
  );
}

module.exports = sequelize;
