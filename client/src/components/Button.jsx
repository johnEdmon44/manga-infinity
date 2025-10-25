import { useDispatch, useSelector } from 'react-redux';
import { addBookmarkAsync, removeBookmarkAsync } from '../features/bookmarkSlice';
import PropTypes from 'prop-types';

export const Button = ({ manga }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmark);
  const isAlreadyAdded = bookmarks.some(bm => bm.mal_id === manga.mal_id);

  const handleClick = () => {
    if (isAlreadyAdded) {
      dispatch(removeBookmarkAsync(manga));
    } else {
      dispatch(addBookmarkAsync(manga));
    }
  };

  return (
    <button
      className={`${isAlreadyAdded ? 'bg-red-600' : 'bg-green-600'} text-white font-bold ml-3 mt-1 p-1 rounded-md`}
      onClick={handleClick}
    >
      {isAlreadyAdded ? 'Remove from bookmark' : 'Add to bookmark'}
    </button>
  );
};


Button.propTypes = {
  manga: PropTypes.shape({
    mal_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      webp: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};