import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./TextFieldButtonGroup.css";

export default class TextFieldButtonGroup extends PureComponent {
  constructor() {
    super();
    this.state = {
      textFieldValue: ""
    };
  }

  handleTextFieldChange = e => {
    this.setState({
      textFieldValue: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.textFieldValue);
    this.setState({
      textFieldValue: ""
    });
  };

  render() {
    return (
      <form className="text-button-group">
        <input
          className="input--text__large"
          value={this.state.textFieldValue}
          onChange={this.handleTextFieldChange}
          placeholder="Do stuff..."
        />
        <button
          className="btn--primary__large"
          type="submit"
          onClick={this.handleFormSubmit}
        >
          {this.props.buttonLabel}
        </button>
      </form>
    );
  }
}

TextFieldButtonGroup.defaultProps = {
  buttonLabel: "Search"
};

TextFieldButtonGroup.propTypes = {
  buttonLabel: PropTypes.string
};
