const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();

const adminRoutes = require("./routes/admin");
const tinyUrlRoutes = require("./routes/tinyurl");

const app = express();

const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ekxmb.mongodb.net/urlShortener?retryWrites=true&w=majority`;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(tinyUrlRoutes);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
