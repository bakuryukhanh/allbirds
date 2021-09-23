import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Card: React.FC<{
  image: string;
  heading: string;
  description: string;
  slug: string;
  width: string;
}> = (props) => {
  return (
    <Container width={props.width}>
      <Link to={`${props.slug}`}>
        <ImageContainer>
          <Image src={props.image} />
        </ImageContainer>
        <TextContainer>
          <h3 className="card--heading">{props.heading}</h3>
          <p className="card--description">{props.description}</p>
        </TextContainer>
      </Link>
    </Container>
  );
};
const Container = styled.div<{ width: string }>`
  box-shadow: var(--soft-shadow);
  width: ${(props) => props.width};
  margin: 24px 0;
`;
const Image = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
const TextContainer = styled.div`
  margin-top: 20px;
  padding: 10px 20px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  object-fit: cover;
`;
