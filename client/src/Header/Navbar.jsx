import { useRef, useEffect } from "react";
import { useShop } from "../context/useShop";
import DotMenu from "../images/vertical-dots.svg";
import TranslateNavbarOnSmallScreen from "./TranslateNavbarOnSmallScreen";

const Navbar = () => {
  const { isToggle, dispatch } = useShop();
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isToggle && ref.current && !ref.current.contains(e.target)) {
        dispatch({ type: "IS_TOGGLE", payload: false });
      }
    };

    /*  const changeWidth = () => {
      dispatch(setWidth(window.innerWidth));
      if (window.innerWidth >= 1024) {
        dispatch(setToggle(false));
      }*/

    //window.addEventListener("resize", changeWidth);
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
      //window.removeEventListener("resize", changeWidth);
    };
  }, [dispatch, isToggle]);

  return (
    <header ref={ref}>
      <div className="bg-blue-700 text-white p-4 flex justify-between items-center relative z-20">
        <h1 className="text-xl">GregShop</h1>
        <button
          type="button"
          aria-label="menu button"
          className={`transition-all duration-300 ease-in-out ${
            isToggle ? "-rotate-90" : "rotate-0"
          }`}
          onClick={() => dispatch({ type: "IS_TOGGLE", payload: !isToggle })}
        >
          <img src={DotMenu} alt="menu" />
        </button>
      </div>
      <TranslateNavbarOnSmallScreen />
    </header>
  );
};

export default Navbar;
