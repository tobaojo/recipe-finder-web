"use client";
import { useRouter, useSearchParams } from "next/navigation";

const PrepTimeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const maxPrepTime = searchParams.get("prepMinutes");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value) {
      router.push(`/recipes?prepMinutes=${value}`);
    } else {
      router.push("/recipes");
    }
  };

  return (
    <div className="mt-4 flex items-center gap-2 bg-white px-4 py-3  rounded-lg shadow-sm w-full">
      <label htmlFor="prepTime">Max Prep Time:</label>
      <select id="prepTime" value={maxPrepTime || ""} onChange={handleChange}>
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

export default PrepTimeFilter;
