const GetMap = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/dir//2+Railway+St+Maryborough+Portlaoise+Co.+Laois,+R32+PWE5,+Ireland/@53.0346614,-7.2988864,1248m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x485d0dcb81f50185:0x534ca63911b6c8de!2m2!1d-7.2988864!2d53.0346614?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D";

  return (
    <div className="">
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.8488820332545!2d-7.301466687396362!3d53.034661372084614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485d0dcb81f50185%3A0x534ca63911b6c8de!2s2%20Railway%20St%2C%20Maryborough%2C%20Portlaoise%2C%20Co.%20Laois%2C%20R32%20PWE5%2C%20Ireland!5e1!3m2!1sen!2sbd!4v1738508705796!5m2!1sen!2sbd"
          className="w-full h-96 "
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
      <div className="text-center mt-5">
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <button className="btn bg-green-700 hover:bg-green-500 text-white ">
            Get Directions
          </button>
        </a>
      </div>
    </div>
  );
};

export default GetMap;
