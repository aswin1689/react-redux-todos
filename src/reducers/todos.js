import { ADD_TODO, TOGGLE_TODO } from "../constants/actionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload];
    }

    case TOGGLE_TODO: {
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    }

    default:
      return state;
  }
};

export default todos;
