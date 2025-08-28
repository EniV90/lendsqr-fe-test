import previous from "../../assets/icons/prev btn.svg";
import next from "../../assets/icons/next btn.svg";
import arrowDown from "../../assets/icons/np_arrowDown 2.svg";
import { useState } from "react";
import type { PaginationProps } from "../../types";
import "./pagination.scss";


export default function Pagination(props: PaginationProps) {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
  const [numberPaginated, setNumberPaginated] = useState<number>(
    props.currentPage
  );

  // Function to get visible page numbers with ellipsis
  const getVisiblePages = (): (number | string)[] => {
    const visiblePages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Show all pages if total is 5 or less
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      // Always show first page
      visiblePages.push(1);

      if (props.currentPage <= 3) {
        // Show 1, 2, 3, ..., last two pages
        visiblePages.push(2);
        visiblePages.push(3);
        visiblePages.push("...");
        visiblePages.push(totalPages - 1);
        visiblePages.push(totalPages);
      } else if (props.currentPage >= totalPages - 2) {
        // Show first page, ..., last three pages
        visiblePages.push("...");
        visiblePages.push(totalPages - 2);
        visiblePages.push(totalPages - 1);
        visiblePages.push(totalPages);
      } else {
        // Show first, ..., current-1, current, current+1, ..., last two
        visiblePages.push("...");
        visiblePages.push(props.currentPage - 1);
        visiblePages.push(props.currentPage);
        visiblePages.push(props.currentPage + 1);
        visiblePages.push("...");
        visiblePages.push(totalPages - 1);
        visiblePages.push(totalPages);
      }
    }

    return visiblePages;
  };

  const handleNext = (): void => {
    if (props.currentPage >= totalPages) {
      setButtonDisabled(true);
    } else {
      props.setCurrentPage(props.currentPage + 1);
      setNumberPaginated(props.currentPage + 1);
    }
  };

  const handlePrevious = (): void => {
    if (props.currentPage <= 1) {
      setButtonDisabled(true);
    } else {
      props.setCurrentPage(props.currentPage - 1);
      setNumberPaginated(props.currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <div className="pagination__details">
        <p>Showing: </p>
        <div className="down">
          {props.currentPage}
          <img
            src={arrowDown}
            alt=""
            style={{
              marginLeft: "10px",
              marginBottom: "-5px",
              fontSize: "20px",
            }}
          />
        </div>
        out of
        <p>{props.totalItems}</p>
      </div>
      <div className="pagination-numbers">
        <img
          src={previous}
          onClick={handlePrevious}
          disabled={buttonDisabled}
          alt="Previous page"
        />
        <ul>
          {getVisiblePages().map((page: number | string, index: number) => (
            <li
              key={index}
              onClick={() => {
                if (typeof page === "number") {
                  props.paginate(page);
                  setNumberPaginated(page);
                }
              }}
              className={`page-item ${
                typeof page === "string" ? "ellipsis" : ""
              }`}
              style={{
                cursor: typeof page === "string" ? "default" : "pointer",
              }}
            >
              <a
                className={`${
                  typeof page === "number" && numberPaginated === page
                    ? "active"
                    : "page-link"
                }`}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
        <img
          src={next}
          onClick={handleNext}
          disabled={buttonDisabled}
          style={{ marginLeft: "20px" }}
          alt="Next page"
        />
      </div>
    </div>
  );
}
