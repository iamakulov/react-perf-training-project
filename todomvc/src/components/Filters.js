import React from 'react';
import FilterLink from '../containers/FilterLink';
import './Filters.css';

const Filters = ({ filters }) => (
  <ul className="filters">
    {filters.map(filter => (
      <li key={filter.kind}>
        <FilterLink active={filter.active} filter={filter.kind}>
          {filter.label}
        </FilterLink>
      </li>
    ))}
  </ul>
);

export default Filters;
