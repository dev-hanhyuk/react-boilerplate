'use strict'

const router = module.exports = require('express').Router();
const User = require('APP/db/models/user');


// You can access this route by "localhost:1337/api/user"
router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(user => res.send(user))
    .catch(next)
})
