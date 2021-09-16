import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Intro: React.FC = () => {
  return (
    <Section>
      <ImageContainer></ImageContainer>
      <TextContainer>
        <h3>Light On Your Feet. Light On The Planet.</h3>
        <p className="small--text">
          Your new favorite everyday shoes are made with lightweight, breathable
          eucalyptus fiber.
        </p>
      </TextContainer>
      <LinkContainer>
        <Link to="" className="button button--secondary">
          Shop Men
        </Link>
        <Link to="" className="button button--secondary">
          Shop Women
        </Link>
      </LinkContainer>
    </Section>
  );
};
const Section = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("https://i.ibb.co/Bjsz5RX/intro.jpg");
`;
const TextContainer = styled.div`
  text-align: center;
  width: 700px;
  margin: 50px auto 0 auto;
  word-wrap: break-word;
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  & a {
    width: 180px;
    height: 50px;
    color: white;
  }
  & a + a {
    margin-left: 20px;
  }
`;
export default Intro;
