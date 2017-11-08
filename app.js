const express=require('express');
const app = express();
const bodyParser =require('body-parser')
const path = require('path')
const session = require('express-session')

// Router
const player = require('./routers/player')
const register = require('./routers/register')
const login = require('./routers/login')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('views','./views')
app.set('view engine','ejs')

// Use the session middleware
app.use(session({ secret: 'keyboard cat'}))


app.use('/players', player)
app.use('/register', register)
app.use('/login', login)










app.listen(3000)
