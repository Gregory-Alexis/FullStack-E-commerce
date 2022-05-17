const express = require("express");
const router = express.Router();

const productCtrl = require("../controllers/product");
//const auth = require("../middleware/auth");

router.get("/", productCtrl.findAllProduct);
router.post("/", productCtrl.createProduct);
router.get("/product/:id", productCtrl.findOneProduct);

module.exports = router;
