const mongoose = require('mongoose');
const { Schema } = mongoose;

const CloutheSchema = new Schema(
  {
    name:{
      type:String,
      required: true
    },
    target:{
      type:String,
      required: true
    },
    gender:{
      type:String,
      required: true
    },
    price:{
      type: Number,
      required: true
    },
    sellerId: {
      type:Schema.Types.ObjectId,
      required: true,
      ref: 'Users'
    },
    image: {
      type:String,
      required: true
    },
    description: String,
    status: {
      type: Number,
      default: 1
    },
    isRemoved: {
      type:Boolean,
      default: false
    }
  },
  {
    timestamps:true
  }
);

const Clothe = mongoose.model("Clothes",CloutheSchema);

module.exports = Clothe;
