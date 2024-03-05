const { Schema, model } = require("mongoose");
const handleMongooseError = require("../middlewares/handleMongooseError");

const couponSchema = new Schema(
  {
    code: {
      type: String,
      required: [true, "Set name for coupon"],
      unique: true,
    },
    discount: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

couponSchema.post("save", handleMongooseError);

const Coupon = model("coupon", couponSchema);
module.exports = Coupon;
