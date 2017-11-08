const express = require('express');
const router = express.Router();

const db = require('../models')

router.get('/', function(req, res){
  // res.send('routing /players/add')
  res.render('loginplayer')
})

router.post('/', function(req, res){
  db.Player.findOne({
    where: {
      Email: req.body.Email,
      Password: req.body.Password
    }
  }).then(function(dataPlayer){
      req.session.loggedIn = true
      if(dataPlayer.Username == null && dataPlayer.Profile == null){
        res.redirect(`/players/add/${dataPlayer.id}`)
      } else {
        res.redirect(`/players/${dataPlayer.id}`)
      }
  }).catch(function(err){
    res.render('loginplayer', {err:true})
  })
})

module.exports = router