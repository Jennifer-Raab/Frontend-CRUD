import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteSingleUser from "./DeleteSingleUser";

export default function GetSingleUser() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });
  const [edit, setEdit] = useState(false);

  const { id } = useParams();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/users/${id}`)
      .then((response) => response.json())
      .then((data) =>
        setUser({
          firstName: data[0].first_name,
          lastName: data[0].last_name,
          age: data[0].age,
        })
      )
      .catch((err) => console.log(err));
  }, [id, apiUrl]);
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await fetch(`${apiUrl}/users/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: user.firstName,
          last_name: user.lastName,
          age: user.age,
        }),
      });
      console.log("Updated User", updatedUser);
      if (updatedUser.status === 201) {
        setEdit(false);
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {user && (
        <h1>
          {user.firstName} {user.lastName}
        </h1>
      )}
      <Link to="/">
        <button>Back to Overview</button>
      </Link>
      <Link to="/users">
        <button>Back to All Users</button>
      </Link>

      {edit ? (
        <form onSubmit={handleEdit}>
          <label>
            First Name
            <input
              type="text"
              value={user.firstName}
              onChange={(e) => {
                setUser({
                  firstName: e.target.value,
                  lastName: user.lastName,
                  age: user.age,
                });
              }}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              value={user.lastName}
              onChange={(e) => {
                setUser({
                  firstName: user.firstName,
                  lastName: e.target.value,
                  age: user.age,
                });
              }}
            />
          </label>
          <label>
            Age
            <input
              type="number"
              value={user.age}
              onChange={(e) => {
                setUser({
                  firstName: user.firstName,
                  lastName: user.lastName,
                  age: e.target.value,
                });
              }}
            />
          </label>
          <button type="submit">Submit Changes</button>
        </form>
      ) : (
        <button
          onClick={() => {
            setEdit(true);
          }}
        >
          Edit Personal Data
        </button>
      )}
      <DeleteSingleUser />
    </div>
  );
}
