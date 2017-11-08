const express = require('express');
const router = express.Router();
const db = require('../models');
// const helper = require('../helpers/convertScore')


router.get('/', (req,res)=>{
  db.Game.findAll().then((dataGames) => {
    res.render('games',{dataGames});
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
router.get('/:id/playing',(req,res)=>{
    db.Game.findById(req.params.id,{
        include:[{
          model: db.Player,
        order: [[db.Player,'username','ASC']]
        }]
    }).then(result=>{
      res.render('games',{result})
    })
})

module.exports= router
