import React from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

const Header = ({ todoInputText, addTodo, setTodoInputText }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      value={todoInputText}
      onChange={setTodoInputText}
      onComplete={() => {
        setTodoInputText('');
        addTodo(todoInputText);
      }}
      placeholder="What needs to be done?"
    />
  </header>
);

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Header;
