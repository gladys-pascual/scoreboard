import React, { Component } from "react";
import "./AddPlayerForm.scss";

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter the player's name"
        />
        <input type="submit" placeholder="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
