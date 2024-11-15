import { FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import BuildingCard from "../../components/card/BuildingCard";
import { useEffect, useState } from "react";
import { buildingCardData } from "../../data/data";

const Buildings = () => {
  const location = useLocation();
  const [page, setPage] = useState(1); // Current page number
  const [limit] = useState(6); // Number of items per page

  // Fetch buildings with the current page and limit

  // Refetch when location changes
  // useEffect(() => {
  //   refetch();
  // }, [location]);

  // Handle page change
  const handleNextPage = () => {
    if (page < data?.totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    // <div className=" animate-slide-up">
    <div className="bg-white rounded-2xl shadow-md border-[1px] p-5">
      <div className="mb-4 flex justify-between items-center">
        <h4 className="text-[20px] font-[600] leading-[32px]">All Buildings</h4>
        <Link to="/add-building">
          <FaPlus className="text-blue-500 hover:text-blue-600 text-2xl" />
        </Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 ">
        {buildingCardData.map((id, building) => (
          <Link to={`/buildings/building`} key={id}>
            <BuildingCard data={building} />
          </Link>
        ))}
      </div>
      <div className="pagination-controls mt-8 flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className={`px-5 py-3 rounded-l-lg transition-colors duration-200 ${
              page === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#A449EB] text-white hover:bg-blue-600"
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* Page Number Group */}
          {/* {Array.from({ length: data?.totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`px-5 py-3 rounded-sm text-sm font-medium  transition-colors duration-200 ${
                  pageNumber === page
                    ? "bg-[#A449EB] text-white"
                    : "bg-white text-blue-500 border border-blue-500 hover:bg-blue-100"
                }`}
              >
                {pageNumber}
              </button>
            ))}
             */}
          {/* <button
              onClick={handleNextPage}
              disabled={page >= data?.totalPages}
              className={`px-5 py-3 rounded-r-lg transition-colors duration-200 ${
                page >= data?.totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#A449EB] text-white hover:bg-blue-600"
              }`}
            >
              <FaChevronRight />
            </button> */}
        </div>
        {/* <span className="text-gray-700 font-semibold mt-2 ">
            Page {page} of {data?.totalPages}
          </span> */}
      </div>
    </div>
    // </div>
  );
};

export default Buildings;
