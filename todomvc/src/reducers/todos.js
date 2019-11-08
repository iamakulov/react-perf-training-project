import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
} from '../constants/ActionTypes';

const libraries = [
  'Redux',
  'React',
  'webpack',
  'gulp',
  'Lodash',
  'styled-components',
  'emotion',
  'Babel',
  'Jest',
  'MobX',
  'Node.js',
];
const initialState = new Array(2000).fill(null).map((_, index) => {
  const versionMajor = Math.floor(Math.random() * 10);
  const versionMinor = Math.floor(Math.random() * 100);
  const library = libraries[Math.floor(Math.random() * libraries.length)];

  return {
    text: `Upgrade ${library} to v${versionMajor}.${versionMinor}`,
    completed: false,
    id: index,
  };
});

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
        },
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo,
      );

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked,
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}
