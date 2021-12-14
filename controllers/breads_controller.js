const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

breads.get('/', (req, res) =>{
    // res.send(Bread)
    res.render('Index', {
        breads: Bread
    })
})

breads.post('/', (req, res)=>{
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten === 'true'
  }else{
    req.body.hasGluten === 'false'
  }
  Bread.push(req.body)
  console.log(req.body)
  res.redirect('/breads')
})

breads.get('/new', (req, res)=>{
  res.render('New')
})
// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex]
    })
})


module.exports = breads;