import React, { useState, useEffect } from "react";
import tab from "../../assets/images/Layer_x0020_1.png";
import { users } from "../db";
import { Link } from "react-router-dom";

const UserListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(() =>
    getInitialUsersPerPage()
  );

  const multipliedUsers = Array.from({ length: 100 }, () => users).flat();

  const totalUsers = multipliedUsers.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setUsersPerPage(getInitialUsersPerPage());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getInitialUsersPerPage() {
    const width = window.innerWidth;
    if (width >= 992) {
      return 25;
    } else if (width >= 768) {
      return 15;
    } else {
      return 5;
    }
  }

  const getPageNumbers = () => {
    const maxPagesToShow = 3;
    const ellipsis = "...";

    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    const adjustedStartPage = Math.max(1, endPage - maxPagesToShow + 1);

    let pageNumbers = [];
    for (let i = adjustedStartPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (adjustedStartPage > 2) {
      pageNumbers = [1, ellipsis, ...pageNumbers];
    }

    if (endPage < totalPages) {
      pageNumbers.push(ellipsis, totalPages);
    }

    return pageNumbers;
  };

  const getUsersForCurrentPage = () => {
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    return multipliedUsers.slice(startIndex, endIndex);
  };

  return (
    <div className="container mx-auto px-5 md:px-0">
      <div className="flex justify-center">
        <img src={tab} alt="" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-20">
        {getUsersForCurrentPage().map((user) => (
          <div key={user.id} className="mb-6 mx-auto w-full">
            <Link to={`/user/${user.id}`}>
              <img src={user.image} alt={user.name} className="w-full" />
              <p className="pt-3 pb-2">{user.name}</p>
            </Link>
            <Link to={`/user/${user.id}`}>
              <button className="text-primary">{user.text}</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-5">
        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(pageNumber)}
            className={`bg-white rounded text-tertiary-dark w-7 h-7 mx-2 ${
              pageNumber === currentPage ? "pagination-bgr" : ""
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserListPage;
