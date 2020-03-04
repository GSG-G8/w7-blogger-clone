const connection = require('../config/connection');

const addUser = (data, hasedPassword) => connection.query('INSERT INTO users (username, password, email) Values($1, $2, $3) returning *', [data.username, hasedPassword, data.email]);

module.exports = addUser;
