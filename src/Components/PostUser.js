import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PostUser() {
  const [createdUser, setCreatedUser] = useState({});

  const apiUrl = process.env.REACT_APP_API_URL;
  const createUser = (e) => {
    e.preventDefault();

    console.log(e.target.firstName.value);

    const newUser = {
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      age: e.target.age.value,
    };
    axios
      .post(`${apiUrl}/users`, newUser)
      .then((res) => {
        if (res.status === 201) {
          setCreatedUser({
            firstName: res.data[0].first_name,
            lastName: res.data[0].last_name,
            active: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <label id="firstName">First Name</label>
        <input id="firstName" type="text" placeholder="First Name" />
        <label id="lastName"> Last Name</label>
        <input id="lastName" type="text" placeholder="Last Name" />
        <label id="age"> Age</label>
        <input id="age" type="number" placeholder="Age" />
        <button type="submit"> Create User</button>
      </form>
      <Link to="/">
        <button>Back to Overview</button>
      </Link>
      {createdUser.active ? (
        <div>
          <h3>User Successfully Created</h3>
          <p>
            Welcome {createdUser.firstName} {createdUser.lastName}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
