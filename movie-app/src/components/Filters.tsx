import React, { useState } from "react";
import {
  Grid2,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

interface FiltersProps {
  onFilter: (filters: { year?: string; type?: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const handleApplyFilters = () => {
    onFilter({ year, type });
  };

  const handleResetFilters = () => {
    setYear("");
    setType("");
    onFilter({});
  };

  return (
    <Grid2
      display={"grid"}
      gridTemplateColumns={"1fr 1fr"}
      gap={2}
      marginBottom={"1rem"}
    >
      <TextField
        fullWidth
        label="Release Year"
        variant="outlined"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

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

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleApplyFilters}
      >
        Apply
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={handleResetFilters}
      >
        Reset
      </Button>
    </Grid2>
  );
};

export default Filters;
