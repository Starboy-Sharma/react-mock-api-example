export default function Pages({ usersPerPage, totalUsers, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="waves-effect">
          <a onClick={() => paginate(number)} href="#!">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}
