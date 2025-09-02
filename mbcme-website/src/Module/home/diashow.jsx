import "../../css/style.css";
import { Carousel } from "flowbite-react";

export default function Diashow() {
  return (
    <div className=" mx-auto">
    
        <div className="max-h-60 carousel carousel-center ">
          <div id="slide1" className="carousel-item relative  w-full">
            <a className="absolute">hi you should check me out</a>
            <img className="w-full object-cover"
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Pizza"
            />
           
          </div>
          <div id="slide2" className="carousel-item w-full">
            <img className="w-full object-cover"
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Pizza"
            />
          </div>
          <div id="slide3" className="carousel-item w-full">
            <img className="w-full object-cover"
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Pizza"
            />
          </div>
          <div id="slide4" className="carousel-item w-full">
            <img className="w-full object-cover"
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Pizza"
            />
          </div>
          <div id="slide5" className="carousel-item w-full">
            <img className="w-full object-cover"
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Pizza"
            />
          </div>

          <div id="slide6" className="carousel-item w-full">
            <img className="w-full object-cover"
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Pizza"
            />
          </div>
          <div id="slide7" className="carousel-item w-full">
            <img className="w-full object-cover"
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Pizza"
            />
          </div>
        </div>
       
      </div>

  );
}
