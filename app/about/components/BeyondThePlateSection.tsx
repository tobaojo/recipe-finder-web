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
  console.log(beyondThePlate);
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
    <div className="flex flex-col gap-6">
      <h2 className="text-4xl font-extrabold mb-1">{beyondThePlate.title}</h2>
      <p className="text-lg">{descriptionParagaph}</p>
      <ul className="list-disc list-inside text-lg">
        {reasonitems.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
      <Image
        src={beyondThePlate.image.url}
        alt={beyondThePlate.image.alternativeText}
        width={beyondThePlate.image.width}
        height={beyondThePlate.image.height}
        className="rounded-xl"
      />
    </div>
  );
};

export default BeyondThePlateSection;
