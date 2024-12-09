
import { useState, useEffect } from "react";
import image1 from "../../assets/images/gallary1.jpg";
import image2 from "../../assets/images/gallary2.jpg";
import image3 from "../../assets/images/gallary3.jpg";
import image4 from "../../assets/images/gallary4.jpg";
import image5 from "../../assets/images/gallary5.jpg";
import image6 from "../../assets/images/gallary6.jpg";


const Banner = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };


  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="p-4">
      {/* full carosal is inside this div */}
      <div className="carousel w-full overflow-hidden relative rounded-lg ">

        {/* for Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] z-10">
        </div> */}

        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img src={img} className="w-full md:h-[700px]" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default Banner;






