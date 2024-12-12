import React from "react";
import { MovieDetail } from "../types";
import { Grid2, Typography } from "@mui/material";

interface MovieDetailsProps {
  movie: MovieDetail;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <Grid2 container display={"grid"} gridTemplateColumns={"1fr 2fr"} gap={2}>
      <Grid2>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          style={{ width: "100%" }}
        />
      </Grid2>
      <Grid2>
        <Typography variant="h4" gutterBottom>
          {movie.Title} ({movie.Year})
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Genre:</strong> {movie.Genre}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Director:</strong> {movie.Director}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Cast:</strong> {movie.Actors}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Runtime:</strong> {movie.Runtime}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>IMDb Rating:</strong> {movie.imdbRating}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {movie.Plot}
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default MovieDetails;
