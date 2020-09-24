let Users = require("../models/Users")


exports.register=(req,res)=>{
    let user = new Users(req.body)
    user.register().then(()=>{
       res.send("data submited")
    }).catch(err =>{
        res.send(err)
    })
    
}

exports.login = (req, res) =>{
    let user = new Users(req.body)
    user.login().then(result => {
        res.send(result)
       
    }).catch(err=>{
        res.send(err)
    })
}

exports.auth = (req, res)=>{
    let user = new Users()
    res.send(user.auth)
    console.log("auth ",user.auth)
}