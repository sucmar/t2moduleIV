const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routers/productRouter");
const shoppingCartRouter = require("./routers/shoppingCartRouter");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");

const app = express();
app.use(express.json()); // req => body
app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/cart/", shoppingCartRouter);
app.use("/api/v1/products/", productRouter);
app.use("/api/v1/users/", userRouter);
app.use("/api/v1/auth/", authRouter);

app.all("*", (req, res, next) => {
  throw new Error('route not found');
});

app.use((err, req, res, next) => {
  res.status(400).json({
    status: "error",
    message: err.message,
  });
});
module.exports = app;










