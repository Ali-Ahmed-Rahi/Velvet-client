import {  useEffect, useState } from "react";
import Table from "../components/order/Table";

const Order = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reservetable")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="text-center pt-20 text-white">
      <h1 className="text-3xl font-semibold ">Your Orders</h1>
      <div>
        {
        data.map(booked=><Table key={data._id} booked={booked}></Table>)
        }
        </div>
    </div>
  );
};

export default Order;
