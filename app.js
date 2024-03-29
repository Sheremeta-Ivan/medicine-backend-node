const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const storeRouter = require("./routes/store"); //router conect
const medicineRouter = require("./routes/medicine"); //router conect
const orderRouter = require("./routes/order"); //router conect

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/store", storeRouter); //router conect
app.use("/api/medicine", medicineRouter); //router conect
app.use("/api/order", orderRouter); //router conect

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
