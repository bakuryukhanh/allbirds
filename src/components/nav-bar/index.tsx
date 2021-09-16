import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import CartSVG from "../CartSVG";
import logo from "assets/logo.svg";
import { useAppDispatch, useAppSelector } from "hooks/storeHooks";
import { openCart } from "store/slices/cartSlice";
const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const countItems = useAppSelector((state) => state.cart.countItems);
  const handleCartClick = () => {
    dispatch(openCart());
  };
  return (
    <Header>
      <Navigation>
        <LeftNav>
          <ul className="my-0">
            <li>
              <Link to="/men-shoes">Men</Link>
            </li>
            <li>
              <Link to="/women-shoes">Women</Link>
            </li>
            <li>
              <Link to="/">New Arrivals</Link>
            </li>
          </ul>
        </LeftNav>
        <Logo>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Logo>
        <RightNav>
          <LinkContainer>
            <ul className="my-0">
              <li>
                <Link to="">Substainability</Link>
              </li>
              <li>
                <Link to="">Stores</Link>
              </li>
            </ul>
          </LinkContainer>
          <IconContainer>
            <Link to="">
              <img
                src="//cdn.allbirds.com/image/upload/v1571355713/icons/user.svg"
                alt=""
              />
            </Link>
            <Link to="">
              <img
                src="//cdn.allbirds.com/image/upload/v1571947807/icons/help.svg"
                alt=""
              />
            </Link>
            <CartIcon onClick={handleCartClick}>
              <CartSVG></CartSVG>
              <span>{countItems}</span>
            </CartIcon>
          </IconContainer>
        </RightNav>
      </Navigation>
    </Header>
  );
};
const rem = (pixels: number, base = 16) => css`
  ${pixels / base}rem
`;
const Header = styled.header`
  width: 100%;
  padding: ${rem(5)} ${rem(30)};
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 24px 0px;
`;
const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${rem(50)};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${rem(12)};
  line-height: ${rem(21)};
  letter-spacing: 1.7px;
  & ul {
    list-style-type: none;
    padding: 0;
    & li {
      display: inline;
      & a:hover {
        text-decoration: underline;
      }
    }
    & li + li {
      margin: 0 ${rem(18)};
    }
  }
`;
const LeftNav = styled.div``;
const RightNav = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  & img {
    height: ${rem(40)};
    width: auto;
  }
`;
const LinkContainer = styled.div`
  margin-right: ;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 ${rem(16)};
`;
const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 0 8px 6px;
    font-weight: bolder;
    font-size: 12px;
  }
`;
export default NavBar;
