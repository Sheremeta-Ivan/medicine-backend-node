const Order = require("../models/order");
const { ctrlWrapper } = require("../helpers");

const postOrder = async (req, res) => {
  const order = await Order.create({ ...req.body });
  res.status(201).json(order);
};

module.exports = {
  postOrder: ctrlWrapper(postOrder),
};
