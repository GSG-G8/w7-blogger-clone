const router = require('express').Router();
const signup = require('./signup');

const posts = require('./posts');
const addPost = require('./addPost');
const login = require('./login');


router.get('/posts', posts);
router.post('/add-post', addPost);
router.post('/login', login);


router.post('/signup', signup);

module.exports = router;
