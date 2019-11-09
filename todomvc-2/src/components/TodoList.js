import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ filteredTodos, activeTodosCount, actions }) => {
  return (
    <ul
      className={`todo-list todos-${activeTodosCount}`}
      style={{ '--active-todos-count': activeTodosCount }}
    >
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  actions: PropTypes.object.isRequired,
};

export default TodoList;
