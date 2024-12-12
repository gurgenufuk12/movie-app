import React, { useState } from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

interface FiltersProps {
  onFilter: (filters: { year?: string; type?: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {
  const [year, setYear] = useState('');
  const [type, setType] = useState('');

  const handleApplyFilters = () => {
    onFilter({ year, type });
  };

  const handleResetFilters = () => {
    setYear('');
    setType('');
    onFilter({});
  };

  return (
    <Grid container spacing={2} alignItems="center" style={{ marginBottom: '1rem' }}>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Release Year"
          variant="outlined"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="type-select-label">Type</InputLabel>
          <Select
            labelId="type-select-label"
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Type"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="movie">Movie</MenuItem>
            <MenuItem value="series">TV Series</MenuItem>
            <MenuItem value="episode">Episode</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth onClick={handleApplyFilters}>
              Apply
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" color="secondary" fullWidth onClick={handleResetFilters}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Filters;
