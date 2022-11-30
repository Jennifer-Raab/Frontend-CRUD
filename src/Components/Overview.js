import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <div>
      <h1>Shoe Store</h1>
      <Link to={"/users"}>
        <button>Users</button>
      </Link>
      <Link to={"/orders"}>
        <button>Orders</button>
      </Link>
      <Link to={"/users/create"}>
        <button>Create new User</button>
      </Link>
    </div>
  );
}
