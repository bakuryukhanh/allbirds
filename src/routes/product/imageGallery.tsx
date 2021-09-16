import { PlusOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { SuspenseImg } from "components/suspenseImg";
import { FunctionComponent, Suspense, useState } from "react";
import styled from "styled-components";
import { PreviewModal } from "./previewModal";

interface ImageGalleryProps {
  imgs: string[] | null;
}

const ImageGallery: FunctionComponent<ImageGalleryProps> = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalIdx, setModalIdx] = useState(1);
  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const key = event.currentTarget.dataset.key!;
    setModalIdx(parseInt(key));
    setOpenModal(true);
  };

  return (
    <Main>
      <PreviewModal
        isOpen={openModal}
        index={modalIdx}
        setOpenModal={setOpenModal}
      >
        {props.imgs?.map((img, idx) => {
          return (
            <Suspense fallback={<Spin key={idx} />}>
              <SuspenseImg src={img} key={idx}></SuspenseImg>
            </Suspense>
          );
        })}
      </PreviewModal>
      <ImagesGrid>
        {props.imgs?.map((img, idx) => {
          return (
            <ImageContainer onClick={handleImageClick} data-key={idx} key={idx}>
              <Suspense
                fallback={
                  <div
                    className="w-full h-full  bg-gray-100 flex justify-center items-center "
                    style={{ aspectRatio: "1/1" }}
                  >
                    <Spin />
                  </div>
                }
              >
                <SuspenseImg src={img}></SuspenseImg>
              </Suspense>
              <Overlayer>
                <PlusOutlined className="icon cirle-icon" />
              </Overlayer>
            </ImageContainer>
          );
        })}
      </ImagesGrid>
    </Main>
  );
};

const Main = styled.div``;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  &:hover > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Overlayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 25%);
  display: none;
`;
export default ImageGallery;
