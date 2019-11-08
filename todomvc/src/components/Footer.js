import React from 'react';
import PropTypes from 'prop-types';
import FilterLink from '../containers/FilterLink';
import FooterCount from '../components/FooterCount';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constants/TodoFilters';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed',
};

const Footer = ({
  activeCount,
  visibilityFilter,
  completedCount,
  onClearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <FooterCount getCount={() => activeCount} />
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter => (
          <li key={filter}>
            <FilterLink active={filter === visibilityFilter} filter={filter}>
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
