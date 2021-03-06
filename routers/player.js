const express = require('express');
const router = express.Router();

const db = require('../models')

// FUNGSI HELPER
function checkLogin(req, res, next){
  if (req.session.loggedIn) {
    next()
  }else{
    res.send('gagal')
    // res.redirect('/login')
  }
}

// Read
router.get('/:id', checkLogin, function(req, res){
  console.log(req.session);
  db.Player.findById(req.params.id, {include: db.Game}).then(function (dataPlayer){
    // res.send(dataPlayer);
    // res.render('player', {
    //   dataPlayer: dataPlayer
    // })
    db.Game.findAll().then(function(dataGame){
      res.render('player', {
        dataPlayer: dataPlayer,
        dataGame: dataGame
      })
    })
  }).catch(function (err){
    console.log(err);
  })
  // res.send('routing /players'
})

// Player After
router.get('/:id/after', checkLogin, function(req, res){
    db.Player.findById(req.params.id, {include: db.Game}).then(function (dataPlayer){
    db.Game.findAll().then(function(){
      // res.send(req.session)
      res.render('player-after', {
        dataPlayer: dataPlayer, session: req.session
      })
    })
  }).catch(function (err){
    console.log(err);
  })
  // res.send('routing /players'
})

// Create (Add Profile)
router.get('/add/:id', checkLogin, function(req, res){
  db.Player.findById(req.params.id).then(function(dataPlayer){
    res.render('addplayer', {dataPlayer:dataPlayer})
  }).catch(function(err){
    console.log(err);
  })
})

router.post('/add/:id', function(req, res){
  db.Player.findById(req.params.id).then(function(dataPlayer){
    dataPlayer.update({
      Username: req.body.Username,
      Profile: req.body.Profile,
      Gender: req.body.Gender
    }).then(function(){
      res.redirect(`/players/${req.params.id}`)
    }).catch(function(err){
      console.log(err);
    })
  })
})

// Update (edit dengan tampilan sama seperti profile)
router.get('/edit/:id', checkLogin, function(req, res){
  db.Player.findById(req.params.id).then(function(dataPlayer){
    res.render('editplayer', {dataPlayer:dataPlayer})
  }).catch(function(err){
    console.log(err);
  })
})

router.post('/edit/:id', function(req, res){
  db.Player.findById(req.params.id).then(function(dataPlayer){
    dataPlayer.update({
      Username: req.body.Username,
      Email: req.body.Email,
      Password: req.body.Password,
      Profile: req.body.Profile,
      Gender: req.body.Gender
    }).then(function(){
      res.redirect(`/players/${req.params.id}`)
    }).catch(function(err){
      console.log(err);
    })
  })
})

// Delete (ada tombol remove account dan konfirmasi)
router.get('/delete/:id', function(req, res){
  db.Player.destroy({
    where: {id: req.params.id}
  }).then(function(){
    res.redirect('/login')
  }).catch(function(err){
    console.log(err);
  })
})


// Connect
router.get('/connect/:id', function(req, res){
  db.FriendList.findAll(
    {where:{playerId:req.session.playerId}
  }).then(function(dataFriend){
    res.render('playerconnect',{dataFriend})
  })
})
 


router.post('/connect/:id', function(req, res){
  db.FriendList.create({
    playerId: req.session.playerId,
    friendId: req.params.id
  }).then(function(){
    res.redirect(`/players/${req.params.id}`)
    }).catch(function(){
      
      })
  
})
 

module.exports = router