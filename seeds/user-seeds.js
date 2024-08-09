const { User } = require('../models');

const userData = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123' // Plaintext password, will be hashed
    },
    {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'securepass' 
    },
    {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'mypassword'
    },
    {
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        password: 'password1' 
    },
    {
        name: 'Charlie Davis',
        email: 'charlie.davis@example.com',
        password: 'password2024' 
    }
];

const seedUsers = async () => {
    try {
        await User.bulkCreate(userData);
        console.log('Users have been seeded successfully.');
    } catch (err) {
        console.error('Error seeding users:', err);
    }
};

seedUsers();