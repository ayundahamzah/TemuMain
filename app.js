const express=require('express');
const app = express();
const bodyParser =require('body-parser')
const path = require('path')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.set('views','./views')
app.set('view engine','ejs')

const session = require('express-session')


// Use the session middleware
app.use(session({ secret: 'keyboardcat'}))

// Router
const player = require('./routers/player')
const register = require('./routers/register')
const login = require('./routers/login')

const game =require('./routers/game')




// /home/document/public
//
// /images/thumbnail/a.jpg
//
// img<src = /

//homepage

app.use('/', login );

app.use('/register', register)



//PLAYER/PROFILE PAGES
app.use('/players', player)

//GAME PAGE

app.use('/games',game)





















app.listen(process.env.PORT || '3000')
