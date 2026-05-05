import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();

  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  // console.log(page);
  

  const handleChange = (pageNumber) => {
    const searchPharams = new URLSearchParams(search);
    searchPharams.set(`page`, pageNumber);
    // console.log(searchPharams);

    navigate(`${pathname}?${searchPharams}`);

    // console.log(`changed ${pageNumber}`);
  };

  return (
    <div className="mt-12 flex justify-end">
      <div className="join flex justify-between gap-3">
        {page > 1 ? (
          <button
            onClick={() => {
              let prevPage = page - 1;
              if (prevPage > page) prevPage === page;
              if (prevPage > 0) handleChange(prevPage);
            }}
            className="btn btn-xs sm:btn-md join-item"
          >
            Prev
          </button>
        ) : null}
        <div className="flex justify-between gap-4 items-center">
          {pages.map((items) => {
            return (
              <button
                onClick={() => handleChange(items)}
                className={`btn btn-xs sm:btn-md join-item ${items === page ? "bg-base-300 border-base-300" : ""}`}
                key={items}
              >
                {items}
              </button>
            );
          })}
        </div>
        {pageCount > page ? (
          <button
            onClick={() => {
              const currentPage = page + 1;

              if (currentPage <= pageCount) {
                handleChange(currentPage);
              }
            }}
            className="btn btn-xs sm:btn-md join-item"
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PaginationContainer;
