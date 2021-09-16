import { ArrowRightOutlined } from "@ant-design/icons";
import CartSVG from "components/CartSVG";
import { useAppDispatch, useAppSelector } from "hooks/storeHooks";
import { FunctionComponent } from "react";
import { closeCart } from "store/slices/cartSlice";
import styled from "styled-components";
import CartItem from "./cartItem";

interface CartProps {}

const Cart: FunctionComponent<CartProps> = (props) => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleCloseCart = () => {
    dispatch(closeCart());
  };
  return (
    <>
      <CartWrapper isOpen={cart.isOpen}>
        <Header>
          <ArrowRightOutlined
            className="ml-3 absolute top-1/2  text-2xl -translate-y-1/2 transform left-0 cursor-pointer hover:translate-x-2 ease-linear transition-all duration-300 origin-center leading-none"
            onClick={handleCloseCart}
          />
          <CartSVG />
        </Header>
        {cart.countItems !== 0 ? (
          <>
            <ItemList>
              {cart.items.map((item, idx) => (
                <CartItem item={item} key={idx} />
              ))}
            </ItemList>
            <p>Total: ${cart.total}</p>
          </>
        ) : (
          <p className="text-center mt-7 text-2xl">Cart is empty</p>
        )}
      </CartWrapper>
      <Overlay isOpen={cart.isOpen}></Overlay>
    </>
  );
};

const CartWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  height: 100vh;
  width: 500px;
  ${(props) => (props.isOpen ? "right:0;" : "right:-1000px;")}
  top: 0;
  background-color: white;
  padding: 20px;
  z-index: 9999999;
  transition: all ease 0.3s;
  overflow-y: scroll;
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 7px #b8d1dc;
`;

const ItemList = styled.div``;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  ${(props) => (props.isOpen ? "display: block;" : "display:none;")}
`;

export default Cart;
