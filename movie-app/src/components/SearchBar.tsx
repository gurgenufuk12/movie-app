import React, { useState } from "react";
import { TextField, Button, Grid2 } from "@mui/material";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("Pokemon");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Grid2
      container
      display={"grid"}
      gridTemplateColumns={"1fr auto"}
      gap={2}
      marginBottom={"1rem"}
    >
      <TextField
        fullWidth
        label="Search Movies"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSearch}
      >
        Search
      </Button>
    </Grid2>
  );
};

export default SearchBar;
