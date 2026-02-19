type WhyWeExistSectionProps = {
  whyWeExist: {
    title: string;
    reasons: { id: number; reasonTitle: string; reasonDescription: string }[];
  };
};

const WhyWeExistSection = ({ whyWeExist }: WhyWeExistSectionProps) => {
  return (
    <div>
      <h2>{whyWeExist.title}</h2>
      {whyWeExist.reasons.map((reason) => (
        <div key={reason.id}>
          <h3>{reason.reasonTitle}</h3>
          <p>{reason.reasonDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyWeExistSection;
