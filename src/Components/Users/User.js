import React from "react";

export default function User(props) {
  const { user } = props;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.Position}</td>
    </tr>
  );
}
