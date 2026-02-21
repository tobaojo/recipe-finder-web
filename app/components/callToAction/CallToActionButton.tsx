"use client";
import Button from "@/app/ui/Button";

const CallToActionButton = () => {
  return (
    <Button
      className="w-[65%] md:w-auto px-6 py-4 bg-[#163A34] text-white rounded-lg"
      onClick={() => console.log("first")}
    >
      Start Browsing
    </Button>
  );
};

export default CallToActionButton;
