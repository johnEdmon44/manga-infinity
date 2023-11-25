import { useFetchGenre } from "../hooks/useFetchGenre"
import { PropTypes } from "prop-types"

export const SelectGenre = ({ onSelectChange } ) => {
  const genres = useFetchGenre();
  
  if (!genres) {
    return <h1>Loading..</h1>
  }

  const handleChange = (event) => {
    onSelectChange(Number(event.target.value))
  }

  return (
    <select id="selectGenres" name="selectGenres" onChange={handleChange}>
      {genres.data.map(genre => (
        <option key={genre.mal_id} value={genre.mal_id}>{genre.name}</option>
      ))}
    </select>
  )
}

SelectGenre.propTypes = {
  onSelectChange: PropTypes.func.isRequired
}

