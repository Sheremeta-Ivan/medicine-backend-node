const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const orderSchema = new Schema(
  {
    items: {
      type: Array,
    },
    totalPrice: {
      type: Number,
    },
    user: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);
module.exports = Order;
