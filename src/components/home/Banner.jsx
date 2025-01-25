import img from "../../assets/home/04.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <img className="w-full h-screen object-cover " src={img} alt="" />
      <div className="text-white  absolute left-3 bottom-24 space-y-1 lg:hidden block">
        <h2 className="text-5xl font-semibold text-yellow-500 italic">Velvet Spoon</h2>
        <p  className="">Authentic Japanese Cuisine</p>
        <p  className="">123 Cherry Blossom Lane</p>
        <p  className="">Tokyo Heights, JA 45678</p>
      </div>
    </div>
  );
};

export default Banner;