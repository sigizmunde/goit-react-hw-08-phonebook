import React from 'react';
// import { Label } from './Filter.styled';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

function Filter({ onChange: onFilterChange }) {
  return (
    <TextField
      label="Find contacts by name"
      variant="outlined"
      onChange={onFilterChange}
    />
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
