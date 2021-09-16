import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Hero: React.FC = () => {
  return (
    <HeroSection id="hero">
      <ContentContainer>
        <TextContainer>
          <div className="textContainer">
            <h1 className="primary--heading">Nature Is Making A Comeback</h1>
            <p className="paragraph">Introducing The Natural Run Collection</p>
          </div>
          <LinkContainer>
            <Link
              to="/collections/men-shoes"
              className="button button--primary"
            >
              Shop Men
            </Link>
            <Link
              to="/collections/women-shoes"
              className="button button--primary"
            >
              Shop Women
            </Link>
          </LinkContainer>
        </TextContainer>
      </ContentContainer>
    </HeroSection>
  );
};
const HeroSection = styled.section`
  display: flex;
  background-image: url("https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1629192540/production/heroSlide/en-US/images/6BvIFb9WICgjIkH8mLV9U1/2.jpg");
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.div`
  height: 80%;
  position: relative;
`;
const TextContainer = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 16px;
  text-align: center;
`;
const LinkContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  & a + a {
    margin: 0 20px;
  }
`;
export default Hero;
