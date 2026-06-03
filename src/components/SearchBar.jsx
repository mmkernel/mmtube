import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextSearch = searchTerm.trim();

    if (nextSearch) {
      navigate(`/search/${encodeURIComponent(nextSearch)}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      className='search-bg'
      component='form'
      onSubmit={handleSubmit}
      sx={{
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        border: '1px solid rgba(255, 255, 255, 0.14)',
        borderRadius: 2,
        boxShadow: 'none',
        display: 'flex',
        height: 46,
        maxWidth: 560,
        overflow: 'hidden',
        px: 1,
        width: { xs: '100%', md: 460 },
      }}
    >
      <InputBase
        className='search-bar'
        placeholder='Search videos'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        inputProps={{ 'aria-label': 'Search videos' }}
        sx={{ color: 'white', flex: 1, px: 1 }}
      />
      <IconButton type='submit' sx={{ color: '#66FCF1' }} aria-label='Search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
