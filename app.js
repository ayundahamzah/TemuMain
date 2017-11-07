const express=require('express');
const app = express();
const bodyParser =require('body-parser')
const 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/static', express.static(path.join(__dirname, 'public')))


app.set('views','./views')
app.set('view engine','ejs')













app.listen(3000)
