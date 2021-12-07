const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

breads.get('/', (req, res) =>{
    // res.send(Bread)
    res.render('Index', {
        breads: Bread
    })
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex]
    })
  })

breads.get('*', (req, res) =>{
    res.send('404')
})

module.exports = breads;