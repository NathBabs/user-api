const sleep = require('sleep');
const Sequelize = require('sequelize');
const db = require('../config/db');
const conn = db();

// to allow db to be created in docker
sleep.sleep(15);

const User = conn.define('user', {
    fname: {
        type: Sequelize.STRING
    },
    lname: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

User.sync().then(() => {
    console.log('Table Created');
});

module.exports = User;