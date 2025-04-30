const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/business");

router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.post("/", ctrl.create);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);
router.get("/category/:categoryId", ctrl.getByCategory);
router.patch("/:id/links", businessController.updateLinks);
router.patch("/:id/location", businessController.updateLocation);
router.patch("/:id/logo", businessController.updateLogo);

module.exports = router;
