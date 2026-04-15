import React from "react";
import Link from "next/link";
import { Project } from "@/types";

type ProjectHeroProps = Pick<
  Project,
  | "title"
  | "categories"
  | "client"
  | "date"
  | "websiteUrl"
  | "heroImage"
  | "gallery"
>;

const ProjectHero = ({
  title,
  categories,
  client,
  date,
  websiteUrl,
  heroImage,
  gallery = [],
}: ProjectHeroProps) => {
  return (
    <section>
      {/* Meta bar */}
      <div className="border-y border-gray-100">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="py-3 md:py-4 lg:py-8 flex md:flex-col xl:flex-row items-center justify-center text-sm">
              <span className="text-gray-600 text-lg lg:text-xl mr-1">
                Category -
              </span>
              <span className="font-medium text-lg lg:text-xl text-gray-900 line-clamp-1">
                {categories[0] || "N/A"}
              </span>
            </div>
            <div className="py-3 md:py-4 lg:py-8 flex md:flex-col xl:flex-row items-center justify-center text-sm">
              <span className="text-gray-600 text-lg lg:text-xl mr-1">
                Clients -
              </span>
              <span className="font-medium text-lg lg:text-xl text-gray-900 line-clamp-1">
                {client}
              </span>
            </div>
            <div className="py-3 md:py-4 lg:py-8 flex md:flex-col xl:flex-row items-center justify-center text-sm">
              <span className="text-gray-600 text-lg lg:text-xl mr-1">
                Date -
              </span>
              <span className="font-medium text-lg lg:text-xl text-gray-900">
                {date}
              </span>
            </div>
            <div className="py-3 md:py-4 lg:py-8 flex md:flex-col xl:flex-row items-center justify-center text-sm">
              <span className="text-gray-600 text-lg lg:text-xl mr-1">
                URL -
              </span>
              <Link
                href={websiteUrl}
                target="_blank"
                className="font-medium text-blue-600 text-lg lg:text-xl hover:underline transition-colors line-clamp-1"
              >
                {websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="w-full overflow-hidden">
        <div className="flex flex-col md:hidden">
          <div className="w-full aspect-4/3 relative overflow-hidden bg-zinc-900">
            <img
              src={heroImage}
              alt={`${title} Main`}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full aspect-4/3 relative overflow-hidden bg-zinc-800">
            <img
              src={gallery[0]}
              alt={`${title} Gallery 1`}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex w-full">
            <div className="w-1/2 aspect-square relative overflow-hidden bg-zinc-700">
              <img
                src={gallery[1]}
                alt={`${title} Gallery 2`}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/2 aspect-square relative overflow-hidden bg-zinc-600">
              <img
                src={gallery[2]}
                alt={`${title} Gallery 3`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div
          className="hidden md:flex w-full"
          style={{ height: "clamp(320px, 55vw, 530px)" }}
        >
          <div className="w-1/2 h-full relative overflow-hidden bg-zinc-900 shrink-0 border border-white">
            <img
              src={heroImage}
              alt={`${title} Main`}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-1/2 h-full flex flex-col shrink-0">
            <div className="w-full h-1/2 relative overflow-hidden bg-zinc-800 border border-white">
              <img
                src={gallery[0]}
                alt={`${title} Gallery 1`}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-1/2 flex">
              <div className="w-1/2 h-full relative overflow-hidden bg-zinc-700 border border-white">
                <img
                  src={gallery[1]}
                  alt={`${title} Gallery 2`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-1/2 h-full relative overflow-hidden bg-zinc-600 border border-white">
                <img
                  src={gallery[2]}
                  alt={`${title} Gallery 3`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
