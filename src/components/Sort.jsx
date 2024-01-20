import { PropTypes } from "prop-types"

export const Sort = ({ onSelectChange }) => {
  const handleChange = (event) => {
    onSelectChange(event.target.value)
  }


  return (
    <select className="w-32 bg-white p-2 rounded-lg" name="sort" id="sort" onChange={handleChange}>
      <option value="asc">asc</option>
      <option value="desc">desc</option>
    </select>
  )
}

Sort.propTypes = {
  onSelectChange: PropTypes.func
}