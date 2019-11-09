import React from 'react';
import PropTypes from 'prop-types';
import FooterCount from '../components/FooterCount';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constants/TodoFilters';
import Filters from './Filters';

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
  const getCount = React.useCallback(() => activeCount, [activeCount]);

  const filters = React.useMemo(
    () =>
      Object.keys(FILTER_TITLES).map(filter => ({
        active: filter === visibilityFilter,
        kind: filter,
        label: FILTER_TITLES[filter],
      })),
    [visibilityFilter],
  );

  return (
    <footer className="footer">
      <span className="todo-count">
        <FooterCount getCount={getCount} />
      </span>
      <Filters filters={filters} />
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
