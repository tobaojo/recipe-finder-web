import Image from "next/image";
type BeyondThePlateSectionProps = {
  id: number;
  title: string;
  description: {
    type: string;
    format: string;
    children: { text: string; children?: { text: string }[] }[];
  }[];
  image: {
    url: string;
    width: number;
    height: number;
    alternativeText: string;
  };
};

const BeyondThePlateSection = ({
  beyondThePlate,
}: {
  beyondThePlate: BeyondThePlateSectionProps;
}) => {
  const descriptionParagaph = beyondThePlate.description.map(
    (descriptionParagraph) => {
      return descriptionParagraph?.children[0]?.text;
    },
  );

  const descriptionParagraphs = beyondThePlate.description.filter(
    (description) => {
      if (description.format === "unordered") {
        return description;
      }
    },
  );

  const reasons = descriptionParagraphs.map((desc) => desc.children[0]);
  const reasonitems = reasons.map((children) => children?.children?.[0]?.text);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-1">
          {beyondThePlate.title}
        </h2>
        <p className="text-lg lg:text-xl">{descriptionParagaph}</p>
        <ul className="list-disc list-inside text-lg lg:text-xl">
          {reasonitems.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>

      <Image
        src={beyondThePlate.image.url}
        alt={beyondThePlate.image.alternativeText}
        width={800}
        height={500}
        className="rounded-xl"
      />
    </div>
  );
};

export default BeyondThePlateSection;
