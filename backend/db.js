const mongodb = require('mongodb')

const key = 'mongodb+srv://Pawan:iamPawan@cluster0-zfewr.gcp.mongodb.net/shop?retryWrites=true&w=majority'

mongodb.connect(key , {useNewUrlParser: true , useUnifiedTopology: true}, (err, client)=>{
    console.log("mongodb connected !!!!!!")
    module.exports = client
    const app = require('./index')
    app.listen(2000)
    console.log("server is up at port ", 2000)
} )