import { getAboutPage } from "../lib/api";
import AboutHero from "./components/AboutHero";
import BeyondThePlateSection from "./components/BeyondThePlateSection";
import FoodPhilosophySection from "./components/FoodPhilosophySection";
import WhyWeExistSection from "./components/WhyWeExistSection";

const AboutPage = async () => {
  const aboutData = await getAboutPage();
  const aboutHero = aboutData?.aboutHero;
  const whyWeExist = aboutData?.whyWeExist;
  const foodPhilosophy = aboutData?.foodPhilosophy;
  const beyondThePlate = aboutData?.beyondThePlate;

  const aboutHeroWithImageUrl = {
    ...aboutHero,
    imageUrl: `${process.env.STRAPI_URL}${aboutHero?.heroImage?.url}`,
    width: aboutHero?.heroImage?.width,
    height: aboutHero?.heroImage?.height,
  };

  const beyondThePlateWithImageUrl = {
    ...beyondThePlate,
    image: {
      url: `${process.env.STRAPI_URL}${beyondThePlate?.image?.url}`,
      width: beyondThePlate?.image?.width,
      height: beyondThePlate?.image?.height,
    },
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <AboutHero aboutHero={aboutHeroWithImageUrl} />
      <WhyWeExistSection whyWeExist={whyWeExist} />
      <FoodPhilosophySection foodPhilosophy={foodPhilosophy} />
      <BeyondThePlateSection beyondThePlate={beyondThePlateWithImageUrl} />
    </div>
  );
};

export default AboutPage;
