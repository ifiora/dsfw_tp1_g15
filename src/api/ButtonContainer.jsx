import React from "react";
import styled from "styled-components";
import MaterialButton from "./MaterialButton";
import Loader from "./Loader";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;
const PageCounter = styled.div`
  height: 20px;
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default class ButtonContainer extends React.Component {
  render() {
    const { handler, page, loading, lastPage } = this.props;

    return (
      <Container>
        <MaterialButton
          icon="first_page"
          onClick={() => handler(1)}
        ></MaterialButton>
        <MaterialButton
          icon="chevron_left"
          onClick={() => handler(page - 1)}
        ></MaterialButton>
        {loading ? <Loader></Loader> : <PageCounter>Pag: {page}</PageCounter>}
        <MaterialButton
          icon="chevron_right"
          onClick={() => handler(page + 1)}
        ></MaterialButton>
        <MaterialButton
          icon="last_page"
          onClick={() => handler(Math.floor(lastPage))}
        ></MaterialButton>
      </Container>
    );
  }
}
