import React from "react";
import Link from "next/link";

interface Feature {
  title: string;
  desc: string;
}

interface Stat {
  label: string;
  value: string;
}

interface ProjectImpactProps {
  solutionData?: {
    header: string;
    bodyText: string;
    features: Feature[];
  };
  metricsData?: {
    header: string;
    bodyText: string;
    stats: Stat[];
  };
  nextProjectSlug?: string;
  prevProjectSlug?: string;
  nextProjectTitle?: string;
  prevProjectTitle?: string;
}

const ProjectImpact = ({
  solutionData,
  metricsData,
  nextProjectSlug,
  prevProjectSlug,
  nextProjectTitle,
  prevProjectTitle,
}: ProjectImpactProps) => {
  return (
    <main className="section-gap text-foreground">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Solution Section Header */}
        {solutionData && (
          <div className="text-center mb-7 md:mb-14 xl:mb-16">
            <h2 className="section-title mb-6 tracking-tight text-foreground">
              {solutionData.header}
            </h2>
            <p className="description">{solutionData.bodyText}</p>
          </div>
        )}

        {/* Top Text Grid (Features) */}
        {solutionData?.features && solutionData.features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-secondary section-gap border-2 border-secondary">
            {solutionData.features.map((feature, idx) => (
              <div key={idx} className="space-y-2 px-4 md:px-8 lg:px-16 py-5">
                <h3 className="item-title">{feature.title}</h3>
                <div className="text-foreground/70 text-base md:text-lg lg:text-xl font-medium">
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Metrics Section */}
        {metricsData && (
          <div className="section-gap">
            <div className="text-center max-w-4xl mx-auto mb-7 md:mb-14 xl:mb-16">
              <h2 className="item-title">{metricsData.header}</h2>
              <p className="description">{metricsData.bodyText}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-secondary divide-y-2 md:divide-x-2 md:divide-y-0 divide-secondary">
              {metricsData.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col space-y-4 px-4 py-6">
                  <div className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="w-full h-0.5 bg-gray-100 mx-auto" />

        {/* Project Navigation Footer */}
        <div className="flex justify-between items-center gap-8 section-gap">
          {/* Previous Project */}
          <Link
            href={`/projects/${prevProjectSlug}`}
            className="flex items-center gap-4 sm:gap-6 group cursor-pointer w-full sm:w-auto hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-black transition-colors group-hover:bg-gray-200 shrink-0">
              &lt; Prev
            </div>
            <span className="hidden md:block text-xl md:text-2xl font-medium tracking-tight text-black whitespace-nowrap">
              {prevProjectTitle}
            </span>
          </Link>

          {/* Next Project */}
          <Link
            href={`/projects/${nextProjectSlug}`}
            className="flex items-center justify-end gap-4 sm:gap-6 group cursor-pointer w-full sm:w-auto hover:opacity-80 transition-opacity"
          >
            <span className="hidden md:block text-xl md:text-2xl font-medium tracking-tight text-black whitespace-nowrap text-right">
              {nextProjectTitle}
            </span>
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-black transition-colors group-hover:bg-gray-200 shrink-0">
              Next &gt;
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectImpact;
