import React from "react";
import styled from "styled-components";

const Loading = styled.img`
  height: 20px;
  width: 20px;
`;

export default class Loader extends React.Component {
  render() {
    return <Loading src="loading.svg"></Loading>;
  }
}
