import { getHomePage } from "./lib/api";
import HeroSection from "./components/Hero/HeroSection";
import FeatureSection from "./components/Features/FeatureSection";
import { FeatureItemType } from "./types/types";

export default async function Home() {
  const homepageData = await getHomePage();
  const hero = homepageData?.hero;
  const features = homepageData?.features;

  const heroWithImageUrl = {
    ...hero,
    imageUrl: `${process.env.STRAPI_URL}${hero?.heroImage?.url}`,
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

  return (
    <div>
      <HeroSection hero={heroWithImageUrl} />
      <FeatureSection features={featuresWithImageUrls} />
    </div>
  );
}
