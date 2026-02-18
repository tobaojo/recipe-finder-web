import { FeatureItemType } from "@/app/types/types";
import Image from "next/image";

const FeatureItem = ({ featureItem }: { featureItem: FeatureItemType }) => {
  return (
    <li>
      <Image
        src={featureItem.featureItemIcon.url}
        alt={featureItem.featureItemTitle}
        width={featureItem.featureItemIcon?.width}
        height={featureItem.featureItemIcon?.height}
      />
      {featureItem.featureItemTitle}: {featureItem.featureItemDescription}
    </li>
  );
};

export default FeatureItem;
