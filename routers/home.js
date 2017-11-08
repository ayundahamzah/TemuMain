const express = require('express');
const router = express.Router();
const db = require('../models');
// const helper = require('../helpers/convertScore')


router.get('/',(req,res)=>{
  res.render('home')
})

module.exports= router
