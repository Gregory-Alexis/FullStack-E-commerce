import Navbar from "./Header/Navbar";
import Product from "./Main/Product";
import SliderImage from "./Main/SliderImage";

function App() {
  return (
    <div style={{ fontFamily: "Montserrat" }} className="min-h-screen">
      <Navbar />
      <SliderImage />
      <Product />
    </div>
  );
}

export default App;
