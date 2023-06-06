import React from 'react';
import './pagination.css';

const Pagination = ({
  users,
  totalPosts,
  userPerPage,
  currentPage,
  paginate,
  setUsers,
  usersToDelete,
  setUsersToDelete,
}) => {
  const pagesNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / userPerPage); i++) {
    pagesNumber.push(i);
  }

  const goToFirstPage = () => {
    paginate(1);
  };

  const goToPrevPage = () => {
    if (currentPage === 1) return;
    paginate(currentPage - 1);
  };

  const goToNextPage = () => {
    const lastPage = Math.ceil(totalPosts / userPerPage);
    if (currentPage === lastPage) return;
    paginate(currentPage + 1);
  };

  const goToLastPage = () => {
    paginate(Math.ceil(totalPosts / userPerPage));
  };

  const handleAllDelete = () => {
    setUsers(users.filter((user) => !usersToDelete.includes(user.id)));
    setUsersToDelete([]);
  };

  return (
    <div className="pagination-container">
      <button className="delete-btn" onClick={handleAllDelete}>
        Delete Selected
      </button>
      <nav className="pagination">
        <ul className="page-list">
          <li>
            <button className="page-button first-page" onClick={goToFirstPage}>
              <i className="fas fa-angle-double-left"></i>
            </button>
          </li>
          <li>
            <button className="page-button prev-page" onClick={goToPrevPage}>
              <i className="fas fa-angle-left"></i>
            </button>
          </li>
          {pagesNumber.map((number) => (
            <li key={number}>
              <button
                className={`page-button ${
                  number === currentPage ? 'active' : ''
                }`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button className="page-button next-page" onClick={goToNextPage}>
              <i className="fas fa-angle-right"></i>
            </button>
          </li>
          <li>
            <button className="page-button last-page" onClick={goToLastPage}>
              <i className="fas fa-angle-double-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
