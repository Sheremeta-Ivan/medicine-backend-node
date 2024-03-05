const express = require("express");
const ctrl = require("../controllers/medicine");
const router = express.Router();

router.post("/:store_id", ctrl.addMedicine);
router.get("/:store_id", ctrl.getMedicineByStore);

module.exports = router;
