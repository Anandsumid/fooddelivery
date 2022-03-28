const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    customer_id: {
        type: String,
        required: [true, "Oh Come on! Food name is must!"],
      },
      deliveryman_id: {
        type: Number,
      },
      order_status: {
        type: Number,
      },
      ordered_date: {
        type: Date
      },
      total_fee:{
          type: Number
      }
})

const Order = mongoose.model("order", OrderSchema)
module.exports = Order