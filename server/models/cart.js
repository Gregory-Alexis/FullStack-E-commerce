const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  title: { type: String, require: true },
  image: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
});

module.exports = mongoose.model("Cart", cartSchema);
