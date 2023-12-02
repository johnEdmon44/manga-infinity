import { useState } from "react"
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export const SearchBar = ({ setSearchList }) => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery") || "");

  const searchInput = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSearch = () => {
    if (typeof setSearchList === 'function') {
      setSearchList(true);
    }

    localStorage.setItem("searchQuery", searchQuery);
    setSearchQuery("");
  }

  return (
    <div>
      <input
        className="border border-gray-300 rounded-lg p-1 mr-5"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={searchInput}
        required
      />
      
      <Link className="cursor-pointer text-gray-500" to={`/browse/${searchQuery}`} onClick={handleSearch} >Search</Link>
    </div>
  )
}


SearchBar.propTypes = {
  setSearchList: PropTypes.func,
}