const ShoppingCart = require("../models/ShoppingCart");
const Product = require("../models/Product");

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

  if (cartFound && cartFound.status === "PENDING") {
    const _id = cartFound._id;

    const listOfProductsInBody = req.body.products;
    const listOfProductsOnDB = cartFound.products;

    const newListOfProducts = [...listOfProductsInBody, ...listOfProductsOnDB]

    const cartToUpdate = {
      invoiceNumber: cartFound.invoiceNumber,
      status: cartFound.status,
      totalAmount: cartFound.totalAmount,
      user: cartFound.user,
      products: newListOfProducts,
    }
    const response = await ShoppingCart.findByIdAndUpdate(_id, cartToUpdate, { new: true })

    res.status(200).json({
      status: "ok",
      dataUpdated: response
    });
  } else {
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


const deleteProductFromCart = async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findById({ _id: productId });

  const productInCarts = await ShoppingCart.find({ "products.productId": productId })

  if (product && productInCarts.length > 0) {
    const carts = await ShoppingCart.find({ status: "PENDING" });
    carts.forEach(async (cart) => {

      const newListOfProducts = cart.products.filter((product) => {
        return product.productId !== productId
      })

      const _id = cart._id

      const cartToUpdate = {
        invoiceNumber: cart.invoiceNumber,
        status: cart.status,
        totalAmount: cart.totalAmount,
        user: cart.user,
        products: newListOfProducts,
      }
      await ShoppingCart.findByIdAndUpdate(_id, cartToUpdate, { new: true })
    })

    res.status(200).json({
      status: "ok",
      message: `${product.name} have been deleted from the list of carts`,
    });

  } else {
    res.status(200).json({
      status: "ERROR",
      message: "The cart does not contain the product",
    });
  }
}

const payShoppingCart = async (req, res) => {
  const _id = req.params.id;

  let cart = await ShoppingCart.findById(_id);

  if (cart) {
    if (cart.products.length > 0 && cart.status === "PENDING") {

      const cartToUpdate = {
        invoiceNumber: cart.invoiceNumber,
        status: "PAID",
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
        status: "ERROR",
        message: "the cart must have products",
      });
    }
  } else {
    res.status(200).json({
      status: "ERROR",
      message: "the cart has been not found",
    });
  }

}


module.exports = {
  getAllShoppingCarts,
  addShoppingCart,
  deleteProductFromCart,
  payShoppingCart
}

