const express = require("express");
const shoppingCartRouter = express.Router();
const { getAllShoppingCarts, addShoppingCart, payShoppingCart } = require("../controllers/ShoppingCart")
const { protect } = require("../controllers/Auth")

shoppingCartRouter
  .route("/product")
  .all(protect)
  .get(getAllShoppingCarts)
  .post(addShoppingCart);


shoppingCartRouter
  .route("/pay/:id")
  .all(protect)
  .post(payShoppingCart)

// shoppingCartRouter
//   .route("/:id")
//   .all(protect)
//   .get(getProductById)
//   .put(updateProductById)
//   .delete(deleteProductById);

module.exports = shoppingCartRouter;