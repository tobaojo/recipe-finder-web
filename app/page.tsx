import { getHomePage } from "./lib/api";
import HeroSection from "./components/Hero/HeroSection";
import FeatureSection from "./components/Features/FeatureSection";
import {
  FeatureItemType,
  RealLifeChildType,
  RealLifeSectionType,
  RealLifeType,
} from "./types/types";
import RealLifeSection from "./components/RealLife/RealLifeSection";

export default async function Home() {
  const homepageData = await getHomePage();
  const hero = homepageData?.hero;
  const features = homepageData?.features;
  const realLife = homepageData?.realLife;

  const heroWithImageUrl = {
    ...hero,
    imageUrl: `${process.env.STRAPI_URL}${hero?.heroImage?.url}`,
    height: hero?.heroImage?.height,
    width: hero?.heroImage?.width,
  };

  const featuresWithImageUrls = {
    id: features?.id,
    featureTitle: features?.featureTitle,
    featureItem: features?.featureItem.map((item: FeatureItemType) => ({
      ...item,
      featureItemIcon: {
        ...item.featureItemIcon,
        url: `${process.env.STRAPI_URL}${item.featureItemIcon?.url}`,
      },
    })),
  };

  const realLifeWithImageUrls: RealLifeType = {
    id: realLife?.id,
    realLifeTitle: realLife?.realLifeTitle,
    realLifeSection: realLife?.realLifeSection.map(
      (section: RealLifeSectionType) => ({
        ...section,
        children: section.children.map((child: RealLifeChildType) => ({
          ...child,
          text: child.text,
        })),
      }),
    ),
    realLifeImage: {
      ...realLife?.realLifeImage,
      url: `${process.env.STRAPI_URL}${realLife?.realLifeImage?.url}`,
    },
  };

  return (
    <div>
      <HeroSection hero={heroWithImageUrl} />
      <FeatureSection features={featuresWithImageUrls} />
      <RealLifeSection realLife={realLifeWithImageUrls} />
    </div>
  );
}
