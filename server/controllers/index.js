const express = require('express');

const router = express.Router();

const posts = require('./posts');
const addPost = require('./addPost');


router.get('/posts', posts);
router.post('/add-post', addPost);


module.exports = router;
