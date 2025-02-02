import Aboutus from "../components/home/Aboutus";
import Address from "../components/home/Address";
import Banner from "../components/home/Banner";
import GetMap from "../components/home/GetMap";
import OpeningHour from "../components/home/OpeningHour";
import Reviews from "../components/home/Reviews";
import Whatweoffer from "../components/home/Whatweoffer";


const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Aboutus></Aboutus>
      <Reviews></Reviews>
      <Whatweoffer></Whatweoffer>
      <OpeningHour></OpeningHour>
      <GetMap></GetMap>
      <Address></Address>
      
    </div>
  );
};

export default Home;