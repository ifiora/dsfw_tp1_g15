import React from "react";
import styled from "styled-components";
import PhotoItem from "./PhotoItem";

import ButtonContainer from "./ButtonContainer";

const pageSize = 10;
const itemCount = 5000;

const ItemList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export default class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: [],
      loading: false,
    };
    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    const startVal =
      page < 1
        ? 0
        : page > itemCount / pageSize
        ? itemCount - pageSize
        : (page - 1) * pageSize;

    this.setState({ loading: true });
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${startVal}&_limit=${pageSize}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          page: page,
          data: json,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
        alert("Ocurrió un error al cargar las imagenes.");
      });
  }

  componentDidMount() {
    this.setPage(1);
  }

  render() {
    return (
      <section id="api">
        <h1>API</h1>
        <ButtonContainer
          handler={this.setPage}
          page={this.state.page}
          loading={this.state.loading}
          lastPage={Math.floor(itemCount / pageSize)}
        ></ButtonContainer>
        <ItemList>
          {this.state.data.map((photo) => (
            <PhotoItem data={photo} key={photo.id}></PhotoItem>
          ))}
        </ItemList>
      </section>
    );
  }
}
