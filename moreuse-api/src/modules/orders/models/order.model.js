const mongoose = require('mongoose');
const Order = require('../../orders/models/order.model');
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    producto:{
      type: Schema.Types.ObjectId,
      required: true,
      ref:'Clothes'
    },
    sellerId: {
      type:Schema.Types.ObjectId,
      required: true,
      ref: 'Users'
    }
  },
  {
    timestamps:true
  }
);

const Order = mongoose.model("Orders",OrderSchema);

module.exports = Order;
