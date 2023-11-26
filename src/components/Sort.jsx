import { PropTypes } from "prop-types"

export const Sort = ({ onSelectChange }) => {
  const handleChange = (event) => {
    onSelectChange(event.target.value)
  }


  return (
    <select className="w-20" name="sort" id="sort" onChange={handleChange}>
      <option value="asc">asc</option>
      <option value="desc">desc</option>
    </select>
  )
}

Sort.propTypes = {
  onSelectChange: PropTypes.func
}