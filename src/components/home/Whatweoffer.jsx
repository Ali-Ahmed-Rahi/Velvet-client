import { ImCross } from "react-icons/im";
import img1 from "../../assets/home/offer/3hcWdqMPBKAvigabt.jpg";
import img2 from "../../assets/home/offer/7i7Y25bojfaFW7WAh.jpg";
import img3 from "../../assets/home/offer/bERBpcNhaujGtLC9R.jpg";
import img4 from "../../assets/home/offer/f6mF2qFkiWDimqz5q.jpg";
import img5 from "../../assets/home/offer/M2ntPXE8vwHe7eaWp.jpg";
import img6 from "../../assets/home/offer/PTuNHSQJ83AKZdzWq.jpg";
import { useState } from "react"; 

const Whatweoffer = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [selectedImage, setSelectedImage] = useState(null); 

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null); 
  };

  return (
    <div className="px-4 mt-5 text-black space-y-3">
      <h2 className="font-bold text-3xl italic text-center">What We Offer</h2>
      <div className="border w-14 mx-[65px] border-black"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className="aspect-w-1 aspect-h-1 cursor-pointer"
            onClick={() => handleImageClick(imageSrc)}
          >
            
            
            <img
              className="w-full h-56 object-cover rounded-lg"
              src={imageSrc}
              alt={`Offer ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && ( 
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative">
            {" "}
           
            <img
              src={selectedImage}
              alt="Enlarged Offer"
              className="max-w-full h-[390px]"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 text-white text-lg cursor-pointer"
            >
              <ImCross />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Whatweoffer;
