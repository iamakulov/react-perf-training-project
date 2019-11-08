import { connect } from 'react-redux';
import Header from '../components/Header';
import { addTodo, setTodoInputText } from '../actions';

const mapStateToProps = state => ({
  todoInputText: state.todoInput,
});

export default connect(
  mapStateToProps,
  { addTodo, setTodoInputText },
)(Header);
