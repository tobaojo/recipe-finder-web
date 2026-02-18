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
  console.log(features);
  return (
    <div>
      <h2>{features.featureTitle}</h2>
      <ul>
        {features.featureItem.map((item, index) => (
          <FeatureItem key={index} featureItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default FeatureSection;
