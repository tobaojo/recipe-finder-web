"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Option = {
  label: string;
  value: string;
};

const options: Option[] = [
  { label: "0 Minutes", value: "0" },
  { label: "10 Minutes", value: "10" },
  { label: "20 Minutes", value: "20" },
  { label: "30 Minutes", value: "30" },
  { label: "45 Minutes", value: "45" },
  { label: "60 Minutes", value: "60" },
];

const NewPrepTimeFilter = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const maxPrepTime = searchParams.get("prepMinutes");

  const handleChange = (value: string) => {
    setSelected((prev) => {
      if (prev.includes(Number(value))) {
        return prev.filter((v) => v !== Number(value));
      } else {
        return [Number(value)];
      }
    });
    if (value) {
      router.push(`/recipes?prepMinutes=${value}`);
    } else {
      router.push("/recipes");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between rounded-lg border border-gray-300 bg-white p-4 text-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FE9F6B]"
      >
        <span className="truncate text-lg">Max Prep Time</span>
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="max-h-60 overflow-y-auto p-2">
            {options.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(Number(option.value))}
                  value={maxPrepTime === option.value ? option.value : ""}
                  onChange={() => handleChange(option.value)}
                  className="h-4 w-4 rounded border-gray-300 text-[#FE9F6B] focus:ring-[#FE9F6B]"
                />
                <span className="text-lg text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPrepTimeFilter;
