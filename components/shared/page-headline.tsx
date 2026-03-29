import { GitCommitHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PageHeadline({ headline }: { headline: string }) {
  return (
    <div className="max-w-4xl mx-auto flex justify-center items-end h-72 md:h-100 pb-10 md:pb-16">
      <div className="flex flex-col items-center">
        <h2 className="page-title">{headline}</h2>
        <div className="flex items-center justify-center gap-2 md:gap-4 py-1 md:py-2 px-4 md:px-7 border rounded-3xl text-sm md:text-base font-medium">
          <Link href="/">Home</Link>
          <GitCommitHorizontal />
          <p>{headline}</p>
        </div>
      </div>
    </div>
  );
}
