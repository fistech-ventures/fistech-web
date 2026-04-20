import { CASE_STUDIES } from "@/data/case-studies";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ChartBarStacked,
  CircleUserRound,
  UserPen,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!data) notFound();

  const socialLinks = [
    { Icon: Facebook, path: "https://facebook.com/fistech" },
    { Icon: Twitter, path: "https://twitter.com/fistech" },
    { Icon: Linkedin, path: "https://linkedin.com/company/fistech" },
    { Icon: Youtube, path: "https://youtube.com/fistech" },
  ];

  return (
    <>
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold">Case Study: {slug}</h1>
      </div>

      <main className="min-h-screen bg-white">
        {/* Header Info */}
        <section className="pt-20 md:pt-32 lg:pt-40 pb-10 text-center px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-600 font-medium mb-4 md:mb-6">
              <span>{data.metadata.publishDate}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              <span>{data.metadata.readingTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 max-w-5xl mx-auto leading-[1.2] md:leading-[1.1]">
              {data.hero.headline}
            </h1>

            {/* Author / Category Box */}
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 items-center justify-between max-w-4xl mx-auto border border-gray-200 py-6 px-6 md:px-10 rounded-2xl bg-[#FAFAFA]">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0 overflow-hidden">
                  <CircleUserRound className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Author
                  </p>
                  <p className="text-xs md:text-sm font-bold text-gray-900">
                    {data.author?.name || "Fistech Team"}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3 sm:border-x border-gray-200 sm:px-8">
                <ChartBarStacked className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
                <div className="text-left">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Category
                  </p>
                  <p className="text-xs md:text-sm font-bold text-gray-900">
                    {data.metadata.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3 sm:pl-8">
                <UserPen className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
                <div className="text-left">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Content by
                  </p>
                  <p className="text-xs md:text-sm font-bold text-gray-900">
                    {data.metadata.contentType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="container mx-auto px-4 md:px-6 mb-10 md:mb-16">
          <div className="relative w-full max-w-5xl mx-auto aspect-16/10 md:aspect-21/9 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src={data.hero.mainImage}
              alt={data.metadata.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 md:px-6 max-w-6xl pb-20 md:pb-24">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-2/3 prose prose-gray max-w-none prose-h2:text-gray-900 prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-bold">
              {/* Problem Section using .description */}
              <div id="problem" className="scroll-mt-32">
                <h2>{data.problem.title}</h2>
                <p className="description text-gray-600 leading-relaxed">
                  {data.problem.summary}
                </p>
              </div>

              {/* Dynamic Sections */}
              {data.sections?.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 my-8"
                >
                  {section.type === "heading" && (
                    <h3
                      className={
                        section.level === 2
                          ? "text-2xl md:text-3xl font-bold text-gray-900 mt-12"
                          : "text-xl md:text-2xl font-bold text-gray-900 mt-8"
                      }
                    >
                      {section.text}
                    </h3>
                  )}

                  {section.type === "paragraph" && (
                    <p className="description mt-4 text-gray-600">
                      {section.content}
                    </p>
                  )}

                  {section.type === "list" && (
                    <div className="my-6 bg-[#FAFAFA] p-6 md:p-8 rounded-2xl border border-gray-100">
                      {section.title && (
                        <h4 className="font-bold text-gray-900 mb-4">
                          {section.title}
                        </h4>
                      )}
                      <ul className="space-y-3 list-none p-0 m-0">
                        {section.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-gray-700 items-start description"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-3 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.type === "image" && (
                    <div className="relative aspect-video w-full my-10 rounded-xl overflow-hidden border border-gray-100">
                      <Image
                        src={section.url}
                        alt={section.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {section.type === "quote" && (
                    <div className="my-10 border-l-4 border-green-400 pl-6 py-2">
                      <p className="text-xl md:text-2xl font-medium italic text-gray-900 leading-snug">
                        {section.text}
                      </p>
                      {section.author && (
                        <cite className="block mt-4 text-sm font-bold text-gray-500 not-italic uppercase tracking-widest">
                          — {section.author}
                        </cite>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <div className="my-10 h-px bg-gray-100" />

              {/* Solution Section using .description */}
              <div id="solution" className="scroll-mt-32">
                <h2>{data.solution.title}</h2>
                <p className="description text-gray-600">
                  {data.solution.approach}
                </p>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-1/3 sticky top-24 hidden lg:block">
              <div className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Table of Content
                </h3>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#problem"
                        className="group flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-black transition-all"
                      >
                        <span className="text-gray-300 group-hover:text-green-500 font-bold transition-colors">
                          01.
                        </span>
                        Problem
                      </a>
                    </li>
                    {data.sections
                      ?.filter((s) => s.type === "heading")
                      .map((section, idx) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="group flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-black transition-all"
                          >
                            <span className="text-gray-300 group-hover:text-green-500 font-bold transition-colors">
                              0{idx + 2}.
                            </span>
                            {section.text}
                          </a>
                        </li>
                      ))}
                    <li>
                      <a
                        href="#solution"
                        className="group flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-black transition-all"
                      >
                        <span className="text-gray-300 group-hover:text-green-500 font-bold transition-colors">
                          0
                          {(data.sections?.filter((s) => s.type === "heading")
                            .length || 0) + 2}
                          .
                        </span>
                        Solution
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-4 tracking-widest">
                    Share Case Study
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, i) => (
                      <Link
                        key={i}
                        href={social.path}
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all"
                      >
                        <social.Icon size={16} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
