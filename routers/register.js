const express = require('express');
const router = express.Router();

const db = require('../models')

router.get('/', function(req, res){
  // res.send('routing /players/add')
  console.log(req.body);
  res.render('registerplayer')
})

router.post('/', function(req, res){
  db.Player.create({
    Email: req.body.Email,
    Password: req.body.Password
  }).then(function(){
    res.redirect('/')
  }).catch(function(err){
    console.log(err);
  })
})

module.exports = router