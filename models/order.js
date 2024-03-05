const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const orderSchema = new Schema(
  {
    medicine: [
      {
        medicine: {
          type: Array,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    store: {
      type: Schema.Types.ObjectId,
      ref: "store",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);
module.exports = Order;
