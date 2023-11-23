import { createSlice } from '@reduxjs/toolkit';

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      state.push(action.payload);
    },
    removeBookmark: (state, action) => {
      return state.filter(bookmark => bookmark.mal_id !== action.payload.mal_id);
    }
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;