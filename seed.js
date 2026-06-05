require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    // Clear existing users
    await User.deleteMany({});
    
    // Passwords will be hashed automatically by the pre-save hook in User model
    const users = [
      {
        email: 'admin@test.com',
        password: 'password123',
        role: 'Admin'
      },
      {
        email: 'premium@test.com',
        password: 'password123',
        role: 'Premium_User'
      },
      {
        email: 'free@test.com',
        password: 'password123',
        role: 'Free_User'
      }
    ];

    // Create users individually to trigger the 'save' hook for password hashing
    for (const userData of users) {
      const user = new User(userData);
      await user.save();
    }
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedUsers();
