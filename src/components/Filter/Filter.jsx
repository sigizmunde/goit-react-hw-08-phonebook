import React from 'react';
import { Label } from './Filter.styled';
import PropTypes from 'prop-types';

function Filter({ onChange: onFilterChange }) {
  return (
    <Label>
      Find contacts by name
      <input onChange={onFilterChange} />
    </Label>
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
