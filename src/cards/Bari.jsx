import styled from "styled-components";
import "@fontsource/montserrat";
import { BaseCard } from "./BaseCard";
import React from "react";

// Estilos para el contenedor de la tarjeta
const Card = styled.section`
  width: 80%;
  max-width: 900px;
  margin: 20px auto;
  padding: 30px;
  display: flex;
  background: linear-gradient(
    45deg,
    #ff3cac,
    #784ba0,
    #2b86c5,
    #46c8e9,
    #3bdfc7
  );
  background-size: 400% 400%;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: "Montserrat", sans-serif;
  animation: gradient 15s ease infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 18px 30px rgba(0, 0, 0, 0.3);
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
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

export default class Bari extends BaseCard {
  render() {
    const data = this.props.data;
    return (
      <>
        <Card>
          <LeftSectionComponent
            name={data.name}
            img={data.img}
            link={data.link}
            animateHandler={this.animate}
            animating={this.state.isAnimating}
          ></LeftSectionComponent>
          <RightSectionComponent
            description={data.description}
            toggleIsExpandedHandler={this.toggleIsExpanded}
            expanded={this.state.isExpanded}
          ></RightSectionComponent>
        </Card>

        {this.renderExpandableContent(
          <Card>
            <ExpandableContent data={data.moreInfo}></ExpandableContent>
          </Card>
        )}
      </>
    );
  }
}

// Componentes hijos:

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

const ProfileImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "isAnimating",
})`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 4px solid #fff;
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.isAnimating ? "rotate(360deg)" : "rotate(0deg)"};
`;

class LeftSectionComponent extends React.Component {
  render() {
    return (
      <LeftSection>
        <Title>{this.props.name}</Title>
        <ProfileImage
          src={this.props.img}
          alt="Profile"
          isAnimating={this.props.animating}
        />
        <LinkButton href={this.props.link.href} target="_blank">
          {this.props.link.text}
        </LinkButton>
        <LinkButton href="#" onClick={() => this.props.animateHandler(500)}>
          Animar
        </LinkButton>
      </LeftSection>
    );
  }
}

const RightSection = styled.div`
  width: 60%;
  padding-left: 25px;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

class RightSectionComponent extends React.Component {
  render() {
    return (
      <RightSection>
        <p>
          {this.props.description}
          <br></br>
          <LinkButton
            href="#"
            onClick={() => this.props.toggleIsExpandedHandler()}
          >
            {this.props.isExpanded ? "Mostrar menos" : "Mostrar más"}
          </LinkButton>
        </p>
      </RightSection>
    );
  }
}

const Container = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

class ExpandableContent extends React.Component {
  render() {
    const info = this.props.data;

    return (
      <Container>
        <DescriptionItem title="Hobbies" text={info.hobbies}></DescriptionItem>
        <DescriptionItem
          title="Experiencia laboral"
          text={info.workExperience}
        ></DescriptionItem>
        <DescriptionItem
          title="Educación"
          text={info.education}
        ></DescriptionItem>
      </Container>
    );
  }
}

const Description = styled.p`
  margin: 10px 0;
`;

class DescriptionItem extends React.Component {
  render() {
    return (
      <Description>
        <strong>{this.props.title}:</strong> {this.props.text}
      </Description>
    );
  }
}
