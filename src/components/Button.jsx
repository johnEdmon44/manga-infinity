import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../features/bookmarkSlice';
import { PropTypes } from "prop-types";

export const Button = ({ manga }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmark);

  const isAlreadyadded = bookmarks.some(bookmark => bookmark.mal_id === manga.mal_id);

  const handleClick = () => {  
    if(!isAlreadyadded) {
      dispatch(addBookmark(manga));
    } else {
      dispatch(removeBookmark(manga));
    }
  };

  return (
    <button onClick={handleClick}>
      {isAlreadyadded ? 'Remove from bookmark': "Add to bookmark"}
    </button>
  );
};


Button.propTypes = {
  manga: PropTypes.object.isRequired,
}
