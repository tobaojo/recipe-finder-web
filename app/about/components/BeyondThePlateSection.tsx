type BeyondThePlateSectionProps = {
  id: number;
  title: string;
  description: {
    type: string;
    format: string;
    children: { text: string; children?: { text: string }[] }[];
  }[];
  image: { url: string; width: number; height: number };
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
    <div>
      <h2>{beyondThePlate.title}</h2>
      <p>{descriptionParagaph}</p>
      <ul>
        {reasonitems.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
    </div>
  );
};

export default BeyondThePlateSection;
