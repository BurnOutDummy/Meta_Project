const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const userScheme = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Please provide your']
  },
  mail:{
    type:String,
    match:[/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g,'Please provide valid gamil'],
    unique:true,

  },
  password:{
    type:String,
    required:'Please provide password'
  }
  
})

//Hash the password 
userScheme.pre('save',async function(){
  const salt = bcrypt.genSalt()
  this.password = bcrypt.hash(this.password,salt)

})

// Creating JWT token 

userScheme.methods.createJwt = function(){
  return jwt.sign({userId: this._id, name:this.name},JWT_SECRET,{expiresIn:'2d'})
   
}

userScheme.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}




module.exports = new mongoose.model('User',userScheme)
