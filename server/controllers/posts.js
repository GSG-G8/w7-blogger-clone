const getPosts = require('../Database/query/getPosts');


const posts = (req, res) => {
  getPosts()
    .then((result) => res.json(result.rows))
    .catch(console.error());
};

module.exports = posts;
