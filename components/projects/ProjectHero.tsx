import React from 'react'
import Link from 'next/link'
import { Project } from '@/types'

type ProjectHeroProps = Pick<Project, 'title' | 'categories' | 'client' | 'date' | 'websiteUrl' | 'heroImage' | 'gallery'>;

const ProjectHero = ({ 
  title, 
  categories, 
  client, 
  date, 
  websiteUrl,
  heroImage,
  gallery = []
}: ProjectHeroProps) => {
  return (
    <section className="pt-24 pb-12">
      <div className="container mx-auto px-4 mb-24 text-center">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight">
          {title}
        </h2>
      </div>

      <div className="border-y border-gray-100">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="py-8 flex items-center justify-center text-sm">
              <span className="text-gray-600 text-xl mr-1">Category -</span>
              <span className="font-medium text-xl text-gray-900 line-clamp-1">{categories[0] || 'N/A'}</span>
            </div>
            <div className="py-8 flex items-center justify-center text-sm">
              <span className="text-gray-600 text-xl mr-1">Clients -</span>
              <span className="font-medium text-xl text-gray-900 line-clamp-1">{client}</span>
            </div>
            <div className="py-8 flex items-center justify-center text-sm">
              <span className="text-gray-600 text-xl mr-1">Date -</span>
              <span className="font-medium text-xl text-gray-900">{date}</span>
            </div>
            <div className="py-8 flex items-center justify-center text-sm">
              <span className="text-gray-600 text-xl mr-1">URL -</span>
              <Link href={websiteUrl} target="_blank" className="font-medium text-blue-600 text-xl hover:underline transition-colors line-clamp-1">
                {websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Large Image */}
          <div className="h-[50vh] md:h-[80vh] w-full relative overflow-hidden bg-zinc-900">
            <img 
              src={heroImage || "https://placehold.co/800x1200/1e1e1e/FFF?text=Main+Project+Image"} 
              alt={`${title} Main`} 
              className="object-cover w-full h-full" 
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col h-[50vh] md:h-[80vh] w-full">
            {/* Top Laptop Image */}
            <div className="h-1/2 w-full relative overflow-hidden bg-green-900">
              <img 
                src={gallery[0] || "https://placehold.co/800x600/4ade80/000?text=Gallery+1"} 
                alt={`${title} Gallery 1`} 
                className="object-cover w-full h-full" 
              />
            </div>

            {/* Bottom Two Images */}
            <div className="h-1/2 w-full flex">
              <div className="w-1/2 h-full relative overflow-hidden bg-slate-900">
                 <img 
                   src={gallery[1] || "https://placehold.co/400x600/3b82f6/FFF?text=Gallery+2"} 
                   alt={`${title} Gallery 2`} 
                   className="object-cover w-full h-full" 
                 />
              </div>
              <div className="w-1/2 h-full relative overflow-hidden bg-orange-900">
                 <img 
                   src={gallery[2] || "https://placehold.co/400x600/ea580c/FFF?text=Gallery+3"} 
                   alt={`${title} Gallery 3`} 
                   className="object-cover w-full h-full" 
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero;