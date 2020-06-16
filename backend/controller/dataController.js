const data = require('../data')

 exports.product =(req , res)=>{
    res.send(JSON.stringify(data))

} 
