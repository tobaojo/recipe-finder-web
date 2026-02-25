import { FeatureItemType } from "@/app/types/types";
import FeatureItem from "./FeatureItem";

type FeatureSectionProps = {
  features: {
    id: number;
    featureTitle: string;
    featureItem: FeatureItemType[];
  };
};

const FeatureSection = ({ features }: FeatureSectionProps) => {
  return (
    <div className="container flex flex-col gap-6 mx-auto py-8">
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-1 lg:text-center">
        {features.featureTitle}
      </h2>
      <ul className="flex flex-col lg:flex-row lg:gap-2 gap-4 lg:self-center">
        {features.featureItem.map((item, index) => (
          <FeatureItem key={index} featureItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default FeatureSection;
