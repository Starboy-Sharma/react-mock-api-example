import User from "./User";
import { Link } from "react-router-dom";

export default function Users({ users }) {
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
      <br />

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
