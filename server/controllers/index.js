const router = require('express').Router();
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const addUser = require('../Database/query/addUser');

const posts = require('./posts');
const addPost = require('./addPost');


router.get('/posts', posts);
router.post('/add-post', addPost);


router.post('/signup', (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().regex(/[A-z0-9]{6,}/).required(),
    confirmPassword: Joi.ref('password'),
    email: Joi.string().email().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    console.log('YOUR ERROR', error);
    res.send('enter correct data');
  } else {
    bcrypt.genSalt(10)
      .then((salt) => {
        bcrypt.hash(req.body.password, salt, (error2, hash) => {
          if (error2) { console.log('ERROR PASSWORED HASHED', error2); } else {
            addUser(req.body, hash);
            res.redirect('/');
          }
        });
      })
      .catch(console.error);
  }
});

module.exports = router;
