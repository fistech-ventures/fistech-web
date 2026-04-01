import React from "react";

export default function SolutionHeading({ headline }: { headline: string }) {
  return (
    <div className="container">
      <p className="tag">{headline}</p>
    </div>
  );
}
