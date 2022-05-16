import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DotMenu from "../images/vertical-dots.svg";
import { setIsToggle } from "../redux/features/shopSlice";
import TranslateNavbarOnSmallScreen from "./TranslateNavbarOnSmallScreen";

const Navbar = () => {
  const isToggle = useSelector((state) => state.shopSlice.isToggle);

  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isToggle && ref.current && !ref.current.contains(e.target)) {
        dispatch(setIsToggle(false));
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
      <div className="text-primary p-4 flex justify-between items-center relative z-30">
        <h1 className="text-xl">GregShop</h1>
        <button
          type="button"
          aria-label="menu button"
          className={`transition-all duration-300 ease-in-out ${
            isToggle ? "-rotate-90" : "rotate-0"
          }`}
          onClick={() => dispatch(setIsToggle(!isToggle))}
        >
          <img src={DotMenu} alt="menu" />
        </button>
      </div>
      <TranslateNavbarOnSmallScreen />
    </header>
  );
};

export default Navbar;
