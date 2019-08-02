import React from 'react';
import './search-box.styles.css';

// functional component, doesn't necessarily need lifecycle methods or state
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)