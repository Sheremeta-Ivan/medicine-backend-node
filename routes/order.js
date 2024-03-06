const express = require("express");
const ctrl = require("../controllers/order");
const router = express.Router();

router.post("/", ctrl.postOrder);

module.exports = router;
