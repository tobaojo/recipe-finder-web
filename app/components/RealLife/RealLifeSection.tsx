import { RealLifeSectionType, RealLifeType } from "@/app/types/types";
import Image from "next/image";

const RealLifeSection = ({ realLife }: { realLife: RealLifeType }) => {
  console.log(realLife.realLifeImage);
  const sections = realLife?.realLifeSection.map(
    (item: RealLifeSectionType) => item,
  );

  const paragraphTexts = sections.map(
    (section: RealLifeSectionType) => section.children[0].text,
  );

  return (
    <div>
      <h2>{realLife?.realLifeTitle}</h2>
      <div className="flex flex-col gap-4">
        {paragraphTexts.map((text: string, index: number) => (
          <div key={index}>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <Image
        src={realLife?.realLifeImage.url}
        alt="Real Life Image"
        width={500}
        height={300}
      />
    </div>
  );
};

export default RealLifeSection;
