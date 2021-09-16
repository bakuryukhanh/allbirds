import { Breadcrumb } from "antd";
import ProductCard from "components/productCard";
import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCollectionInfo,
  getCollectionProduct,
  getCollections,
} from "serviceAPIs";
import styled from "styled-components";
import { CollectionType } from "types/collections";
import { ProductBaseType } from "types/product";

const { Item } = Breadcrumb;

interface CollectionPageProps {}

interface ParamsType {
  slug: string;
}

const CollectionPage: FunctionComponent<CollectionPageProps> = (props) => {
  const { slug } = useParams<ParamsType>();
  const [collectionInfo, setCollectionInfo] = useState<CollectionType>();
  const [collections, setCollection] = useState<CollectionType[]>();
  const [products, setProducts] = useState<ProductBaseType[]>([]);
  useEffect(() => {
    const products = getCollectionProduct(slug);
    const info = getCollectionInfo(slug);
    setCollectionInfo(info);
    setProducts(products);
  }, [slug]);
  useEffect(() => {
    const collections = getCollections();
    setCollection(collections);
  }, []);
  if (!collectionInfo || !products || !collections) {
    return <div></div>;
  }
  return (
    <div className="mt-14">
      <Wrapper>
        <SideWrapper>
          <Breadcrumb>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <h1 className="font-semibold text-lg">{collectionInfo.title}</h1>
            </Item>
          </Breadcrumb>
          <div>
            {collections.map((collection) => (
              <Link
                className="text-light text-sm text-gray-500 my-3 block hover:underline"
                to={`/collections/${collection.slug}`}
              >
                {collection.title}
              </Link>
            ))}
          </div>
        </SideWrapper>
        <MainWrapper>
          <h1 className="font-semibold">{collectionInfo?.title}</h1>
          <p className="font-light text-sm mb-8">
            {collectionInfo?.description}
          </p>
          <ProductsWrapper>
            {products.map((product, idx) => {
              return <ProductCard {...product} key={idx}></ProductCard>;
            })}
          </ProductsWrapper>
        </MainWrapper>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr 5fr;
  gap: 20px;
`;

const MainWrapper = styled.div``;

const SideWrapper = styled.div``;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export default CollectionPage;
