import React from "react";

export default class Dojas extends React.Component {
  render() {
    return (
      <section id="dojas">
        <h1>{this.props.data.name}</h1>
        <img src={this.props.data.img}></img>
        <a href={this.props.data.link.href}>{this.props.data.link.text}</a>
        <p>{this.props.data.description}</p>
      </section>
    );
  }
}