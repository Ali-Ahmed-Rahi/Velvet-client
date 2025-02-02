const googleMapsUrl =
  "https://www.google.com/maps/dir//Q5J6%2BC8X+Abdur+Rahman%E2%80%99s+residence,+Mollahpur+Union/@24.7816126,92.1588094,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3751c92a80920069:0x4e750e27ef064252!2m2!1d92.1608619!2d24.7811086!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D";

const Map = () => {
  return (
    <div className=" lg:mt-16 pb-20 lg:mb-0 pt-20">
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.418670263348!2d92.15828697619982!3d24.781113448426463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751c92a80920069%3A0x4e750e27ef064252!2sAbdur%20Rahman%E2%80%99s%20residence!5e0!3m2!1sen!2sbd!4v1728540806993!5m2!1sen!2sbd"
        className="w-full h-[450px]  rounded-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </div>
    <div className="text-center mt-5">
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        <button className="btn bg-green-700 hover:bg-green-500 text-white ">Get Directions</button>
      </a>
    </div>
  </div>
  );
};

export default Map;