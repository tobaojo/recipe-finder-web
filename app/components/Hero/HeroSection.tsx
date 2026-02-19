"use client";

import Button from "../../ui/Button";
import Image from "next/image";

interface HeroSectionProps {
  hero: {
    id?: number;
    title: string;
    subtitle: string;
    callToActionHero: string;
    heroImage?: {
      url: string;
    };
    imageUrl: string;
  };
}

export default function HeroSection({ hero }: HeroSectionProps) {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-extrabold mb-4">{hero.title}</h1>
      <p>{hero.subtitle}</p>
      <Button onClick={() => console.log("Button clicked!")}>
        <span>{hero.callToActionHero}</span>
      </Button>
      <Image src={hero.imageUrl} alt={hero.title} width={600} height={400} />
    </div>
  );
}
