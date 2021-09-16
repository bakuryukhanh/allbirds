import { Link } from "react-router-dom";
import styled from "styled-components";

export const SecondaryHero: React.FC<{}> = () => {
  return (
    <Section>
      <ImageContainer></ImageContainer>
      <TextContainer className="text-center">
        <h3>Reversing Climate Change Through Better Business</h3>
        <p className="small--text">
          Reducing our environmental impact has been a top priority since day
          one. But now, we’re taking things further. Explore our overall
          sustainability approach, our progress thus far, and our bold list of
          commitments for 2025.
        </p>
        <Link
          to=""
          className="button button--secondary"
          style={{ width: "300px", margin: "0 auto" }}
        >
          Our Subtainable Practice
        </Link>
      </TextContainer>
    </Section>
  );
};
const Section = styled.section`
  margin-bottom: 100px;
`;
const ImageContainer = styled.div`
  width: 100%;
  object-fit: cover;
  height: 500px;
  background-image: url("https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/pageSectionSecondaryPromoHero/en-US/images/24QzGcRbuw1bsB1FZTH2VK/1");
  background-position: center;
  background-repeat: repeat;
  margin-bottom: 50px;
`;
const TextContainer = styled.div`
  width: 700px;
  margin: 0 auto;
`;
