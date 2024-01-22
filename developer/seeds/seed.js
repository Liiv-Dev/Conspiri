const sequilize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => { // async function to seed the database
    await sequilize.sync({ force: true}); // sync the database and drop any existing tables

    await User.bulkCreate(userData, { // bulk create the user data from the json file
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
}

seedDatabase();