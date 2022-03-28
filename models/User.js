const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required:[true, "Enter the name"]},
     email: {
        type: String,
        required: [true, "Enter the email"]
     },
     phone: {
         type: Number,
         length:10000000>999999999,
     },
     password: {
         type: String,
         required: [true, "Enter the password"]
     },
     address:{
         type: String
     },
     role:{
         type: Number
     },
     created_date: {
         type: Date
     },
     last_activity:{
         type: Date
     }
})

const User = mongoose.model("user",UserSchema)
module.exports = User