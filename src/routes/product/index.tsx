import { Breadcrumb, Collapse, Rate } from "antd";
import { useAppDispatch } from "hooks/storeHooks";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsDataFromSlugs } from "serviceAPIs";
import { addItem2Cart, openCart } from "store/slices/cartSlice";
import styled from "styled-components";
import { ProductColorType, ProductType } from "types/product";
import ColorButton from "./colorButton";
import ImageGallery from "./imageGallery";
import SizeButton from "./sizeButton";

interface ParamTypes {
  slug: string;
}

const { Panel } = Collapse;

const Item = Breadcrumb.Item;

function titleCase(str: string) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

export const ProductPage: React.FC = () => {
  const [productInfo, setProductInfo] = useState<ProductType>();
  const [selectedColor, setSelectedColor] = useState<ProductColorType>();
  const { slug } = useParams<ParamTypes>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const productInfo = getProductsDataFromSlugs(slug);
    if (productInfo) {
      setSelectedColor(productInfo.colors[0]);
      setProductInfo(productInfo);
    }
  }, [slug]);
  const handleChangeColor = (event: React.MouseEvent<HTMLDivElement>) => {
    const color = event.currentTarget.dataset.color;
    const productColors = productInfo?.colors;
    const selectedColor = productColors?.find(
      (colorObj) => colorObj.name === color
    );
    setSelectedColor(selectedColor);
  };
  if (!productInfo || !selectedColor) {
    return <div></div>;
  }

  const handleAddItem2Cart = () => {
    const name = productInfo.title;
    const color = selectedColor.name;
    const quantity = 1;
    const slug = productInfo.slug;
    const price = productInfo.price;
    const image = selectedColor.imgs[0];
    const size = parseInt(
      document
        .querySelector('input[name="size"]:checked')
        ?.getAttribute("value")!
    );
    const item = { name, slug, color, price, size, image, quantity };
    dispatch(addItem2Cart({ item }));
    dispatch(openCart());
  };

  return (
    <>
      <MainContainer>
        <ImageGallery imgs={selectedColor.imgs}></ImageGallery>
        <div>
          <Breadcrumb>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to={`/collections/${productInfo.collection}`}>
                {productInfo.collection}
              </Link>
            </Item>
            <Item>
              <Title>{productInfo.title}</Title>
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
            <span className="font-light ml-1">
              {titleCase(selectedColor.name)}
            </span>
          </h4>
          {productInfo.colors.map((key) => {
            if (key.name === selectedColor.name) {
              return (
                <ColorButton
                  onClick={handleChangeColor}
                  colorCode={key.hexCode}
                  colorSlug={key.name}
                  className="mr-3"
                  selected
                ></ColorButton>
              );
            }
            return (
              <ColorButton
                onClick={handleChangeColor}
                colorCode={key.hexCode}
                colorSlug={key.name}
                className="mr-3"
              ></ColorButton>
            );
          })}
          <h4 className="text-left font-medium mt-10 ">Select size:</h4>
          <div className="mb-5">
            <SizeButton label="6" name="size" value="6" checked></SizeButton>
            <SizeButton label="7" name="size" value="7"></SizeButton>
            <SizeButton label="8" name="size" value="8"></SizeButton>
            <SizeButton label="9" name="size" value="9"></SizeButton>
            <SizeButton label="10" name="size" value="10"></SizeButton>
            <SizeButton label="11" name="size" value="11"></SizeButton>
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
const CollapseInfo = () => {
  return (
    <div>
      <Collapse
        defaultActiveKey={["1"]}
        accordion
        className="bg-transparent font-semibold"
        bordered={false}
      >
        <Panel header="Core Feature" key={1}>
          <ul className="list-disc ml-5 font-light">
            <li>Renewabel Material</li>
            <li>Machine Washable</li>
            <li>Minimized Odor</li>
            <li>Movement Comfortable</li>
          </ul>
        </Panel>
        <Panel header="Description" key={2}>
          <p className="font-light">
            Combining cozy ZQ Merino wool and a bio-based water repellent
            shield, our rain-ready sneaker keeps your feet predictably dry in
            unpredictable weather. Made in Busan, South Korea
          </p>
        </Panel>
        <Panel header="Shipping and Returns" key={3}>
          <p className="font-light">
            Free shipping on orders over $50, and our 30 days, no questions
            asked return policy. Lightly worn shoes get donated to Soles4Souls.
          </p>
        </Panel>
        <Panel header="Care Guide" key={4}>
          <p className="font-light">
            Pullout the insoles and laces. Slip your shoes into a delicates bag
            and toss them in the washing machine—gentle cycle with cold water
            with your favorite mild detergent. When they’re done, shake off any
            excess water and let them air dry.
            <br /> Handy tips: Don’t put them in the dryer. And don’t worry,
            they’ll go back to their original shape in no time. You can hand
            wash your laces and insoles on their own.
          </p>
        </Panel>
      </Collapse>
    </div>
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
