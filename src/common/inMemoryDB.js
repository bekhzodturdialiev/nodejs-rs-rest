const User = require('../resources/users/user.model');

const DB = [];

DB.push(new User({ name: 'Bekhzod' }), new User(), new User());

module.exports = DB;
