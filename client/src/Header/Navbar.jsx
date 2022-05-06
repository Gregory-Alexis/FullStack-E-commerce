import React from "react";

const Navbar = () => {
  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="">GregShop</h1>
      <ul className="flex">
        <li>Connexion</li>
        <li>Acceuil</li>
        <li>Panier</li>
        <li>Produit</li>
      </ul>
    </header>
  );
};

export default Navbar;
