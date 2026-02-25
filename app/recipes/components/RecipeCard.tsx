import { RecipeType } from "@/app/types/types";
import Image from "next/image";
import CookTimeIcon from "../../../public/icon-cook-time.svg";
import PrepTimeIcon from "../../../public/icon-prep-time.svg";
import ServingsIcon from "../../../public/icon-servings.svg";
import Link from "next/link";

type RecipeCardProps = {
  recipe: RecipeType;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="p-4 bg-white rounded-xl flex flex-col gap-4 shadow-md">
      <Image
        src={recipe.image.url}
        alt={recipe.image.alternativeText || recipe.title}
        width={recipe.image.width}
        height={recipe.image.height}
        className="rounded-xl"
      />
      <div>
        <h2 className="text-2xl font-semibold lg:h-14">{recipe.title}</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-row items-center">
            <Image
              src={PrepTimeIcon}
              alt="Prep Time Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <p className="text-gray-600">Prep: {recipe.prepMinutes} mins</p>
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
        <div className="flex flex-row items-center mt-2">
          <Image
            src={CookTimeIcon}
            alt="Cook Time Icon"
            width={24}
            height={24}
            className="mr-2"
          />
          <p className="text-gray-600">Cook: {recipe.cookMinutes} min(s)</p>
        </div>
      </div>
      <Link
        className={
          "w-full px-6 py-4 bg-[#163A34] text-white rounded-full mt-4 self-center text-lg font-semibold text-center"
        }
        href={`/recipes/${recipe.slug}`}
      >
        View Recipe
      </Link>
    </div>
  );
};

export default RecipeCard;
