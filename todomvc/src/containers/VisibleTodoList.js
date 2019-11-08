import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constants/TodoFilters.js';
import TodoList from '../components/TodoList';

const getVisibleTodos = (visibilityFilter, todos) => {
  const filterFunctions = {
    [SHOW_ALL]: () => true,
    [SHOW_COMPLETED]: todo => todo.completed,
    [SHOW_ACTIVE]: todo => !todo.completed,
  };

  return todos.filter(filterFunctions[visibilityFilter]);
};

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state.visibilityFilter, state.todos),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
