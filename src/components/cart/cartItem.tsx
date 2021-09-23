import { CloseOutlined } from "@ant-design/icons";
import { useAppDispatch } from "hooks/storeHooks";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { updateQuantity } from "store/slices/cartSlice";
import styled from "styled-components";
import { ICartItem } from "types/cart";

interface CartItemProps {
  item: ICartItem;
}

const CartItem: FunctionComponent<CartItemProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(
      updateQuantity({ item: props.item, quantity: props.item.quantity + 1 })
    );
  };

  const handleDecreaseQuantity = () => {
    dispatch(
      updateQuantity({ item: props.item, quantity: props.item.quantity - 1 })
    );
  };

  const handleRemoveItem = () => {
    dispatch(updateQuantity({ item: props.item, quantity: 0 }));
  };

  return (
    <Wrapper>
      <CloseOutlined
        className="absolute right-4 top-4 hover:rotate-90 transform origin-center ease-linear duration-200 cursor-pointer"
        onClick={handleRemoveItem}
      />
      <ImageWrapper>
        <img src={props.item.color.images[0]} alt="" />
      </ImageWrapper>
      <ContentWrapper>
        <Link
          to={`/products/${props.item.slug}`}
          className="font-medium text-lg"
        >
          {props.item.name}
        </Link>
        <p className="text-sm font-light">{props.item.color.name}</p>
        <p className="text-sm font-light">Size: {props.item.size.name}</p>
        <QuantityInputWrapper>
          <button onClick={handleDecreaseQuantity}>-</button>
          <span className="text-center">{props.item.quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </QuantityInputWrapper>
      </ContentWrapper>
      <span className="font-light text-lg absolute bottom-4 right-4">
        ${props.item.price}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: solid 2px var(--text-gray);
  align-items: center;
  position: relative;
`;

const ImageWrapper = styled.div``;

const ContentWrapper = styled.div``;

const QuantityInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 25px 40px 25px;
  border: solid 2px var(--text-gray);
  align-items: center;
  width: min-content;
  margin-top: 20px;
  & button {
    font-size: 20px;
    color: var(--text-gray);
    &:hover {
      color: black;
    }
  }
`;

export default CartItem;
