import { CollectionType } from "types/collections";
import { ProductBaseType, ProductType } from "types/product";
import data from "./productData.json";
const productsData = data as ProductType[];
const collectionsData = [
  {
    title: "Men Shoes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae possimus vitae minima deleniti ducimus recusandae aperiam repellendus suscipit corrupti magni.",
    image:
      "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_518/cms/5bsVXEcft43iJ68RVJuGoi/7a78f58ba02e05e11debac9294bfc91a/21Q3_perform-apparel_collection-carousel_1110x1110_10.jpg",
    slug: "men-shoes",
  },
  {
    title: "Women Shoes",
    description: "Lorem ipsum dolor sit, amet consectetur adipis",
    image:
      "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_518/cms/6JvIAShydFNhJMUpTHw5cd/018188a31b84f4e1a78ce594d1d21e64/Q3Wool-Move-NavTile-Men-App.jpg",
    slug: "women-shoes",
  },
  {
    title: "Men Tops",
    description: "Lorem ipsum dolor sit, amet consectetur",
    image:
      "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_518/cms/6RpPp3PceDTb0WlzucHe2E/77598e7cd9e8ecd2a910fc829721432f/Q3Tee-Carousel.jpg",
    slug: "men-tops",
  },
  {
    title: "Women Tops",
    description: "Lorem ipsum dolor sit, amet consectetur",
    image:
      "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_518/cms/1WXyUaqpiFC7Gxjo1UvtHF/1f21ad767fdde62622a725b45a7a1eeb/21Q2_neutrals-collection_carousel-card_1110x1110.jpg",

    slug: "women-tops",
  },
  {
    title: "Men Bottoms",
    description: "Lorem ipsum dolor sit, amet consectetur",
    image:
      "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_518/cms/22CPK93OfWiUuMT9t07ITw/d5990f7441de8ec5a1f718216c2526e0/Travel-_carousel_card.jpg",
    slug: "men-bottoms",
  },
  {
    title: "Women Bottoms",
    description: "Lorem ipsum dolor sit, amet",
    image:
      "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_518/cms/5eS3H3uCTTUypSdraD2ZYM/11fe428a62b6ae07c9ffda28a2d76e36/21Q2_basics-collection_carousel-card_1110x1110.jpg",
    slug: "women-bottoms",
  },
] as CollectionType[];

export const getCollections = (): CollectionType[] => {
  return collectionsData;
};

export const getProductsDataFromSlugs = (slug: string) => {
  return productsData.filter((product) => product.slug === slug)[0];
};

export const getImgsFromSlugAndColor = (slug: string, color: string) => {
  const product = productsData.filter((product) => product.slug === slug)[0];
  const colors = product.colors.filter((colorObj) => colorObj.name === color);
  return colors[0];
};

export const getCollectionProduct = (slug: string): ProductBaseType[] => {
  const products = productsData.filter((product) => {
    return product.collection === slug;
  });
  var formatProduct = products
    .map((product) => {
      return {
        title: product.title,
        price: product.price,
        slug: product.slug,
        collection: product.collection,
        img: product.colors[0].imgs[0],
      };
    })
    .filter((product) => product);
  return formatProduct;
};

export const getCollectionInfo = (slug: string) => {
  const collection = collectionsData.filter(
    (collection) => collection.slug === slug
  )[0];
  return collection;
};
