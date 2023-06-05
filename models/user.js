const mongoose = require('mongoose')
const Schema = mongoose.Schema

userSchema = new Schema({

  unique_id: Number,
  email: String,
  username: String,
  exam1: Number,
  exam2: Number,
  exam3: Number,
  password: String,
  passwordConf: String
}),
User = mongoose.model('User', userSchema)

module.exports = User
