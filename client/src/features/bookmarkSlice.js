import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch bookmarks for the current logged-in user
export const fetchBookmarks = createAsyncThunk(
  'bookmark/fetchBookmarks',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/bookmarks`, {
        credentials: 'include',
      });

      
      const data = await res.json();
      console.log("📚 fetchBookmarks response:", data);

      // Format data from backend to match frontend structure
      return data.bookmarks.map(bm => ({
        mal_id: bm.mal_id,
        title: bm.manga_title,
        images: { webp: { image_url: bm.cover_image } },
        genres: [], // prevent undefined
      }));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addBookmarkAsync = createAsyncThunk(
  'bookmark/addBookmarkAsync',
  async (manga, { rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/bookmarks/add`, {  // 👈 add "/add"
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

      return manga; 
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


export const removeBookmarkAsync = createAsyncThunk(
  'bookmark/removeBookmarkAsync',
  async (manga, { rejectWithValue }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/bookmarks/remove`, {
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
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookmarks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookmarks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBookmarks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addBookmarkAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeBookmarkAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(bm => bm.mal_id !== action.payload.mal_id);
      });
  },
});

export const { setBookmarks } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;