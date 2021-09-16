import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import useWindowSize from "hooks/useWindowSize";

const Carousel: React.FC<{
  itemCount: number;
  itemW: number;
  gap: number;
  children: ReactNode;
}> = ({ itemCount, itemW, gap, children }) => {
  const [pos, setPos] = useState(0);
  const [width] = useWindowSize();
  return (
    <CarouselContainer>
      <Container
        width={itemCount * (itemW + gap)}
        pos={pos}
        gap={gap}
        itemInView={Math.floor(width / itemW)}
        itemW={itemW}
      >
        {children}
      </Container>
      {pos !== 0 && (
        <PrevArrows onClick={() => setPos(pos - 1)}>
          <AiOutlineLeft className="icon" />
        </PrevArrows>
      )}
      {pos !== itemCount - Math.floor(width / itemW) && (
        <NextArrows onClick={() => setPos(pos + 1)}>
          <AiOutlineRight className="icon" />
        </NextArrows>
      )}
    </CarouselContainer>
  );
};
const Container = styled.div<{
  width: number;
  pos: number;
  gap: number;
  itemInView: number;
  itemW: number;
}>`
  overflow-x: scroll;
  width: ${(props) => props.width}px;
  transform: translateX(
    ${(props) => -(props.pos * props.itemW + (props.pos - 1) * props.gap)}px
  );
  display: flex;
  gap: 0 ${(props) => props.gap}px;
  transition: all 0.25s ease;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PrevArrows = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: white;
  left: 0;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 12%) 0px 8px 24px 0px;
  margin-left: 50px;
  z-index: 101;
  cursor: pointer;
  transform: translateY(-50%);
`;

const NextArrows = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: white;
  right: 0;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 12%) 0px 8px 24px 0px;
  margin-right: 50px;
  z-index: 101;
  cursor: pointer;
  transform: translateY(-50%);
`;

const CarouselContainer = styled.div`
  width: auto;
  position: relative;
  padding-left: 140px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Carousel;
