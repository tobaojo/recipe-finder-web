"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  hero: {
    id?: number;
    title: string;
    subtitle: string;
    callToActionHero: string;
    heroImage?: {
      url: string;
      width: number;
      height: number;
    };
    imageUrl: string;
  };
}

export default function HeroSection({ hero }: HeroSectionProps) {
  return (
    <div className="container flex flex-col gap-6 mx-auto py-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-extrabold mb-1">{hero.title}</h1>
        <p className="text-2xl">{hero.subtitle}</p>
        <Link
          href="/recipes"
          passHref
          className="w-[50%] md:w-auto px-6 py-4 bg-[#163A34] text-white rounded-lg"
        >
          <span className="text-lg">{hero.callToActionHero}</span>
        </Link>
        <Image
          src={hero.imageUrl}
          alt={hero.title}
          width={hero.heroImage?.width}
          height={hero.heroImage?.height}
          className="w-full h-auto object-cover rounded-lg border-3 border-white"
        />
      </div>
    </div>
  );
}
