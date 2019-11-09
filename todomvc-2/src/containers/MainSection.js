import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';

const getCompletedTodoCount = todos =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state.todos),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainSection);
