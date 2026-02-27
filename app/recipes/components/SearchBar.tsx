"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || searchParams.get("ingredients") || "",
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
      router.push(
        `/recipes?search=${encodeURIComponent(searchTerm)}` +
          `&ingredients=${encodeURIComponent(searchTerm)}`,
      );
    } else {
      router.push("/recipes");
    }
  };
  return (
    <form onSubmit={handleSearch} className="lg:w-1/3">
      <input
        type="text"
        name="search"
        placeholder="Search by name or ingredient..."
        className="w-full px-4 py-3 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-[#163a34]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
