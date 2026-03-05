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
import CallToAction from "./components/callToAction/CallToAction";
import Squiggle from "../public/pattern-squiggle-1.svg";
import Image from "next/image";

export default async function Home() {
  const homepageData = await getHomePage();
  const hero = homepageData?.hero;
  const features = homepageData?.features;
  const realLife = homepageData?.realLife;

  const heroWithImageUrl = {
    ...hero,
    imageUrl: `${hero?.heroImage?.url}`,
    height: hero?.heroImage?.height,
    width: hero?.heroImage?.width,
  };

  const featuresWithImageUrls = {
    id: features?.id,
    featureTitle: features?.featureTitle,
    featureItem: features?.featureItem?.map((item: FeatureItemType) => ({
      ...item,
      featureItemIcon: {
        ...item.featureItemIcon,
        url: `${item.featureItemIcon?.url}`,
      },
    })),
  };

  const realLifeWithImageUrls: RealLifeType = {
    id: realLife?.id,
    realLifeTitle: realLife?.realLifeTitle,
    realLifeSection: realLife?.realLifeSection?.map(
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
      url: `${realLife?.realLifeImage?.url}`,
    },
  };

  return (
    <>
      <div className="container relative z-10 mx-auto py-6 gap-10 lg:gap-20 flex flex-col">
        <HeroSection hero={heroWithImageUrl} />
        <FeatureSection features={featuresWithImageUrls} />
        <RealLifeSection realLife={realLifeWithImageUrls} />
        <CallToAction />
      </div>
      <Image
        src={Squiggle}
        alt="Squiggle Pattern"
        className="pointer-events-none absolute top-70 left-0 -z-10 w-full hidden md:block"
      />
    </>
  );
}
