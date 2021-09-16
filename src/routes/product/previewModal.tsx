import Carousel, { CarouselRef } from "antd/lib/carousel";
import Modal from "antd/lib/modal/Modal";
import React, { FunctionComponent, useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";
interface PreviewModalProps {
  isOpen: boolean;
  index: number;
  children: React.ReactNode;
  setOpenModal: any;
}

export const PreviewModal: FunctionComponent<PreviewModalProps> = (props) => {
  console.log(props.index);
  const carouselRef = useRef<CarouselRef>(null);
  carouselRef.current?.goTo(props.index);
  return (
    <>
      <Modal
        visible={props.isOpen}
        width="90vw"
        footer={null}
        title={null}
        onCancel={() => props.setOpenModal(false)}
      >
        <Carousel ref={carouselRef} infinite={true} autoplay={false}>
          {React.Children.map(props.children, (children, idx) => {
            return <ImageContainer key={idx}>{children}</ImageContainer>;
          })}
        </Carousel>
        <LeftIconContainer onClick={() => carouselRef.current?.prev()}>
          <LeftOutlined />
        </LeftIconContainer>
        <RightIconContainer onClick={() => carouselRef.current?.next()}>
          <RightOutlined />
        </RightIconContainer>
      </Modal>
    </>
  );
};
const ImageContainer = styled.div`
  display: flex !important;
  justify-content: center;
  max-height: 500px;
  & img {
    object-fit: contain;
  }
`;
const LeftIconContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: var(--soft-shadow);
  cursor: pointer;
  margin: 0 20px;
`;
const RightIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: var(--soft-shadow);
  cursor: pointer;
  margin: 0 20px;
`;
