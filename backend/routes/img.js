const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/img");
const upload = require('../middlewares/multer');

router.get("/:businessId", ctrl.getByBusiness);
router.post("/", ctrl.create);
router.delete("/:id", ctrl.remove);
router.post('/upload', upload.single('image'), ctrl.uploadImage);


module.exports = router;
