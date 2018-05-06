import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends PureComponent {
  onItemClick = () => {
    this.props.onItemClick(this.props.id);
  };

  render() {
    const { isCompleted, value } = this.props;
    const classes = `todo ${isCompleted ? "todo__completed" : ""}`;
    return (
      <React.Fragment>
        <li onClick={this.onItemClick} className={classes}>
          {value}
        </li>
      </React.Fragment>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.string
};
