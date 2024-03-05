const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const medicineSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for medicine"],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    count: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    store_id: {
      type: Schema.Types.ObjectId,
      ref: "store",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

medicineSchema.post("save", handleMongooseError);

const Medicine = model("medicine", medicineSchema);
module.exports = Medicine;
