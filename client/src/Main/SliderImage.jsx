import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { images, propriete } from "./image";

const SliderImage = () => {
  return (
    <div>
      <Slide {...propriete}>
        {images.map((el) => (
          <div key={el.id}>
            <div
              style={{ backgroundImage: `url(${el.url})` }}
              className="bg-cover bg-center h-96"
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SliderImage;
