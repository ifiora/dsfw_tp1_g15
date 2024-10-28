import React from "react";
import styled from "styled-components";
import '@fontsource/montserrat';

const Card = styled.section`
  width: 60%;
  max-width: 700px;
  margin: 30px auto;
  padding: 40px;
  background-color: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #333;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: block;
  border: 3px solid #e0e0e0;
`;

const LinkButton = styled.a`
  display: block;
  margin: 15px auto;
  padding: 10px 20px;
  background-color: #333;
  color: #ffffff;
  text-align: center;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  width: 60%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
  padding: 0 20px;
`;

export default class Dojas extends React.Component {
  render() {
    return (
      <Card>
        <Title>{this.props.data.name}</Title>
        <ProfileImage src={this.props.data.img} alt="Profile" />
        <LinkButton href={this.props.data.link.href} target="_blank">
          {this.props.data.link.text}
        </LinkButton>
        <Description>{this.props.data.description}</Description>
      </Card>
    );
  }
}
