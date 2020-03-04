const addPosts = require('../Database/query/addPosts');

const addPost = (req, res) => {
  const data = req.body;
  addPosts(data)
    .then(() => res.redirect('/'))
    .catch(console.error());
};

module.exports = addPost;
