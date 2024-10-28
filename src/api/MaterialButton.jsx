import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export default class MaterialButton extends React.Component {
  render() {
    return (
      <Button onClick={this.props.onClick}>
        <i className="material-icons">{this.props.icon}</i>
      </Button>
    );
  }
}
