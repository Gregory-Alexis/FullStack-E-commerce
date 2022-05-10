import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router";

const TranslateNavbarOnSmallScreen = () => {
  const isToggle = useSelector((state) => state.shopSlice.isToggle);
  const quantity = useSelector((state) => state.cartSlice.quantity);

  return (
    <>
      {isToggle ? (
        <div
          className={`text-primary bg-white w-full absolute left-0 mt-2 opacity-100 transition-all duration-300 ease-in-out translate-y-0 top-12 z-20`}
        >
          <ul className="flex flex-col items-center justify-center h-full">
            <li className="my-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex justify-center py-2 rounded-lg w-72">
              Connexion
            </li>
            <li className="mb-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex justify-center py-2 rounded-lg w-72">
              Nos Produits
            </li>
            <div className="relative">
              <Link to={`/cart`}>
                <li className="mb-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex justify-center py-2 rounded-lg w-72">
                  Mon Panier
                </li>
              </Link>
              {quantity > 0 && (
                <div className="bg-red-500 absolute w-4 h-4 rounded-full top-0 right-20 mr-2 mt-1 flex items-center justify-center text-white text-sm">
                  {quantity}
                </div>
              )}
            </div>
          </ul>
        </div>
      ) : (
        <div
          className={`text-primary bg-white w-full absolute left-0 mt-2 opacity-0 transition-all duration-300 ease-in-out -translate-y-full top-0 z-20`}
        >
          <ul className="flex flex-col items-center justify-center h-full">
            <li className="mb-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex justify-center py-2 rounded-lg w-72">
              Connexion
            </li>
            <li className="mb-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex justify-center py-2 rounded-lg w-72">
              Nos Produits
            </li>
            <li className="mb-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex justify-center py-2 rounded-lg w-72">
              Mon Panier
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default TranslateNavbarOnSmallScreen;
