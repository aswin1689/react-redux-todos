import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";
import "./TodosList.css";

export default class TodosList extends PureComponent {
  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    const { todos } = this.props;
    return (
      <ul className="todosList">
        {todos.map(todo => {
          const { id, value, isCompleted } = todo;
          return (
            <TodoItem
              key={id}
              id={id}
              value={value}
              isCompleted={isCompleted}
              onItemClick={this.toggleTodo}
            />
          );
        })}
      </ul>
    );
  }
}

// const TodosList = ({ todos, toggleTodo }) => (
//   <ul>
//     {todos.map(todo => (
//       <TodoItem
//         key={todo.id}
//         {...todo}
//         onClick={() => toggleTodo(todo.value)}
//       />
//     ))}
//   </ul>
// );

// export default TodosList;

TodosList.propTypes = {
  todos: PropTypes.array
};
