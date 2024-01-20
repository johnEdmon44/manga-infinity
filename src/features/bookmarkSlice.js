import { createSlice } from '@reduxjs/toolkit';

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('bookmarks', JSON.stringify(state));
     },
     removeBookmark: (state, action) => {
      state = state.filter(bookmark => bookmark.mal_id !== action.payload.mal_id);
      localStorage.setItem('bookmarks', JSON.stringify(state));
     }
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;