const  mongoose = require("mongoose")

export const  Connect = (url)=>{
  return mongoose.connect(url)
}
