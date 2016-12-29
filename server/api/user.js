'use strict'

const router = module.exports = require('express').Router();
const User = require('APP/db/models/user');


// You can access this route by "localhost:1337/api/user"
router.post('/login', (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      return user.authenticate(req.body.password)
        .then(ok => {
          if(!ok) res.status(401).send('user login failed');
          res.send(user);
        })
    })
    .catch(() => res.status(401).send('user login failed'))
})
