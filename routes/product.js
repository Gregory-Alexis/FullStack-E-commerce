const express = require("express");
const router = express.Router();

const productCtrl = require("../controllers/product");
const auth = require("../middleware/auth");

router.get("/", auth, productCtrl.findAllProduct);
router.post("/", auth, productCtrl.createProduct);
router.get("/:id", auth, productCtrl.findOneProduct);

module.exports = router;
