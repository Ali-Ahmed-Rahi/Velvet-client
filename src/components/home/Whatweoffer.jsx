import img1 from "../../assets/home/offer/3hcWdqMPBKAvigabt.jpg";
import img2 from "../../assets/home/offer/7i7Y25bojfaFW7WAh.jpg";
import img3 from "../../assets/home/offer/bERBpcNhaujGtLC9R.jpg";
import img4 from "../../assets/home/offer/f6mF2qFkiWDimqz5q.jpg";
import img5 from "../../assets/home/offer/M2ntPXE8vwHe7eaWp.jpg";
import img6 from "../../assets/home/offer/PTuNHSQJ83AKZdzWq.jpg";

const Whatweoffer = () => {
  return (
    <div className="px-4 mt-10">
      <div className="mb-5 space-y-2">
        <h2 className="text-3xl lg:text-4xl font-bold text-center ">What We Offer</h2>
        <div className="border w-56 mx-auto"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <div className="aspect-w-1 aspect-h-1">
          <img className="w-full h-full object-cover rounded-lg" src={img1} alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="w-full h-full object-cover rounded-lg" src={img2} alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="w-full h-full object-cover rounded-lg" src={img3} alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="w-full h-full object-cover rounded-lg" src={img4} alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="w-full h-full object-cover rounded-lg" src={img5} alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="w-full h-full object-cover rounded-lg" src={img6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Whatweoffer;
