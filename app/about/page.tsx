import CallToAction from "../components/callToAction/CallToAction";
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
  console.log(beyondThePlate);

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
      alternativeText: beyondThePlate?.image?.alternativeText || "",
    },
  };

  return (
    <div className="container mx-auto py-6 gap-10 lg:gap-20 flex flex-col">
      <AboutHero aboutHero={aboutHeroWithImageUrl} />
      <WhyWeExistSection whyWeExist={whyWeExist} />
      <FoodPhilosophySection foodPhilosophy={foodPhilosophy} />
      <BeyondThePlateSection beyondThePlate={beyondThePlateWithImageUrl} />
      <CallToAction />
    </div>
  );
};

export default AboutPage;
