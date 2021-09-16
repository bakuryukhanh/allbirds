import Collections from "./collection";
import Favourite from "./favorite";
import Hero from "./hero";
import Intro from "./intro";
import { SecondaryHero } from "./secondaryHero";
import { Stories } from "./stories";

export const HomePage: React.FC<{}> = () => {
  return (
    <>
      <Hero></Hero>
      <Favourite></Favourite>
      <Intro></Intro>
      <Collections></Collections>
      <SecondaryHero></SecondaryHero>
      <Stories></Stories>
    </>
  );
};

export default HomePage;
