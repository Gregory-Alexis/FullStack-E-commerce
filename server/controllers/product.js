const Product = require("../models/product");

exports.createProduct = async (req, res, next) => {
  delete req.body.id;
  const product = new Product({
    ...req.body,
  });
  await product
    .save()
    .then(() => res.status(201).json({ message: "Produit enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllProduct = (req, res, next) => {
  Product.find()
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
};

exports.findOneProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
};
