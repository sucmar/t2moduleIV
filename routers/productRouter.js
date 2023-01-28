const express = require("express");
const productRouter = express.Router();
const { getAllProducts, addProduct, getProductById, updateProductById, deleteProductById } = require("../controllers/Product")
const { login, signup, protect } = require("../controllers/Auth")

productRouter
    .route("/")
    .all(protect)
    .get(getAllProducts)
    .post(addProduct);


productRouter
    .route("/:id")
    .all(protect)
    .get(getProductById)
    .put(updateProductById)
    .delete(deleteProductById);

module.exports = productRouter;