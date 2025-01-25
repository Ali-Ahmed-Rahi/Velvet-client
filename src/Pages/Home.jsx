import Aboutus from "../components/home/Aboutus";
import Banner from "../components/home/Banner";
import Reviews from "../components/home/Reviews";
import Whatweoffer from "../components/home/Whatweoffer";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Whatweoffer></Whatweoffer>
      <Aboutus></Aboutus>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;