import React, { Component } from "react";
import shortId from "shortid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as todos from "../actions/todos";
import TextFieldButtonGroup from "./TextFieldButtonGroup";
import TodosList from "./TodosList";

class TodosListContainer extends Component {
  handleFormSubmit = value => {
    if (value.trim().length > 0) {
      const id = shortId.generate();
      //const { todos } = this.state;
      //let updatedTodos = [...todos, { id, value, isCompleted: false }];
      //this.setState({ todos: updatedTodos });
      const payload = { id, value, isCompleted: false };
      this.props.todosActions.addTodo(payload);
    }
  };

  toggleTodo = id => {
    this.props.todosActions.toggleTodo(id);
  };

  render() {
    return (
      <React.Fragment>
        <TextFieldButtonGroup
          buttonLabel="Add Todo"
          handleFormSubmit={this.handleFormSubmit}
        />
        <TodosList todos={this.props.todos} toggleTodo={this.toggleTodo} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { todos } = state;
  return {
    todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    todosActions: bindActionCreators(todos, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosListContainer);
