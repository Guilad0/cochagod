const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/image");

router.get("/:businessId", ctrl.getByBusiness);
router.post("/", ctrl.create);
router.delete("/:id", ctrl.remove);

module.exports = router;
