const pagenotfound = (req,res)=>{

  return res.status(404).send('Route not found')
}
module.exports = pagenotfound
