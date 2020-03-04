require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const getUser = require('../Database/query/getUser');

const login = (req, res) => {
  getUser(req.body.useremail)
    .then((result) => {
      console.log(result.rows);
      if (result.rows.length > 0) {
        bcrypt.compare(req.body.password, result.rows[0].password)
          .then((success) => {
            if (success) {
              jwt.sign(req.body.useremail, process.env.secretkey, (error, token) => {
                if (token) {
                  res.cookie('name', token).redirect('/');
                }
              });
            }
          });
      }
    });
};

module.exports = login;
