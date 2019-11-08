import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import todoInput from './todoInput';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  todoInput,
});

export default rootReducer;
