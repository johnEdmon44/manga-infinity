import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from '../features/bookmarkSlice';

export default configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});