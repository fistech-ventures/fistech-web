import React from "react";
import Image from "next/image";
import { ISolution } from "@/types";
import { Plus } from "lucide-react";

export default function SolutionHero({ hero }: { hero?: ISolution["hero"] }) {
  return (
    <>
      <section className="max-w-6xl mx-auto px-2 aspect-8/3 mb-7 md:mb-9 lg:mb-12 xl:mb-20 flex flex-col gap-5 lg:gap-10 xl:gap-14">
        <Image
          width={2000}
          height={1000}
          src={hero?.coverImage || ""}
          alt={hero?.subtitle || ""}
          className="w-full h-full object-cover"
        />
        <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 lg:gap-7 xl:gap-12 justify-between">
          <div className="flex-1">
            <h4 className="description font-bold">{hero?.subtitle}</h4>
          </div>
          <div className="flex-1 xl:space-y-6 lg:space-y-5 md:space-y-4 space-y-3 text-base lg:text-xl font-medium">
            <p className="description">{hero?.description}</p>
            <ul className="list-none! xl:space-y-3">
              {hero?.features.map((item: string) => (
                <li key={item} className="flex items-center gap-2 capitalize">
                  <Plus size={12} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
