const express = require('express')
const router = require('./router')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
})


let sessionOptions = session({
    secret : "javaScript is soooooooo cool",
    store: new MongoStore({client : require('./db')}) ,
    resave : false,
    saveUninitialized: false,
    cookie :{ maxAge : 1000 * 60 *60 * 24 , httpOnly : true}
})


app.use('/',router)
app.use(sessionOptions)

// app.listen(2000)

module.exports = app