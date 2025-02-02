import Swal from "sweetalert2";

const Reserve = () => {
  const handlereserve = (e) => {
    e.preventDefault();
    const from = e.target;
    const number = from.number.value;
    const datetime = from.datetime.value;
    const currency = from.currency.value;
    const name = from.name.value;
    const phoneNumber = from.phoneNumber.value;
    const email = from.email.value;
    const reserve = { number, datetime, currency, name, phoneNumber, email };
    console.log(reserve);

    fetch("http://localhost:5000/reserveTable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserve),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank You For Your Reservation",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        from.reset();
      });
  };

  return (
    <div >
      <div className="bg-slate-200 border p-10  lg:shadow-2xl lg:w-5/6 w-full  lg:mt-5  text-black mb-10 lg:mb-0 pt-20">
        <h2 className="text-2xl font-bold text-center mb-4"> Velvet Spoon</h2>
        <form onSubmit={handlereserve} className="w-full">
          <div className=" grid lg:grid-cols-2 gap-6 mb-4">
            {/* Name Input */}
            <div>
              <label className="block font-medium mb-2" htmlFor="name">
                Number Of People *
              </label>
              <input
                id="number"
                type="number"
                placeholder="Number"
                className="w-full p-3 border border-gray-300 bg-white  rounded-md"
              />
            </div>
            {/* datetime-local Input */}
            <div>
              <label
                className="block  font-medium mb-2"
                htmlFor="datetime-local"
              >
                Choose The Date & Time *
              </label>
              <input
                id="datetime"
                type="datetime-local"
                placeholder="Date"
                className="w-full p-3 border border-gray-300 rounded-md bg-white  text-black"
              />
            </div>
            {/* Lunch Or Dinner */}
            <div>
              <label className="block font-medium mb-2 b" htmlFor="supplier">
                Lunch Or Dinner *
              </label>
              <select
                id="currency"
                name="currency"
                aria-label="Currency"
                className="w-full p-3 border border-gray-300 text-white rounded-md bg-white "
              >
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>
            {/* name Input */}
            <div>
              <label className="block  font-medium mb-2" htmlFor="name">
                Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 bg-white  rounded-md"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block mb-2 font-medium " htmlFor="taste">
                Phone Num *
              </label>
              <div className="flex items-center text-black border rounded-md">
                {/* Country code dropdown */}
                <div className=" bg-white  p-3 rounded-l-lg">
                  <select className=" outline-none bg-white ">
                    <option value="US">US</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                  </select>
                </div>
                {/* Input field */}
                <input
                  id="phoneNumber"
                  type="number"
                  className="flex-1 p-3 rounded-r-lg bg-white "
                  placeholder="+123-456-7890"
                />
              </div>
            </div>
            {/* Email Input */}
            <div>
              <label className="block  font-medium mb-2" htmlFor="details">
                Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 bg-white  rounded-md"
              />
            </div>
            {/* Photo Input */}
            <div className="lg:col-span-2">
              <label className="block  font-medium mb-2" htmlFor="details">
                Massage
              </label>
              <p className="">
                <textarea
                  rows="3"
                  className="w-full p-3 border border-gray-300 bg-white  rounded-md"
                ></textarea>
              </p>
            </div>
          </div>
          <div className="mx-auto">
          <button
            type="submit"
            className=" bg-white text-black text-lg font-medium py-3 rounded-md mx-auto hover:bg-white w-full"
          >
            Finish
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reserve;
