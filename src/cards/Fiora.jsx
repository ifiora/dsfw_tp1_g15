import React from "react";
import styled from "styled-components";
import '@fontsource/montserrat';

const Card = styled.section`
  width: 320px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 2px solid #ddd;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  font-family: 'Montserrat', sans-serif;
  transform: rotate(-2deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: rotate(0deg);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 240px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #333;
  background: #f0f0f0;
  padding: 10px;
  border-radius: 0 0 8px 8px;
  text-align: center;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  color: #333;
  text-align: center;
  margin: 8px 0;
`;


const LinkButton = styled.a`
  display: block;
  text-align: center;
  font-size: 0.9rem;
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default class Fiora extends React.Component {
  render() {
    const { name, img, link, description } = this.props.data;

    return (
      <Card>
        <ProfileImage img={img} />
        <Description>{description}</Description>
        <Title>{name}</Title>
        <LinkButton href={link.href} target="_blank">
          {link.text}
        </LinkButton>
      </Card>
    );
  }
}

