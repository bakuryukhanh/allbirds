import { fetchCollections } from "apis/collection";
import { Card } from "components/card";
import Carousel from "components/slider";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ICollectionBase } from "types/product";
const Collections: React.FC = () => {
  const [collections, setCollections] = useState<ICollectionBase[]>([]);
  useEffect(() => {
    (async () => {
      const collections = await fetchCollections();
      setCollections(collections);
    })();
  }, []);
  return (
    <Section>
      <h3 className="container" style={{ textAlign: "left" }}>
        Shop the collections
      </h3>
      <Carousel itemCount={collections.length} itemW={400} gap={20}>
        {collections.map((collection, idx) => (
          <Card
            image={collection.image}
            heading={collection.name}
            description={collection.shortDesc}
            slug={`/collections/${collection.slug}`}
            width={`${100 / collections.length}%`}
            key={idx}
          ></Card>
        ))}
      </Carousel>
    </Section>
  );
};
const Section = styled.section`
  margin-bottom: 100px;
`;
export default Collections;
