const connection = require('../config/connection');

const getPosts = () => connection.query('SELECT * FROM post');

module.exports = getPosts;
