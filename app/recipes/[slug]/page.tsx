import { getRecipeBySlug, getRecipes } from "@/app/lib/api";
import {
  RecipeIngredientType,
  RecipeInstructionsType,
  RecipeType,
} from "@/app/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "./components/Breadcrumb";
import CookTimeIcon from "../../../public/icon-cook-time.svg";
import PrepTimeIcon from "../../../public/icon-prep-time.svg";
import ServingsIcon from "../../../public/icon-servings.svg";
import bulletIcon from "../../../public/icon-bullet-point.svg";

export async function generateStaticParams() {
  const recipes = await getRecipes();
  return recipes.map((recipe: RecipeType) => ({
    slug: recipe.slug,
  }));
}

type props = {
  params: {
    slug: string;
  };
};

const RecipePage = async ({ params }: props) => {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);
  console.log(recipe);

  const imageUrl = `${process.env.STRAPI_URL}${recipe?.image?.url}`;
  const subTitle = recipe.overview[0]?.children[0]?.text;
  const ingredients = recipe.ingredients;
  const instructions = recipe.instructions;
  if (!recipe) {
    notFound();
  }

  return (
    <div className="my-8 flex flex-col gap-4">
      <Breadcrumb path={recipe.title} />
      <div className="container mx-auto flex flex-col  gap-6">
        {recipe.image && (
          <Image
            src={imageUrl}
            alt={recipe.image.alternativeText}
            width={recipe.image.width}
            height={recipe.image.height}
            className="rounded-xl"
          />
        )}
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        {subTitle && <h2 className="text-xl ">{subTitle}</h2>}
        <div className="w-full grid grid-cols-2 gap-4 mt-2">
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
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">Ingredients</h4>
          <ul className="">
            {ingredients.map((ingredient: RecipeIngredientType) => (
              <li key={ingredient.id} className="flex items-center gap-2 mb-2">
                <Image
                  src={bulletIcon}
                  alt="Bullet Point Icon"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <p className="text-xl">
                  {ingredient.quantity} {ingredient.unit} {ingredient.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">Instructions</h4>
          <ul className="">
            {instructions.map((instruction: RecipeInstructionsType) => (
              <li key={instruction.id} className="flex items-center gap-2 mb-2">
                <Image
                  src={bulletIcon}
                  alt="Bullet Point Icon"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <p className="text-xl">
                  {instruction.description[0]?.children[0]?.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
