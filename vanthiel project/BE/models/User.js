const db = require('../utils/db')
const Sequelize = require('sequelize');

const User = db.define('users', {
    fullname : Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
},
{ timestamps: true })

module.exports = User;