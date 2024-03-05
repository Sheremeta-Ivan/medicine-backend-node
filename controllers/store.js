const Store = require("../models/store");
const { httpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
  const stores = await Store.find();
  res.json({ stores });
};

const addStore = async (req, res, next) => {
  const store = await Store.create({ ...req.body });
  res.status(201).json({ store });
};

const getById = async (req, res, next) => {
  const store = await Store.findById(req.params.id);
  if (!store) throw httpError(404, "Store not found");
  res.json({ store });
};


module.exports = {
  getAll: ctrlWrapper(getAll),
  addStore: ctrlWrapper(addStore),
  getById: ctrlWrapper(getById),
};
