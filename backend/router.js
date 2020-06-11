const express = require('express')
const router = express.Router()
const userController = require('./controller/userControler')

router.get('/',(req, res)=>{
    res.send("ohk ready")
})

router.post('/user/register', userController.register)

module.exports = router