const express = require('express');
const router = express.Router();
const db = require('../models');
// const helper = require('../helpers/convertScore')


router.get('/', (req,res)=>{
  db.Game.findAll({
    include:{
       model: db.Player
   }
 }).then((results) => {
    res.render('games',{results});
  }).catch((err)=>{
    console.log(err);
    })
})



router.get('/add', (req, res) => {
    res.render('addgames', { error: null });
});
router.post('/add', (req, res) => {
    db.Game.create(req.body).then((user) => {
        res.redirect('/games');
    }).catch((err) => {
        res.render('addgames', { error: err.errors[0].message });
    })
});


router.get('/edit/:id', (req, res) => {
    db.Game.findById(req.params.id).then((dataGames) => {
        res.render('editgames', { dataGames, error: null });
    }).catch((err) => {
        res.send(err);
    });
});


router.post('/edit/:id',(req,res)=> {
  db.Game.update(req.body, { where: { id: req.params.id } }).then((dataGames)=>{
    res.redirect('/games')
  }).catch((err)=>{
    db.Player.findById(req.params.id).then((dataGames) => {
        res.render('dataGames', { dataSubjects, error: err.errors[0].message });
    })
  })
})


router.get('/delete/:id', (req, res) => {
    db.Game.destroy({ where: { id: req.params.id } }).then((dataGames) => {
        res.redirect('/games');
    }).catch((err) => {
        res.send(err);
    });
});

////menampilkan Game Page dan Player yg enrolled di dalamnya
router.get('/:id/gamespage',(req,res)=>{
    db.Game.findById(req.params.id,{
        include: {model: db.Player}
    }).then(results=>{
      console.log(results.Players.id);
      res.render('gamespage-before',{results})
    })
})

router.post('/:id/gamespage', (req,res) => {
  db.GamePlayer.create({
    GameId: req.params.id,
    PlayerId: req.session.playerId,
    Status: true
  }).then(function(){
    res.redirect(`/games/${req.params.id}/gamespage/after`)
  }).catch(function(err){
      console.log(err);
  })
})


router.get('/:id/gamespage/after', function(req,res) {
  db.Game.findAll(
    {
      include: [db.Player],
      where:{id: req.params.id}
    }
  ).then(function(results){
      // let player = results[0].Players
      // res.send(player)
      res.render('gamespage-after', {results:results, session: req.session.playerId})
      }).catch(function(err){
        console.log(err);
      })
})





module.exports= router
