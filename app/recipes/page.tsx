import Link from "next/link";
import { getRecipes, getRecipesPage } from "../lib/api";
import { RecipeType } from "../types/types";
import RecipeCard from "./components/RecipeCard";

const RecipesPage = async () => {
  const recipesData = await getRecipesPage();
  const recipes = await getRecipes();

  const title = recipesData.title;
  const subTitle = recipesData.subTitle;

  const recipesWithImages = recipes.map((recipe: RecipeType) => {
    return {
      ...recipe,
      image: {
        id: recipe.image.id,
        url: `${process.env.STRAPI_URL}${recipe.image.url}`,
        width: recipe.image.width,
        height: recipe.image.height,
        alternativeText: recipe.image.alternativeText,
      },
    };
  });

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p>{subTitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {recipesWithImages.map((recipe: RecipeType) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
