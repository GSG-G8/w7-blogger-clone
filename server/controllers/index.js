const router = require('express').Router();
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const addUser = require('../Database/query/addUser');


router.post('/signup', (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().regex(/[A-z0-9]{6,}/).required(),
    confirmPassword: Joi.ref('password'),
    email: Joi.string().email().required(),
  });
  const { val } = schema.validate(req.body);
  console.log(val);
  // if (validationResult) {
  //   bcrypt.genSalt(10)
  //     .then((salt) => {
  //       bcrypt.hash(req.body.password, salt, (error2, hash) => {
  //         console.log(hash);
  //         //       // addUser(req.body, hash);
  //         res.redirect('/');
  //       });
  //     })
  //     .catch(console.error);
  // } else if (error) {
  //   console.log('YOUR ERROR', error);
  //   res.send('enter correct data');
  // }
});

module.exports = router;
