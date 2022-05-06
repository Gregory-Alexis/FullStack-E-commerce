const express = require("express");
const router = express.Router();

// const auth = require("../middleware/auth");

const productCtrl = require("../controllers/product");

router.get("/", productCtrl.findAllProduct);
router.post("/", productCtrl.createProduct);
router.get("/:id", productCtrl.findOneProduct);

module.exports = router;
