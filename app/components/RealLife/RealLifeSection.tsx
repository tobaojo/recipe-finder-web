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
    <div className="container flex flex-col lg:flex-row gap-6 mx-auto py-8 lg:items-center">
      <div className="flex flex-col gap-4 lg:gap-8">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-1 ">
          {realLife?.realLifeTitle}
        </h2>
        <div className="flex flex-col gap-4">
          {paragraphTexts.map((text: string, index: number) => (
            <div key={index}>
              <p className="text-xl lg:text-2xl">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <Image
        src={realLife?.realLifeImage.url}
        alt="Real Life Image"
        width={700}
        height={500}
        className="rounded-xl"
      />
    </div>
  );
};

export default RealLifeSection;
