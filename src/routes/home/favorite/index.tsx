import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
enum SlideOption {
  everyday = "EVERY_DAY",
  running = "RUNNING",
  travel = "TRAVEL",
}
interface ICard {
  image: string;
  name: string;
  subcript: string;
}
const cards: Array<ICard> = [
  {
    image:
      "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/1nSErVwKb4G7X8mTIJKPoK/1",
    name: "Tree Runner",
    subcript: "Light and breeze sneaker",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Tree Dasher",
    subcript: "Daily Running Shoe",
  },
  {
    image:
      "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Tree Piper",
    subcript: "Classic Low Top Sneaker",
  },
];
const Favourite: React.FC = () => {
  const [slidePos, setSlidePos] = useState<SlideOption>(SlideOption.everyday);
  const [card, setCard] = useState<ICard>(cards[0]);
  const [barW, setBarW] = useState(0);
  const [barPos, setBarPos] = useState(0);
  const everydayRef = useRef<HTMLButtonElement>(null);
  const runningRef = useRef<HTMLButtonElement>(null);
  const travelRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    switch (slidePos) {
      case SlideOption.everyday: {
        const width = everydayRef.current ? everydayRef.current.offsetWidth : 0;
        const pos = everydayRef.current ? everydayRef.current.offsetLeft : 0;
        setBarW(width);
        setBarPos(pos);
        break;
      }
      case SlideOption.running: {
        const width = runningRef.current ? runningRef.current.offsetWidth : 0;
        const pos = runningRef.current ? runningRef.current.offsetLeft : 0;
        setBarPos(pos);
        setBarW(width);
        break;
      }
      case SlideOption.travel: {
        const width = travelRef.current ? travelRef.current.offsetWidth : 0;
        const pos = travelRef.current ? travelRef.current.offsetLeft : 0;
        setBarPos(pos);
        setBarW(width);
        break;
      }
    }
  }, [slidePos]);
  return (
    <Section className="container">
      <h3>Our Favourite</h3>
      <Selection>
        <button
          ref={everydayRef}
          className={slidePos === SlideOption.everyday ? "active" : undefined}
          onClick={() => {
            setSlidePos(SlideOption.everyday);
            setCard(cards[0]);
          }}
        >
          <h4>EveryDay</h4>
        </button>

        <button
          ref={runningRef}
          className={slidePos === SlideOption.running ? "active" : undefined}
          onClick={() => {
            setSlidePos(SlideOption.running);
            setCard(cards[1]);
          }}
        >
          <h4>Running</h4>
        </button>
        <button
          ref={travelRef}
          className={slidePos === SlideOption.travel ? "active" : undefined}
          onClick={() => {
            setSlidePos(SlideOption.travel);
            setCard(cards[2]);
          }}
        >
          <h4>Travel</h4>
        </button>
        <Bar width={barW} pos={barPos}></Bar>
      </Selection>
      <CardContainer>
        <Card>
          <ImageContainer>
            <img src={card.image} alt="" />
          </ImageContainer>
          <TextContainer>
            <h4>{card.name}</h4>
            <p>{card.subcript}</p>
          </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <img src={card.image} alt="" />
          </ImageContainer>
          <TextContainer>
            <h4>{card.name}</h4>
            <p>{card.subcript}</p>
          </TextContainer>
        </Card>
        <Card>
          <ImageContainer>
            <img src={card.image} alt="" />
          </ImageContainer>
          <TextContainer>
            <h4>{card.name}</h4>
            <p>{card.subcript}</p>
          </TextContainer>
        </Card>
      </CardContainer>
    </Section>
  );
};
const Section = styled.section`
  padding-top: 35px;
  & h3 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
  }
`;
const Selection = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 2px solid var(--text-gray);
  & button {
    background: transparent;
    border: none;
    text-transform: uppercase;
    padding: 0 35px;
    cursor: pointer;
    color: var(--text-gray);
  }
  & .active {
    color: var(--text-color);
  }
  & button + button {
    margin-left: 70px;
  }
`;
const Bar = styled.div<{ width: number; pos: number }>`
  height: 0;
  width: ${(props) => props.width}px;
  left: ${(props) => props.pos}px;
  border-bottom: 2px solid var(--text-color);
  position: absolute;
  transform: translateY(1px);
  bottom: 0;
  transition: all 0.25s ease;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0 20px;
  margin-top: 35px;
`;
const Card = styled.div``;

const ImageContainer = styled.div`
  & img {
    width: 100%;
    object-fit: cover;
  }
`;
const TextContainer = styled.div`
  padding: 18px;
  & h4 {
    text-align: left;
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 9px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--text-gray);
  }
  & p {
    color: var(--text-color);
    font-size: 14px;
    font-weight: 300;
  }
`;
export default Favourite;
