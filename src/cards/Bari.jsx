import React from "react";
import styled from "styled-components";
import '@fontsource/montserrat';

// Estilos para el contenedor de la tarjeta
const Card = styled.section`
  width: 80%;
  max-width: 900px;
  margin: 20px auto;
  padding: 30px;
  display: flex;
  background: linear-gradient(45deg, #ff3cac, #784ba0, #2b86c5, #46c8e9, #3bdfc7);
  background-size: 400% 400%;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  animation: gradient 15s ease infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 18px 30px rgba(0, 0, 0, 0.3);
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  text-align: center;
`;

// Estilos para el título
const Title = styled.h1`
  font-size: 2.4rem;
  color: #fff;
  margin-bottom: 15px;
`;

const ProfileImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 4px solid #fff;
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 12px;
  padding: 12px 18px;
  background-color: #000;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const RightSection = styled.div`
  width: 60%;
  padding-left: 25px;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

export default class Bari extends React.Component {
  render() {
    return (
      <Card>
        <LeftSection>
          <Title>{this.props.data.name}</Title>
          <ProfileImage src={this.props.data.img} alt="Profile" />
          <LinkButton href={this.props.data.link.href} target="_blank">
            {this.props.data.link.text}
          </LinkButton>
        </LeftSection>
        <RightSection>
          <p>{this.props.data.description}</p>
        </RightSection>
      </Card>
    );
  }
}
