const express = require("express");
const router = express.Router()

router.get('/v1',(req,res)=>{
  res.json({
    name:"Nischal",
    age: "10",
    bored:true
  })
})

router.post('/post',(req,res)=>{
  const { value,time} = req.body
  let final = value + time
  console.log(final);

})
module.exports = router
