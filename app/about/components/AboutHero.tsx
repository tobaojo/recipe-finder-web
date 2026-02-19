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
    <div>
      <h1>{aboutHero.title}</h1>
      <h2>{aboutHero.subtitle}</h2>
      <p>{descriptionParagraph1}</p>
      <p>{descriptionParagraph2}</p>
      <Image
        src={aboutHero.imageUrl}
        alt={aboutHero.title}
        width={600}
        height={400}
      />
    </div>
  );
};

export default AboutHero;
