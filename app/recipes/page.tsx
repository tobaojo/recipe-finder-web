import Link from "next/link";
import { getRecipes, getRecipesPage } from "../lib/api";

const RecipesPage = async () => {
  const recipesData = await getRecipesPage();
  const recipes = await getRecipes();

  console.log(recipes);

  const title = recipesData.title;
  const subTitle = recipesData.subTitle;

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p>{subTitle}</p>
      {recipes.map((recipe: any) => (
        <div key={recipe.id} className="my-8">
          <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
          <Link
            href={`/recipes/${recipe.slug}`}
            className="text-blue-500 hover:underline"
          >
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipesPage;
