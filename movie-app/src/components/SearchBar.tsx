import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('Pokemon');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Grid container spacing={2} alignItems="center" style={{ marginBottom: '1rem' }}>
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          label="Search Movies"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button variant="contained" color="primary" fullWidth onClick={handleSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
