import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

interface PaginationProps {
  currentPage: number;
  totalResults: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalResults, onChange }) => {
  const totalPages = Math.ceil(totalResults / 10);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={handleChange}
      color="primary"
      sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
    />
  );
};

export default Pagination;
