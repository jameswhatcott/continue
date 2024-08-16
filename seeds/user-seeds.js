const { User } = require('../models');

const userData = [
    {
      "username": "john_doe",
      "email": "john@example.com",
      "password": "password123"
    },
    {
      "username": "jane_doe",
      "email": "jane@example.com",
      "password": "password456"
    }
  ]

const seedUsers = async () => {
    try {
        await User.bulkCreate(userData);
        console.log('Users have been seeded successfully.');
    } catch (err) {
        console.error('Error seeding users:', err);
    }
};

seedUsers();