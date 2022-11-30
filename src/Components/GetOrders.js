import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function GetOrders() {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const orderData = await axios.get("http://localhost:8080/orders");
      console.log(orderData.data);
      setOrders(orderData.data);
    } catch (err) {
      return err;
    }
  };
  return (
    <div>
      <Link to="/">
        <button>Back to Overview</button>
      </Link>
      <button onClick={getAllOrders}>Get All Oders</button>
      {orders.map((order) => (
        <p key={order.id}>{order.id}</p>
      ))}
    </div>
  );
}
