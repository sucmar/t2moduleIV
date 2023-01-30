const express = require("express");
const shoppingCartRouter = express.Router();
const { getAllShoppingCarts, addShoppingCart, payShoppingCart, deleteProductFromCart } = require("../controllers/ShoppingCart")
const { protect } = require("../controllers/Auth")

shoppingCartRouter
  .route("/product")
  .all(protect)
  .get(getAllShoppingCarts)
  .post(addShoppingCart);

shoppingCartRouter
  .route("/product/:id")
  .all(protect)
  .delete(deleteProductFromCart);


shoppingCartRouter
  .route("/pay/:id")
  .all(protect)
  .post(payShoppingCart)

module.exports = shoppingCartRouter;