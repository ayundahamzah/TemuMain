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

// Router
const player = require('./router/player')
const register = require('./router/register')
const login = require('./router/login')
const home = require('./routers/home')
const game =require('./routers/game')




// /home/document/public
//
// /images/thumbnail/a.jpg
//
// img<src = /

//homepage

app.use('/', home );

app.use('/register', register)
app.use('/login', login)


//PLAYER/PROFILE PAGES
app.use('/players', player)

//GAME PAGE

app.use('/games',game)






// Use the session middleware
app.use(session({ secret: 'keyboard cat'}))















app.listen(3000)