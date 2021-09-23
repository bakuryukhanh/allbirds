import { Breadcrumb, Rate } from "antd";
import { getProductsFromSlug } from "apis/product";
import { useAppDispatch } from "hooks/storeHooks";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addItem2Cart, openCart } from "store/slices/cartSlice";
import styled from "styled-components";
import { IProduct, IProductColor } from "types/product";
import { CollapseInfo } from "./CollapseInfo";
import ColorButton from "./colorButton";
import ImageGallery from "./imageGallery";
import SizeButton from "./sizeButton";

interface ParamTypes {
  slug: string;
}

const { Item } = Breadcrumb;
export const ProductPage: React.FC = () => {
  const [productInfo, setProductInfo] = useState<IProduct>();
  const [selectedColor, setSelectedColor] = useState<IProductColor>();
  const { slug } = useParams<ParamTypes>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const response = await getProductsFromSlug(slug);
      const productInfo = response[0];
      if (response) {
        setProductInfo({
          ...productInfo,
        });
        setSelectedColor(productInfo.colors[0]);
      }
    })();
  }, [slug]);
  const handleSelectColor = (event: React.MouseEvent<HTMLDivElement>) => {
    const color = event.currentTarget.dataset.color;
    const productColors = productInfo?.colors;
    const selectedColor = productColors?.find(
      (colorObj: any) => colorObj.name === color
    );
    setSelectedColor(selectedColor);
  };
  if (!productInfo || !selectedColor) {
    return <div></div>;
  }

  const handleAddItem2Cart = () => {
    const checked = document
      .querySelector('input[name="size"]:checked')
      ?.getAttribute("value")!;
    const selectedSize = selectedColor.sizes.filter(
      (size) => size.name === checked
    )[0];

    const item = {
      ...productInfo,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    };
    dispatch(addItem2Cart({ item }));
    dispatch(openCart());
  };

  return (
    <>
      <MainContainer>
        <ImageGallery imgs={selectedColor.images}></ImageGallery>
        <div>
          <Breadcrumb>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to={`/categories/${productInfo.category.slug}`}>
                {productInfo.category.name}
              </Link>
            </Item>
            <Item>
              <Link to={`/collections/${productInfo.collection.slug}`}>
                {productInfo.collection.name}
              </Link>
            </Item>
            <Item>
              <Title>{productInfo.name}</Title>
            </Item>
          </Breadcrumb>
          <Price>${productInfo.price}</Price>
          <Rate
            disabled
            allowHalf
            defaultValue={4.5}
            className="text-gray-900"
          />
          <h4 className="text-left font-medium mt-10">
            Colors:
            <span className="font-light ml-1">{selectedColor.name}</span>
          </h4>
          {productInfo.colors.map((color: any, idx: number) => {
            if (color.name === selectedColor.name) {
              return (
                <ColorButton
                  onClick={handleSelectColor}
                  colorCode={color.colorCode}
                  colorSlug={color.name}
                  background={color.background}
                  className="mr-3"
                  selected
                  key={color._id}
                ></ColorButton>
              );
            }
            return (
              <ColorButton
                onClick={handleSelectColor}
                colorCode={color.hexCode}
                colorSlug={color.name}
                background={color.background}
                className="mr-3"
                key={color._id}
              ></ColorButton>
            );
          })}
          <h4 className="text-left font-medium mt-10 ">Select size:</h4>
          <div className="mb-5">
            {selectedColor.sizes.map((size, idx) => {
              return (
                <SizeButton
                  label={size.name}
                  name="size"
                  value={size.name}
                  checked
                  key={idx}
                ></SizeButton>
              );
            })}
          </div>
          <p className="font-light text-sm">
            This style is available in whole sizes only. In between sizes? We
            recommend you size up
            <button className="underline ml-1">See size chart</button>
          </p>
          <button
            className="button button--secondary w-full my-5"
            onClick={handleAddItem2Cart}
          >
            Add to Cart
          </button>
          <CollapseInfo />
        </div>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  margin-top: 100px;
  padding: 0 20px;
  gap: 30px;
  display: grid;
  grid-template-columns: 7fr 3fr;
`;

const Title = styled.h1`
  font-size: 27px;
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: light;
`;

export default ProductPage;
