const { findOneAndUpdate } = require("../models/Product");
const ShoppingCart = require("../models/ShoppingCart");

const getAllShoppingCarts = async (req, res) => {
  const carts = await ShoppingCart.find();
  res.status(200).json({
    status: "ok",
    data: carts,
  });
}

const addShoppingCart = async (req, res) => {
  //find cart by userId
  let cartFound = await ShoppingCart.findOne({ user: req.body.user });

  if (cartFound) {
    const userId = { user: "req.body.user" }

    const newProductList = cartFound.products.concat(req.body.products)

    const cartToUpdate = {
      invoiceNumber: req.body.invoiceNumber,
      status: req.body.status,
      totalAmount: req.body.totalAmount,
      user: req.body.user,
      products: newProductList,
    }

    const cartUpdated = await findOneAndUpdate(userId, cartToUpdate)

    res.status(200).json({
      status: "ok",
      message: "cart found",
      dataUpdated: cartUpdated
    });
  } else {
    // res.status(200).json({
    //   status: "ok",
    //   message: "cart not found",
    // });
    let newShoppingCart = new ShoppingCart();
    newShoppingCart.invoiceNumber = req.body.invoiceNumber;
    newShoppingCart.status = req.body.status;
    newShoppingCart.totalAmount = req.body.totalAmount;
    newShoppingCart.user = req.body.user;
    newShoppingCart.products = req.body.products;
    newShoppingCart = await newShoppingCart.save();

    res.status(200).json({
      status: "ok",
      dataInserted: newShoppingCart,
    });
  }
}

const payShoppingCart = async (req, res) => {
  const _id = req.params.id;

  let cart = await ShoppingCart.findById(_id);

  if (cart.products.length > 0 && cart.status === "pending") {

    const cartToUpdate = {
      invoiceNumber: cart.invoiceNumber,
      status: "pay",
      totalAmount: cart.totalAmount,
      user: cart.user,
      products: cart.products,
    }
    const response = await ShoppingCart.findByIdAndUpdate(_id, cartToUpdate, { new: true })

    res.status(200).json({
      status: "ok",
      result: response,
      message: "the cart has been paid",
    });
  } else {
    res.status(200).json({
      status: "ok",
      message: "ERROR, the cart must have products",
    });
  }
}


module.exports = {
  getAllShoppingCarts,
  addShoppingCart,
  payShoppingCart
}

