const Medicine = require("../models/medicine");
const Store = require("../models/store");
const { httpError, ctrlWrapper } = require("../helpers");

const addMedicine = async (req, res) => {
  const storeId = req.params.store_id;
  const storeExists = await Store.findById(storeId);
  if (!storeExists) throw httpError(404, "Store not found");

  const medicine = await Medicine.create({ ...req.body, store_id: storeId });

  res.status(201).json(medicine);
};

const getMedicineByStore = async (req, res) => {
  const storeId = req.params.store_id;
  const storeExists = await Store.findById(storeId);
  if (!storeExists) throw httpError(404, "Store not found");

  const medicine = await Medicine.find({ store_id: storeId });

  res.json({ medicine });
};

module.exports = {
  addMedicine: ctrlWrapper(addMedicine),
  getMedicineByStore: ctrlWrapper(getMedicineByStore),
};
