const usersCollection = require('../db').db().collection('users')
const validator = require('validator')
const bcrypt = require('bcrypt')


const Users = function(data){
    this.data = data
    this.errors = []
}


Users.prototype.cleanUp= function(){
    if(typeof(this.data.username) != "string"){ this.data.username = ""}
    if(typeof(this.data.password) != "string"){ this.data.password = ""}
    if(typeof(this.data.email) != "string"){ this.data.email = ""}

    // rid of any extra properties
    this.data = {
        username : this.data.username.trim().toLowerCase(),
        email : this.data.email.trim().toLowerCase(),
        password : this.data.password
    }
}

Users.prototype.validate = function(){
    return new Promise(async (resolve, reject)=> {
        if(this.data.username == ""){this.errors.push("you must provide a username")}
        if(this.data.username != "" && !validator.isAlphanumeric(this.data.username)){this.errors.push("User name can only contain numbers and letters")}
        if(!validator.isEmail(this.data.email)){this.errors.push("you must provide a valid email")}
        if(this.data.password == ""){this.errors.push("you must provide a password")}
        if(this.data.password.length > 0 && this.data.password.length < 8){this.errors.push("psaaword must be 8 character long")}
        if(this.data.password.length > 20){this.errors.push("password cannot contain more then 20 characters .")}
        if(this.data.username.length > 0 && this.data.username.length < 3){this.errors.push("username must be 3 character long")}
        if(this.data.username.length > 20){this.errors.push("username cannot contain more then 20 characters .")}
    
        // check if user name is already taken
        if(this.data.username.length > 2 && this.data.username.length < 25 && validator.isAlphanumeric(this.data.username)){
            let userNmaeExists = await usersCollection.findOne({username : this.data.username})
            if(userNmaeExists){
                this.errors.push("user name is already taken")
            }
        }
    
         // check if email is already taken
         if(validator.isEmail(this.data.email)){
            let userEmailExists = await usersCollection.findOne({email : this.data.email})
            if(userEmailExists){
                this.errors.push("email is already taken")
            }
        }
        resolve()
    })
}

Users.prototype.register = function(){
    return new Promise(async (resolve, reject)=>{

        this.cleanUp()
        await this.validate()
    
        // s2 - only if data is valid proceed to save it to database 
        if (!this.errors.length){
            let salt = bcrypt.genSaltSync(10)
            this.data.password = bcrypt.hashSync(this.data.password , salt)
            usersCollection.insertOne(this.data)
            resolve()
        }else{
            reject(this.errors)
        }
    
    })
}

Users.prototype.login = function(){
  return new Promise((resolve, reject)=>{
    this.cleanUp()
    usersCollection.findOne({username : this.data.username}).then(attemptedUser =>{
        if(attemptedUser && bcrypt.compareSync(this.data.password , attemptedUser.password)){
            resolve("login success !!!")
        }else{
            reject("invalid useraname and password !!!")
        }
    }).catch(err=>{
        reject(" please try again letter")
    })
  })
    
}

module.exports = Users