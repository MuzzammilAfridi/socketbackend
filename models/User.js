const mongoose = require('mongoose')

// cloudinary.config({ 
//     cloud_name: 'dn7qeezsk', 
//     api_key: '785268121579795', 
//     api_secret: 'CnkoslRPAM-Yv0XBHhonJEYCcoI'
//   });


const userSchema = new mongoose.Schema({
    name : String,
    username : String,
    email : String,
    password : String,
    imagePath: String
    
})

const User = mongoose.model("User", userSchema)

module.exports = User