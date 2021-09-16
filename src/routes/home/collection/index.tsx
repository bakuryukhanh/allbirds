import { Card } from "components/card";
import Carousel from "components/slider";
import React, { useEffect, useState } from "react";
import { getCollections } from "serviceAPIs";
import styled from "styled-components";
import { CollectionType } from "types/collections";
const Collections: React.FC = () => {
  const [collections, setCollections] = useState<CollectionType[]>([]);
  useEffect(() => {
    const collections = getCollections();
    setCollections(collections);
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
            heading={collection.title}
            description={collection.description}
            slug={collection.slug}
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
