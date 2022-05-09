import { useShop } from "../context/useShop";

const TranslateNavbarOnSmallScreen = () => {
  const { isToggle } = useShop();
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
            <li className="mb-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex justify-center py-2 rounded-lg w-72">
              Mon Panier
            </li>
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
