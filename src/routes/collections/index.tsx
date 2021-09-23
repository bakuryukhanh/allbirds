import { Breadcrumb } from "antd";
import { fetchCollectionsFromSlug } from "apis/collection";
import { fetchCollectionsOfCategory } from "apis/product";
import ProductCard from "components/productCard";
import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ICollection, ICollectionBase, IProductBase } from "types/product";

const { Item } = Breadcrumb;

interface CollectionPageProps {}

interface ParamsType {
  slug: string;
}

const CollectionPage: FunctionComponent<CollectionPageProps> = (props) => {
  const { slug } = useParams<ParamsType>();
  const [collectionInfo, setCollectionInfo] = useState<ICollection>();
  const [collections, setCollections] = useState<ICollectionBase[]>();
  const [products, setProducts] = useState<IProductBase[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetchCollectionsFromSlug(slug);
      const collection = response[0];
      setCollectionInfo({ ...collection });
      setProducts(collection.products);
      const collections = await fetchCollectionsOfCategory(
        collection.category._id
      );
      setCollections(collections);
    })();
  }, [slug]);

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
              <Link to={`/categories/${collectionInfo.category.slug}`}>
                {collectionInfo.category.name}
              </Link>
            </Item>
            <Item>
              <h1 className="font-semibold text-lg">{collectionInfo.name}</h1>
            </Item>
          </Breadcrumb>
          <div>
            {collections.map((collection) => (
              <Link
                className="text-light text-sm text-gray-500 my-3 block hover:underline"
                to={`/collections/${collection.slug}`}
              >
                {collection.name}
              </Link>
            ))}
          </div>
        </SideWrapper>
        <MainWrapper>
          <h1 className="font-semibold">{collectionInfo?.name}</h1>
          <p className="font-light text-sm mb-8">{collectionInfo?.shortDesc}</p>
          <ProductsWrapper>
            {products.map((product, idx) => {
              return (
                <ProductCard
                  {...product}
                  image={product.bannerImage}
                  key={idx}
                ></ProductCard>
              );
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
