import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link exact to="/" className="link">
            {" "}
            Home{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/users" className="link">
            {" "}
            Users{" "}
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
