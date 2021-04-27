import Users from "../Users/Users";
import Pages from "./Pages";

import React, { useState, useEffect } from "react";
import { getUsers } from "../../services/user";

export default function Pagination() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUserssPerPage] = useState(5);

  useEffect(() => {
    async function usersList() {
      const response = await await getUsers();
      setUsers(response);
    }

    usersList();
  }, []);

  // Get Current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Users users={currentUsers} />
      <Pages
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </>
  );
}
