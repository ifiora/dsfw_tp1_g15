import React from "react";
import styled from "styled-components";

const Item = styled.div`
  width: 320px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 2px solid #ddd;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const Photo = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  color: #333;
  text-align: center;
  margin: 8px 0;
  height: 75px;
`;

export default class PhotoItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Item>
        <Title>{data.title}</Title>
        <Photo img={data.thumbnailUrl}></Photo>
      </Item>
    );
  }
}
