"use client";

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
        <h1 className="text-5xl lg:text-7xl font-black mb-1 lg:text-center">
          {hero.title}
        </h1>
        <p className="text-2xl lg:text-center lg:mx-auto w-[90%] lg:w-180">
          {hero.subtitle}
        </p>
        <Link
          href="/recipes"
          passHref
          className="w-45 px-6 py-4 bg-[#163A34] text-white rounded-lg lg:mx-auto"
        >
          <span className="text-lg">{hero.callToActionHero}</span>
        </Link>
        <Image
          src={hero.imageUrl}
          alt={hero.title}
          width={hero.heroImage?.width}
          height={hero.heroImage?.height}
          className="rounded-lg border-6 border-white h-auto mx-auto"
        />
      </div>
    </div>
  );
}
