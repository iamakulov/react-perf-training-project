import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import * as TodoActions from '../actions';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constants/TodoFilters.js';
import TodoList from '../components/TodoList';

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    const filterFunctions = {
      [SHOW_ALL]: () => true,
      [SHOW_COMPLETED]: todo => todo.completed,
      [SHOW_ACTIVE]: todo => !todo.completed,
    };

    return todos.filter(filterFunctions[visibilityFilter]);
  },
);

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
