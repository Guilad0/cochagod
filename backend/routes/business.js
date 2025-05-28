const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/business");

router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.get("/getall/:id", ctrl.getBusinessImages);
router.post("/", ctrl.create);
router.put("/update/:id", ctrl.update);
router.delete("/:id", ctrl.remove);
router.get("/category/:categoryId", ctrl.getByCategory);
router.patch("/:id/links", ctrl.updateLinks);
router.patch("/:id/location", ctrl.updateLocation);
router.patch("/:id/logo", ctrl.updateLogo);

module.exports = router;
