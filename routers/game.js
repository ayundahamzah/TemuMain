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
      res.render('gamespage-before',{results})
    })
})



module.exports= router
