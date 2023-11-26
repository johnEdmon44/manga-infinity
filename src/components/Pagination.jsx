import { PropTypes } from "prop-types";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Pagination = ({ page, setPage, totalPage }) => {
  const handlePrev = () => {
    setPage(page - 1);
  }

  const handleNext = () => {
    setPage(page + 1);
  }
  return (
    <div className="flex justify-center pb-5 gap-5 mt-10 ">
      {page > 1 && <button className="bg-sky-900 rounded-md hover:bg-sky-950" onClick={handlePrev}>
          <FontAwesomeIcon className="px-7 pt-1" icon={faArrowLeft} style={{ color: "#ffffff" }} />
        </button>}

      <p className="font-bold text-lg">{page}</p>

      {page < totalPage && <button className="bg-sky-900 rounded-md hover:bg-sky-950" onClick={handleNext}>
          <FontAwesomeIcon className="px-7 pt-1" icon={faArrowRight} style={{ color: "#ffffff" }} />
        </button> }
    </div>
  )
}


Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  totalPage: PropTypes.number,
}