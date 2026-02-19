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
