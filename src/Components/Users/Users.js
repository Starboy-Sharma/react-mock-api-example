import React, { useState, useEffect } from "react";
import { getUsers } from "../../services/user";
import User from "./User";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log("Oh I am mounting");

    async function usersList() {
      const response = await await getUsers();
      // console.log(response);
      setUsers(response);
    }

    usersList();
  }, []);

  return (
    <div className="list">
      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => <User key={index} user={user} />)
          ) : (
            <tr>
              <td colSpan="3"> Loading... </td>
            </tr>
          )}
        </tbody>
      </table>
      <Link
        to="/save-user"
        className="btn-floating btn-medium waves-effect waves-light red"
      >
        <i className="material-icons">add</i>
      </Link>

      <div className="fixed-action-btn">
        <Link
          to="/save-user"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}
