import Image from "next/image";
import bulletIcon from "../../../public/icon-bullet-point.svg";
type WhyWeExistSectionProps = {
  whyWeExist: {
    title: string;
    reasons: { id: number; reasonTitle: string; reasonDescription: string }[];
  };
};

const WhyWeExistSection = ({ whyWeExist }: WhyWeExistSectionProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        <h2 className="text-4xl font-extrabold mb-1 flex-1">
          {whyWeExist.title}
        </h2>
        <div className="flex flex-col gap-2 flex-2">
          {whyWeExist.reasons.map((reason) => (
            <div key={reason.id} className="flex flex-col gap-2 mb-4">
              <div className="flex flex-row gap-4 items-center">
                <Image
                  src={bulletIcon}
                  alt="Bullet Point"
                  width={24}
                  height={24}
                />
                <h3 className="text-2xl font-bold">{reason.reasonTitle}</h3>
              </div>

              <p className="text-lg lg:text-xl">{reason.reasonDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWeExistSection;
