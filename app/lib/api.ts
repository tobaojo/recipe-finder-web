export async function getHomePage() {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/homepage?populate[hero][populate]=heroImage&populate[features][populate][featureItem][populate]=featureItemIcon&populate[realLife][populate]=realLifeImage&populate[callToActionFooter][populate]=*`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch homepage data");
  }
  const data = await res.json();
  return data.data;
}

export async function getAboutPage() {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/about?populate[aboutHero][populate]=*&populate[whyWeExist][populate]=*&populate[foodPhilosophy][populate]=*&populate[beyondThePlate][populate]=image&populate[callToActionSection][populate]=*`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }
  const data = await res.json();
  return data.data;
}

export async function getRecipesPage() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/recipes-page`);
  if (!res.ok) {
    throw new Error("Failed to fetch recipes page data");
  }
  const data = await res.json();
  return data.data;
}

export async function getRecipes() {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/recipes?populate=image`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch recipes data");
  }
  const data = await res.json();
  return data.data;
}

export async function getRecipeBySlug(slug: string) {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/recipes?filters[slug][$eq]=${slug}&populate=image`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch recipe data");
  }
  const data = await res.json();
  return data.data[0];
}
