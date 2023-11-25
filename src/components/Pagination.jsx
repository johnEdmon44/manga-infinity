import { PropTypes } from "prop-types";

export const Pagination = ({ page, setPage, totalPage }) => {
  const handlePrev = () => {
    setPage(page - 1);
  }

  const handleNext = () => {
    setPage(page + 1);
  }
  return (
    <div>
      {page > 1 && <button onClick={handlePrev}>prev</button>}
      <p>{page}</p>
      {page < totalPage && <button onClick={handleNext}>next</button> }
    </div>
  )
}


Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  totalPage: PropTypes.number,
}