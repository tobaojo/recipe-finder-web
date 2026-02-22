import { getRecipeBySlug, getRecipes } from "@/app/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const recipes = await getRecipes();
  return recipes.map((recipe: any) => ({
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
  const imageUrl = `${process.env.STRAPI_URL}${recipe?.image?.url}`;

  if (!recipe) {
    notFound();
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <p>{recipe.description}</p>
      {recipe.image && (
        <Image
          src={imageUrl}
          alt={recipe.image.alternativeText}
          width={recipe.image.width}
          height={recipe.image.height}
        />
      )}
    </div>
  );
};

export default RecipePage;
