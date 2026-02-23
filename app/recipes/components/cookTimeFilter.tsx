"use client";
import { useRouter, useSearchParams } from "next/navigation";

const CookTimeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const maxCookTime = searchParams.get("cookMinutes");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value) {
      router.push(`/recipes?cookMinutes=${value}`);
    } else {
      router.push("/recipes");
    }
  };

  return (
    <div className="mt-4 flex items-center gap-2 bg-white p-4 rounded-lg shadow-md mx-auto">
      <label htmlFor="cookTime">Max Cook Time:</label>
      <select id="cookTime" value={maxCookTime || ""} onChange={handleChange}>
        <option value="">All</option>
        <option value="5">5 mins</option>
        <option value="10">10 mins</option>
        <option value="15">15 mins</option>
        <option value="30">30 mins</option>
        <option value="45">45 mins</option>
        <option value="60">60 mins</option>
      </select>
    </div>
  );
};

export default CookTimeFilter;
