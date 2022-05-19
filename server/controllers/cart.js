const Cart = require("../models/cart");

exports.createProductCart = async (req, res, next) => {
  delete req.body.id;
  const cart = new Cart({
    ...req.body,
  });
  await cart
    .save()
    .then(() =>
      res.status(201).json({ message: "Produit enregistré dans le panier" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllProductCart = (req, res, next) => {
  Cart.find()
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
};
