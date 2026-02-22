import Image from "next/image";
import bulletIcon from "../../../public/icon-bullet-point.svg";

type FoodPhilosophySectionProps = {
  id: number;
  title: string;
  foodPhilosophyItems: {
    id: number;
    foodPhilosophyItemTitle: string;
    foodPhilosphyItemDescription: string;
  }[];
};

const FoodPhilosophySection = ({
  foodPhilosophy,
}: {
  foodPhilosophy: FoodPhilosophySectionProps;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-4xl font-extrabold mb-1">{foodPhilosophy.title}</h2>
      {foodPhilosophy.foodPhilosophyItems.map((item) => (
        <div key={item.id} className="flex flex-col gap-2">
          <div className="flex flex-row gap-4 items-center">
            <Image src={bulletIcon} alt="Bullet Point" width={24} height={24} />
            <h3 className="text-2xl font-bold">
              {item.foodPhilosophyItemTitle}
            </h3>
          </div>
          <p className="text-lg">{item.foodPhilosphyItemDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodPhilosophySection;
