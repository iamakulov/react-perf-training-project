import { SET_TODO_INPUT_TEXT } from '../constants/ActionTypes';

const todoInput = (state = '', action) => {
  switch (action.type) {
    case SET_TODO_INPUT_TEXT:
      return action.text;
    default:
      return state;
  }
};

export default todoInput;
