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
        req.session.user = { username : user.data.username }
    }).catch(err=>{
        res.send(err)
    })
}