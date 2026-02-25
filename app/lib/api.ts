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

export async function getRecipes(filters?: {
  maxPrepTime?: number;
  maxCookTime?: number;
  ingredients?: string[];
  search?: string;
}) {
  let url = `${process.env.STRAPI_URL}/api/recipes?populate=image`;

  const queryParts: string[] = [];

  if (filters?.maxPrepTime) {
    queryParts.push(`filters[prepMinutes][$lte]=${filters.maxPrepTime}`);
  }

  if (filters?.maxCookTime) {
    queryParts.push(`filters[cookMinutes][$lte]=${filters.maxCookTime}`);
  }

  const normalizedSearch = filters?.search?.trim();
  if (normalizedSearch) {
    const encodedSearch = encodeURIComponent(normalizedSearch);
    queryParts.push(`filters[$or][0][title][$containsi]=${encodedSearch}`);
    queryParts.push(
      `filters[$or][1][ingredients][name][$containsi]=${encodedSearch}`,
    );
  }

  if (filters?.ingredients && filters.ingredients.length > 0) {
    filters.ingredients.forEach((ingredient, index) => {
      const normalizedIngredient = ingredient.trim();
      if (!normalizedIngredient) {
        return;
      }

      const encodedIngredient = encodeURIComponent(normalizedIngredient);
      queryParts.push(
        `filters[$and][${index}][ingredients][name][$containsi]=${encodedIngredient}`,
      );
    });
  }

  if (queryParts.length > 0) {
    url += `&${queryParts.join("&")}`;
  }

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error("Failed to fetch recipes data");
  }
  const data = await res.json();
  return data.data;
}

export async function getRecipeBySlug(slug: string) {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/recipes?filters[slug][$eq]=${slug}&populate[ingredients][populate]=*&populate=image&populate[instructions][populate]=*`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch recipe data");
  }
  const data = await res.json();
  return data.data[0];
}

export async function getFooter() {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/call-to-action-footer?populate=*`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch footer data");
  }
  const data = await res.json();
  return data.data;
}

export const getSocialMediaLinks = async () => {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/social-links?populate=socialIcon`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch social media links");
  }
  const data = await res.json();
  return data.data;
};
