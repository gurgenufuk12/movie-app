import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, clearSelectedMovie } from '../store/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import MovieDetails from '../components/MovieDetails';
import { CircularProgress, Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieDetailPage: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { selectedMovie, loading, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchMovieDetails(imdbID));
    }
    return () => {
      dispatch(clearSelectedMovie());
    };
  }, [dispatch, imdbID]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleBack} style={{ marginBottom: '1rem' }}>
        Back
      </Button>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </div>
  );
};

export default MovieDetailPage;
