import { ADD_TODO, TOGGLE_TODO } from "../constants/actionTypes";

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
