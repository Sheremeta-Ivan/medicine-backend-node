const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const storeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for store"],
      unique: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

storeSchema.post("save", handleMongooseError);

const Store = model("store", storeSchema);

module.exports = Store;
