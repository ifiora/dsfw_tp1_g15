import React from "react";
import styled from "styled-components";

const ExpandableSection = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isExpanded",
})`
  max-height: ${(props) => (props.isExpanded ? "1000px" : "0px")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.isExpanded ? "1" : "0")};
`;

export class BaseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      isAnimating: false,
    };

    this.toggleIsExpanded = this.toggleIsExpanded.bind(this);
    this.animate = this.animate.bind(this);
  }

  toggleIsExpanded = () => {
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
  };

  animate = (duration) => {
    this.setState({ isAnimating: true });
    setTimeout(() => {
      this.setState({ isAnimating: false });
    }, duration);
  };

  renderExpandableContent(content) {
    return (
      <ExpandableSection isExpanded={this.state.isExpanded}>
        {content}
      </ExpandableSection>
    );
  }
}
