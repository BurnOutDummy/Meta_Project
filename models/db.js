const mongoose = require('mongoose')

const Connect = (url) => {
    return mongoose.connect(url)
}
const git = "it is not working"
module.exports = Connect
