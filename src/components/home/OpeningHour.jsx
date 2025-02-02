const OpeningHour = () => {
  return (
    <div className="w-full text-black  py-10 space-y-2 px-5 bg-slate-200 font-semibold mt-10 p-4">
      <h2 className="text-2xl font-semibold">Opening Hours</h2>
      <p>Mon Closed</p>
      <div className="flex lg:justify-center items-center space-x-2">
        <p>Tue - Fri :</p>
        <p>17:00 - 23:00</p>
      </div>
      <div className="flex lg:justify-center items-center space-x-2">
        <p>Sat :</p>
        <p>17:00 - 23:00</p>
      </div>
      <div className="flex lg:justify-center items-center space-x-2">
        <p>Sun :</p>
        <p>15:00 - 22:00</p>
      </div>
    </div>
  );
};

export default OpeningHour;
