const express = require("express");
const ctrl = require("../controllers/store");
const router = express.Router();

router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.post("/", ctrl.addStore);

module.exports = router;
