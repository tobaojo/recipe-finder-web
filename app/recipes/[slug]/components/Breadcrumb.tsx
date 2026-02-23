"use client";
import Link from "next/link";

type BreadcrumbProps = {
  path: string;
};
const Breadcrumb = ({ path }: BreadcrumbProps) => {
  return (
    <nav>
      <ol className="inline-flex items-center space-x-1">
        <li>
          <Link href="/recipes" className="text-gray-500 hover:underline">
            Recipes
          </Link>
        </li>
        <li>
          <span className="mx-2 text-gray-500">/</span>
        </li>
        <li className=" font-semibold">
          <Link href="#">{path}</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
