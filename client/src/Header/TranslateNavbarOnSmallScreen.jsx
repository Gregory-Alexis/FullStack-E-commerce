import { useShop } from "../context/useShop";

const TranslateNavbarOnSmallScreen = () => {
  const { isToggle } = useShop();
  return (
    <>
      {isToggle ? (
        <div
          className={`bg-blue-700 text-white w-full absolute left-0 mt-2 transition-all duration-300 ease-in-out translate-y-0 top-12 z-10`}
        >
          <ul className="flex flex-col items-center justify-center h-full">
            <li className="mb-4 hover:text-blue-300">Connexion</li>
            <li className="mb-4 hover:text-blue-300">Nos Produits</li>
            <li className="mb-4 hover:text-blue-300">Mon Panier</li>
          </ul>
        </div>
      ) : (
        <div
          className={`bg-blue-700 text-white w-full absolute left-0 mt-2 transition-all duration-300 ease-in-out -translate-y-full top-0 z-10`}
        >
          <ul className="flex flex-col items-center justify-center h-full">
            <li className="mb-4 hover:text-blue-300">Connexion</li>
            <li className="mb-4 hover:text-blue-300">Nos Produits</li>
            <li className="mb-4 hover:text-blue-300">Mon Panier</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default TranslateNavbarOnSmallScreen;
