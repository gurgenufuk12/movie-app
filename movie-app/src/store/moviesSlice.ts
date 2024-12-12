import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movie, MovieDetail, MoviesResponse } from "../types";
import { fetchMoviesAPI, fetchMovieDetailsAPI } from "../api/omdbApi";

interface MoviesState {
  movies: Movie[];
  totalResults: number;
  loading: boolean;
  error: string | null;
  selectedMovie: MovieDetail | null;
}

const initialState: MoviesState = {
  movies: [],
  totalResults: 0,
  loading: false,
  error: null,
  selectedMovie: null,
};

export const fetchMovies = createAsyncThunk<
  MoviesResponse,
  { search: string; page: number; year?: string; type?: string }
>("movies/fetchMovies", async (params) => {
  const { search, page, year, type } = params;
  const response = await fetchMoviesAPI(search, page, year, type);
  return response;
});

export const fetchMovieDetails = createAsyncThunk<MovieDetail, string>(
  "movies/fetchMovieDetails",
  async (imdbID) => {
    const response = await fetchMovieDetailsAPI(imdbID);

    return response;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearSelectedMovie(state) {
      state.selectedMovie = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.Search;
      state.totalResults = parseInt(action.payload.totalResults, 10);
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch movies";
    });

    builder.addCase(fetchMovieDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedMovie = action.payload;
    });
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch movie details";
    });
  },
});

export const { clearSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
