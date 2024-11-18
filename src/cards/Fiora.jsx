import React from "react";
import styled from "styled-components";
import "@fontsource/montserrat";
import { BaseCard } from "./BaseCard";

const Card = styled.section`
  width: 320px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 2px solid #ddd;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  font-family: "Montserrat", sans-serif;
  transform: rotate(-2deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: rotate(0deg);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default class Fiora extends BaseCard {
  render() {
    const { name, img, link, description, moreInfo } = this.props.data;

    return (
      <>
        <Card>
          <InfoComponent
            img={img}
            description={description}
            name={name}
            animating={this.state.isAnimating}
          ></InfoComponent>
          <LinksComponent
            link={link}
            animateHandler={this.animate}
            toggleIsExpandedHandler={this.toggleIsExpanded}
            expanded={this.state.isExpanded}
          ></LinksComponent>
        </Card>

        {this.renderExpandableContent(
          <Card>
            <ExpandableContent data={moreInfo}></ExpandableContent>
          </Card>
        )}
      </>
    );
  }
}

const ProfileImage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isAnimating",
})`
  width: 100%;
  height: 240px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 10px;
  transform: ${(props) => (props.isAnimating ? "scale(1.3)" : "scale(1)")};
  transition: transform 0.5s ease;
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

class InfoComponent extends React.Component {
  render() {
    return (
      <>
        <ProfileImage img={this.props.img} isAnimating={this.props.animating} />
        <Description>{this.props.description}</Description>
        <Title>{this.props.name}</Title>
      </>
    );
  }
}

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

class LinksComponent extends React.Component {
  render() {
    return (
      <>
        <LinkButton href={this.props.link.href} target="_blank">
          {this.props.link.text}
        </LinkButton>
        <LinkButton href="#" onClick={() => this.props.animateHandler(500)}>
          Animar
        </LinkButton>
        <LinkButton
          href="#"
          onClick={() => this.props.toggleIsExpandedHandler()}
        >
          {!this.props.expanded ? "Más info" : "Menos info"}
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
        <Description>{info.hobbies}</Description>
        <Description>{info.workExperience}</Description>
      </Container>
    );
  }
}
