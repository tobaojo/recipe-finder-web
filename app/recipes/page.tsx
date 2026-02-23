import { getRecipes, getRecipesPage } from "../lib/api";
import { RecipeType } from "../types/types";
import CookTimeFilter from "./components/cookTimeFilter";
import PrepTimeFilter from "./components/PrepTimeFilter";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";

type RecipesProps = {
  searchParams: Promise<{
    prepMinutes?: string;
    cookMinutes?: string;
    search?: string;
    ingredients?: string;
  }>;
};

const RecipesPage = async ({ searchParams }: RecipesProps) => {
  const { prepMinutes, cookMinutes, search, ingredients } = await searchParams;
  const maxPrepTime = prepMinutes ? parseInt(prepMinutes) : undefined;
  const maxCookTime = cookMinutes ? parseInt(cookMinutes) : undefined;

  const recipesData = await getRecipesPage();
  const recipes = await getRecipes({
    maxPrepTime,
    maxCookTime,
    ingredients: ingredients ? ingredients.split(",") : undefined,
    search,
  });

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
    <div className="container mx-auto py-5">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p>{subTitle}</p>
      <PrepTimeFilter />
      <CookTimeFilter />
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {recipesWithImages.map((recipe: RecipeType) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
