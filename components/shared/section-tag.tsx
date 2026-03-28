import React from 'react'

export default function SectionTag({ sectiontag } : {sectiontag:string}) {
  return (
    <div className="flex gap-x-2 items-center justify-center">
      <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
      <h5 className="text-base font-medium text-foreground">{sectiontag}</h5>
    </div>
  );
}
