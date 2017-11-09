const express = require('express');
const router = express.Router();

const db = require('../models')

const bcrypt = require('bcrypt')

router.get('/', function(req, res){
  res.render('loginplayer')
})

router.post('/', function(req, res){
  db.Player.findOne({
    where: {
      Email: req.body.Email
    }
  }).then(function(dataPlayer){
    if(dataPlayer){
      // console.log("masuk cek data player");
      bcrypt.compare(req.body.Password, dataPlayer.Password).then(function(result){
        if(result){
          // console.log("masuk cek result");
          req.session.loggedIn = true;
          req.session.playerId = dataPlayer.id
          req.session.Email = dataPlayer.Email
          if(dataPlayer.Username == null && dataPlayer.Profile == null){
            // console.log("masuk ke sono");
            res.redirect(`/players/add/${dataPlayer.id}`)
          } else {
            // console.log("masuk ke sini");
            res.redirect(`/players/${dataPlayer.id}`)
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
    // console.log(dataPlayer);
    //   // req.session.loggedIn = true
    //   let compare =req.body.Password == dataPlayer.Password
    //   req.session.loggedIn = compare
    //   // console.log(req.session.loggedIn);
    //   if(dataPlayer.Username == null && dataPlayer.Profile == null){
    //     res.redirect(`/players/add/${dataPlayer.id}`)
    //   } else {
    //     res.redirect(`/players/${dataPlayer.id}`)
    //   }
  }).catch(function(err){
    console.log(err);
    res.render('loginplayer', {err:true})
  })
})

module.exports = router