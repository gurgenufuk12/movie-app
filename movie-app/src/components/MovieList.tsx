import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { Movie } from "../types";
import { useNavigate } from "react-router-dom";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const navigate = useNavigate();

  const handleRowClick = (imdbID: string) => {
    navigate(`/movie/${imdbID}`);
  };

  if (!movies.length) {
    return <Typography>No movies found.</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="movies table">
        <TableHead>
          <TableRow>
            <TableCell>Poster</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Release Date</TableCell>
            <TableCell>IMDb ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow
              key={movie.imdbID}
              hover
              style={{ cursor: "pointer" }}
              onClick={() => handleRowClick(movie.imdbID)}
            >
              <TableCell>
                <img
                  src={
                    movie.Poster !== "N/A" ? movie.Poster : "Image not found"
                  }
                  alt={movie.Title}
                  width="50"
                />
              </TableCell>
              <TableCell>{movie.Title}</TableCell>
              <TableCell>{movie.Year}</TableCell>
              <TableCell>{movie.imdbID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovieList;
