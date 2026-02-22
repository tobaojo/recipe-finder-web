import { RealLifeSectionType, RealLifeType } from "@/app/types/types";
import Image from "next/image";

const RealLifeSection = ({ realLife }: { realLife: RealLifeType }) => {
  const sections = realLife?.realLifeSection.map(
    (item: RealLifeSectionType) => item,
  );

  const paragraphTexts = sections.map(
    (section: RealLifeSectionType) => section.children[0].text,
  );

  return (
    <div className="container flex flex-col gap-6 mx-auto py-8">
      <h2 className="text-4xl font-extrabold mb-1">
        {realLife?.realLifeTitle}
      </h2>
      <div className="flex flex-col gap-4">
        {paragraphTexts.map((text: string, index: number) => (
          <div key={index}>
            <p className="text-xl">{text}</p>
          </div>
        ))}
      </div>
      <Image
        src={realLife?.realLifeImage.url}
        alt="Real Life Image"
        width={500}
        height={300}
        className="rounded-xl"
      />
    </div>
  );
};

export default RealLifeSection;
