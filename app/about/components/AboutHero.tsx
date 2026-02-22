import Image from "next/image";

interface AboutHeroProps {
  aboutHero: {
    title: string;
    subtitle: string;
    imageUrl: string;
    width: number;
    height: number;
    description: { type: string; children: { text: string }[] }[];
  };
}

const AboutHero = ({ aboutHero }: AboutHeroProps) => {
  const descriptionParagaphs = aboutHero.description.map(
    (descriptionParagraph) => {
      return descriptionParagraph?.children[0]?.text;
    },
  );
  const descriptionParagraph1 = descriptionParagaphs[0];
  const descriptionParagraph2 = descriptionParagaphs[1];
  return (
    <div className="flex flex-col gap-4">
      <span className="px-2 py-1 rounded-md text-md bg-[#FE9F6B] text-[#163A34] font-bold w-27 text-nowrap">
        {aboutHero.title}
      </span>
      <h2 className="text-4xl font-extrabold mb-1">{aboutHero.subtitle}</h2>
      <p className="text-lg">{descriptionParagraph1}</p>
      <p className="text-lg">{descriptionParagraph2}</p>
      <Image
        src={aboutHero.imageUrl}
        alt={aboutHero.title}
        width={600}
        height={400}
        className="rounded-xl"
      />
    </div>
  );
};

export default AboutHero;
