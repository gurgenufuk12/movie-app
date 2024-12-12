import axios from "axios";
import { MoviesResponse, MovieDetail } from "../types";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const fetchMoviesAPI = async (
  search: string,
  page: number,
  year?: string,
  type?: string
): Promise<MoviesResponse> => {
  const response = await axios.get("https://www.omdbapi.com/", {
    params: {
      apikey: API_KEY,
      s: search,
      page,
      y: year,
      type,
    },
  });
  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }
  return response.data;
};

export const fetchMovieDetailsAPI = async (
  imdbID: string
): Promise<MovieDetail> => {
  const response = await axios.get("https://www.omdbapi.com/", {
    params: {
      apikey: API_KEY,
      i: imdbID,
      plot: "full",
    },
  });
  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }
  return response.data;
};
