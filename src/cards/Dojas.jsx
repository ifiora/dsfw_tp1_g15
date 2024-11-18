import React from "react";
import styled from "styled-components";
import "@fontsource/montserrat";
import { BaseCard } from "./BaseCard";

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
  font-family: "Montserrat", sans-serif;

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

export default class Dojas extends BaseCard {
  render() {
    return (
      <>
        <Card>
          <Header
            name={this.props.data.name}
            img={this.props.data.img}
            animateHandler={this.animate}
            animating={this.state.isAnimating}
          ></Header>
          <Buttons
            link={this.props.data.link}
            animateHandler={this.animate}
            toggleIsExpandedHandler={this.toggleIsExpanded}
            expanded={this.state.isExpanded}
          ></Buttons>
          <DescriptionComponent
            text={this.props.data.description}
            animating={this.state.isAnimating}
          ></DescriptionComponent>
        </Card>

        {this.renderExpandableContent(
          <Card>
            <ExpandableContent
              data={this.props.data.moreInfo}
            ></ExpandableContent>
          </Card>
        )}
      </>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <>
        <Title>{this.props.name}</Title>
        <ProfileImage src={this.props.img} alt="Profile" />
      </>
    );
  }
}

const shake = `
  @keyframes shake {
    0% { transform: translateX(0); }
    12.5% { transform: translateX(-10px); }
    25% { transform: translateX(10px); }
    37.5% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    62.5% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
    87.5% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
  }
`;

const AnimatedDescription = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isAnimating",
})`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
  padding: 0 20px;
  ${(props) =>
    props.isAnimating &&
    `
    animation: shake 0.5s ease-in-out;
  `}
  ${shake}
`;

class DescriptionComponent extends React.Component {
  render() {
    return (
      <AnimatedDescription isAnimating={this.props.animating}>
        {this.props.text}
      </AnimatedDescription>
    );
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <>
        <LinkButton href={this.props.link.href} target="_blank">
          {this.props.link.text}
        </LinkButton>
        <LinkButton href="#" onClick={() => this.props.animateHandler(1000)}>
          Animar
        </LinkButton>
        <LinkButton
          href="#"
          onClick={() => this.props.toggleIsExpandedHandler()}
        >
          {this.props.expanded ? "Mostrar menos" : "Mostrar más"}
        </LinkButton>
      </>
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
        <Description>{info.aboutMe}</Description>
        <Description>{info.education}</Description>
      </Container>
    );
  }
}
