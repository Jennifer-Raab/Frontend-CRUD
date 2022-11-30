import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function GetUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const getAllUsers = await axios
        .get("http://localhost:8080/users")
        .then((response) => {
          setUsers(response.data);
        });
      // setUsers(getAllUsers.data); Axios hat auch ohne .then funktioniert!
      return getAllUsers;
    } catch (error) {
      return { error };
    }
  };
  return (
    <div>
      <Link to="/">
        <button>Back to Overview</button>
      </Link>
      <button onClick={fetchUsers}> Get All Users</button>
      {users.map((user) => {
        return (
          <Link key={user.id} to={`/users/${user.id}`}>
            <p>{user.first_name}</p>
          </Link>
        );
      })}
    </div>
  );
}
