import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/moviesSlice";
import { RootState, AppDispatch } from "../store";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import MovieList from "../components/MovieList";
import { CircularProgress, Alert } from "@mui/material";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, totalResults, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  const [searchTerm, setSearchTerm] = useState("Pokemon");
  const [filters, setFilters] = useState<{ year?: string; type?: string }>({});
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(
      fetchMovies({ search: searchTerm, page: currentPage, ...filters })
    );
  }, [dispatch, searchTerm, currentPage, filters]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleFilter = (newFilters: { year?: string; type?: string }) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Filters onFilter={handleFilter} />
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && <MovieList movies={movies} />}
      {!loading && !error && totalResults > 10 && (
        <Pagination
          currentPage={currentPage}
          totalResults={totalResults}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default HomePage;
