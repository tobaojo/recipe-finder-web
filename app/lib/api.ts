export async function getHomePage() {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/homepage?populate[hero][populate]=heroImage&populate[features][populate][featureItem][populate]=featureItemIcon&populate[realLife][populate]=*`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch homepage data");
  }
  const data = await res.json();
  return data.data;
}
