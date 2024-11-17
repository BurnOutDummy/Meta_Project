const  mongoose = require("mongoose")

export const  Connect = ()=>{
  return mongoose.connect("url")
}
