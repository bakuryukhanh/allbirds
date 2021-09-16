import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ProductCardProps {
  title: string;
  slug: string;
  price: number;
  img: string;
}

const ProductCard: FunctionComponent<ProductCardProps> = (props) => {
  return (
    <Link to={`/products/${props.slug}`}>
      <Wrapper>
        <ImageContainer>
          <img src={props.img} alt="" />
        </ImageContainer>
        <InfoContainer>
          <h1>{props.title}</h1>
          <p className="text-gray-700 font-light">${props.price}</p>
        </InfoContainer>
      </Wrapper>
    </Link>
  );
};
const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-shadow: var(--soft-shadow);
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 3;
  &:hover {
    transform: scale(1.05);
    transition: all 0.25s ease;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  & img {
    max-width: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 3;
`;
export default ProductCard;
