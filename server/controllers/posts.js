const jwt = require('jsonwebtoken');

const getPosts = require('../Database/query/getPosts');


const posts = (req, res, next) => {
  jwt.verify(req.cookies.name, process.env.secretkey, (err, decoded) => {
    if (err) {
      console.log(err);
      res.json('Login to see posts');
    } else {
      getPosts()
        .then((result) => res.json(result.rows))
        .catch((err) => {
          next(err);
        });
    }
  });
};

module.exports = posts;
