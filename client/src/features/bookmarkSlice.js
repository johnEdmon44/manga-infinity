import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ✅ Fetch all bookmarks for the current logged-in user
export const fetchBookmarks = createAsyncThunk(
  'bookmark/fetchBookmarks',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/bookmarks`, {
        credentials: 'include',
      });

      const data = await res.json();
      if (!res.ok) return rejectWithValue(data);

      // Format data from backend to match frontend structure
      return data.bookmarks.map(bm => ({
        mal_id: bm.manga_id,
        title: bm.manga_title,
        images: { webp: { image_url: bm.cover_image } },
      }));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ✅ Add a bookmark both in backend and Redux state
export const addBookmarkAsync = createAsyncThunk(
  'bookmark/addBookmarkAsync',
  async (manga, { rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/bookmarks/add`, {  // 👈 add "/add"
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          mangaId: manga.mal_id,
          mangaTitle: manga.title,
          coverImage: manga.images.webp.image_url,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        return rejectWithValue(err);
      }

      return manga; // backend success → update state
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ✅ Remove bookmark in backend and Redux
export const removeBookmarkAsync = createAsyncThunk(
  'bookmark/removeBookmarkAsync',
  async (manga, { rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/bookmarks/remove`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ mangaId: manga.mal_id }),
      });

      if (!res.ok) {
        const err = await res.json();
        return rejectWithValue(err);
      }

      return manga;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: [],
  reducers: {
    setBookmarks: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookmarks.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(addBookmarkAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBookmarkAsync.fulfilled, (state, action) => {
        return state.filter(bm => bm.mal_id !== action.payload.mal_id);
      });
  },
});

export const { setBookmarks } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
