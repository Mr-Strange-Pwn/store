let Users = require("../models/Users")

exports.register=(req,res)=>{
    let user = new Users(req.body)
    res.send("data submited")
    console.log(req.body)
}