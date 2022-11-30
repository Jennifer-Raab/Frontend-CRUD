import { useState } from "react";
import { useParams } from "react-router-dom";

export default function DeleteSingleUser() {
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const { id } = useParams();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${apiUrl}/users/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          setDeleteSuccess(true);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Single User</button>
      {deleteSuccess ? <p>User Successfully Deleted!</p> : ""}
    </div>
  );
}
