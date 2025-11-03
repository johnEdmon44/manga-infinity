import { PropTypes } from "prop-types"

export const OrderBy = ({ onSelectChange }) => {
  const handleChange = (event) => {
    onSelectChange(event.target.value)
  }


  return (
    <select className="w-32 bg-white p-2 rounded-lg" name="orderBy" id="orderBy" onChange={handleChange}>
      <option value="popularity">popularity</option>
      <option value="mal_id">newest</option>
    </select>
  )
}

OrderBy.propTypes = {
  onSelectChange: PropTypes.func
};