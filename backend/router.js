const express = require('express')
const router = express.Router()
const userController = require('./controller/userController')
const dataController = require('./controller/dataController')

router.get('/',(req, res)=>{
    res.send("ohk ready")
})

router.post('/user/register', userController.register)

router.post('/login', userController.login)

router.get("/shopdata", dataController.product)

router.get('/auth', userController.auth)

module.exports = router