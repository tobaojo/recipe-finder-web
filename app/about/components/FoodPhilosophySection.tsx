import React from "react";

type FoodPhilosophySectionProps = {
  id: number;
  title: string;
  foodPhilosophyItems: {
    id: number;
    foodPhilosophyItemTitle: string;
    foodPhilosophyItemDescription: string;
  }[];
};

const FoodPhilosophySection = ({
  foodPhilosophy,
}: {
  foodPhilosophy: FoodPhilosophySectionProps;
}) => {
  return (
    <div>
      <h2>{foodPhilosophy.title}</h2>
      {foodPhilosophy.foodPhilosophyItems.map((item) => (
        <div key={item.id}>
          <h3>{item.foodPhilosophyItemTitle}</h3>
          <p>{item.foodPhilosophyItemDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodPhilosophySection;
