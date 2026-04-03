import React from 'react';
import Link from 'next/link';

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
}

const ProjectImpact = ({ solutionData, metricsData }: ProjectImpactProps) => {
  return (
    <section className="py-24 bg-white text-gray-900 font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Solution Section Header */}
        {solutionData && (
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-black">
              {solutionData.header}
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-800 opacity-90">
              {solutionData.bodyText}
            </p>
          </div>
        )}

        {/* Top Text Grid (Features) */}
        {solutionData?.features && solutionData.features.length > 0 && (
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32">
            {solutionData.features.map((feature, idx) => (
              <div key={idx} className="space-y-6 px-4 md:px-8 lg:px-16 py-5">
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                  {feature.title}
                </h3>
                <div className="space-y-6 text-gray-700 font-medium leading-relaxed">
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Metrics Section */}
        {metricsData && (
          <div className="mb-32">
            <div className="max-w-4xl mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-black">
                {metricsData.header}
              </h2>
              <p className="text-xl md:text-2xl font-medium text-gray-800 opacity-90">
                {metricsData.bodyText}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {metricsData.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col space-y-4 px-4 py-6 border-l-2 border-[#c6ff00]">
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
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

        <div className="w-full h-[2px] bg-gray-100 mx-auto mb-20" />

        {/* Project Navigation Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mt-16 pt-8">
          
          {/* Previous Project */}
          <Link href="#" className="flex items-center gap-4 sm:gap-6 group cursor-pointer w-full sm:w-auto hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-black transition-colors group-hover:bg-gray-200 shrink-0">
              &lt; Prev
            </div>
            <span className="text-xl md:text-2xl font-medium tracking-tight text-black whitespace-nowrap">
              Monarch Studio
            </span>
          </Link>
          
          {/* Next Project */}
          <Link href="#" className="flex items-center justify-end gap-4 sm:gap-6 group cursor-pointer w-full sm:w-auto hover:opacity-80 transition-opacity">
            <span className="text-xl md:text-2xl font-medium tracking-tight text-black whitespace-nowrap text-right">
              Orbit Studio
            </span>
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-black transition-colors group-hover:bg-gray-200 shrink-0">
              Next &gt;
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ProjectImpact;