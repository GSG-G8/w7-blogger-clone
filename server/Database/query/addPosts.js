const connection = require('../config/connection');

const addPosts = (postData) => {
  const { name, image, description } = postData;
  const sql = {
    text: 'INSERT INTO post (name, image, description) VALUES ($1, $2, $3) RETURNING *',
    values: [name, image, description],
  };
  return connection.query(sql);
};

module.exports = addPosts;
