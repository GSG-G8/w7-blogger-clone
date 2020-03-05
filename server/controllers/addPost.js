require('dotenv').config();
const jwt = require('jsonwebtoken');
const addPosts = require('../Database/query/addPosts');

const addPost = (req, res, next) => {
  console.log(req.cookies);
  jwt.verify(req.cookies.name, process.env.secretkey, (err, decoded) => {
    if (err) {
      console.log(err);
      res.send('Login to create post');
    } else {
      const data = req.body;
      addPosts(data)
        .then(() => res.redirect('/main.html'))
        .catch((err) => {
          next(err);
        });
    }
  });
};

module.exports = addPost;
