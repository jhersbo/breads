const express = require('express')
const breadsController = require('./controllers/breads_controller')
require('dotenv').config()
const PORT = process.env.PORT;

const app = express()

app.get('/', (req, res) =>{
    res.send('Welcome to the Home Page!')
})

app.get('*', (req, res)=>{
    res.send('404')
})

//middleware
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/breads', breadsController)

app.listen(PORT, () =>{
    console.log(`\n***Listening on port: ${PORT}***\n`)
})