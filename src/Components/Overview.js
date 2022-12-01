import { Link } from "react-router-dom";
import ".././style.css";

export default function Overview() {
  return (
    <div>
      <header>
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
      </header>
    </div>
  );
}
