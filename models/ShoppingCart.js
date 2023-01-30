const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartProduct = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
});


const shoppingCart = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'PAID'],
    default: "PENDING",
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  products: [cartProduct]
});

const userModel = mongoose.model("cart", shoppingCart);
module.exports = userModel;