const Reviews = () => {
  return (
    <div>
      <div className="w-full text-black text-center py-10 space-y-2 ">
        <h2 className="font-bold text-3xl italic">Last reviews</h2>
        <div className="border w-14 mx-[104px] border-black"></div>
        <div className="space-y-5">
          <div className="flex justify-center items-center space-x-2">
            <h2 className="font-semibold">Mahbub Rahman </h2>
            <p className="text-xs">noted</p>
            <div className="rating w-20 ">
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-black"
                defaultChecked
              />
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <h2 className="font-semibold">Asia lacovone </h2>
            <p className="text-xs">noted</p>
            <div className="rating w-20 ">
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-black"
                defaultChecked
              />
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <h2 className="font-semibold">Bilal Rahman </h2>
            <p className="text-xs">noted</p>
            <div className="rating w-20 ">
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-black"
                defaultChecked
              />
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
              <input type="radio" name="rating-1" className="mask mask-star bg-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
