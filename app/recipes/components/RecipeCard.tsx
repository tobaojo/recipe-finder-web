import { RecipeType } from "@/app/types/types";
import Image from "next/image";
import CookTimeIcon from "../../../public/icon-cook-time.svg";
import PrepTimeIcon from "../../../public/icon-prep-time.svg";
import ServingsIcon from "../../../public/icon-servings.svg";

type RecipeCardProps = {
  recipe: RecipeType;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  console.log(recipe);

  return (
    <div className="p-2 bg-white rounded-xl flex flex-col">
      <Image
        src={recipe.image.url}
        alt={recipe.image.alternativeText || recipe.title}
        width={recipe.image.width}
        height={recipe.image.height}
        className="rounded-xl"
      />
      <div>
        <h2 className="text-2xl font-semibold mt-4">{recipe.title}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-row items-center">
            <Image
              src={PrepTimeIcon}
              alt="Prep Time Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <p className="text-gray-600">
              Prep Time: {recipe.prepMinutes} mins
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              src={ServingsIcon}
              alt="Servings Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <p className="text-gray-600">Servings: {recipe.servings}</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Image
            src={CookTimeIcon}
            alt="Cook Time Icon"
            width={24}
            height={24}
            className="mr-2"
          />
          <p className="text-gray-600">Cook Time: {recipe.cookMinutes} mins</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
