const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require('')

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
  const hashed = bcrypt.hash(this.password,salt)

})




module.exports = new mongoose.model('User',userScheme)
