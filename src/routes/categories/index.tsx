import { fetchCategoryFromSlug } from "apis/product";
import { Card } from "components/card";
import { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface CategoryPageProps {}

type ParamsType = {
  slug: string;
};

const CategoryPage: FunctionComponent<CategoryPageProps> = (props) => {
  const { slug } = useParams<ParamsType>();
  const [categoryInfo, setCategoryInfo] = useState<any>();
  useEffect(() => {
    (async () => {
      const response = await fetchCategoryFromSlug(slug);
      if (response) {
        const category = response[0];
        setCategoryInfo(category);
        console.log(response);
      }
    })();
  }, [slug]);
  if (!categoryInfo) {
    return <div></div>;
  }
  return (
    <div className="container mt-10">
      <h1>{categoryInfo.name}</h1>
      <Container>
        {categoryInfo.collections.map((collection: any) => {
          return (
            <Card
              heading={collection.name}
              description=""
              image={collection.image}
              slug={`/collections/${collection.slug}`}
              width="350px"
            ></Card>
          );
        })}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
export default CategoryPage;
