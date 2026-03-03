import { FeatureItemType } from "@/app/types/types";
import Image from "next/image";

const FeatureItem = ({ featureItem }: { featureItem: FeatureItemType }) => {
  return (
    <li className="flex flex-col gap-4 lg:text-centerlg:items-center">
      <Image
        src={featureItem.featureItemIcon.url}
        alt={featureItem.featureItemTitle}
        width={featureItem.featureItemIcon?.width}
        height={featureItem.featureItemIcon?.height}
        className="bg-white rounded-xl p-2 flex items-center justify-center w-16 h-16 object-contain shadow-md"
      />
      <h3 className="text-3xl font-bold">{featureItem.featureItemTitle}</h3>
      <p className="text-lg lg:w-100">{featureItem.featureItemDescription}</p>
    </li>
  );
};

export default FeatureItem;
