import ProjectDiscovery from "@/components/projects/ProjectDiscovery";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectImpact from "@/components/projects/ProjectImpact";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = await params;

  return (
    <div className="">
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold">Project: {slug}</h1>
      </div>
      <ProjectHero />
      <ProjectDiscovery />
      <ProjectGallery
        imageOneSrc="https://anio-wp.egenstheme.com/wp-content/uploads/2026/01/portfolio-dt-gallery-img5.webp"
        imageTwoSrc="https://anio-wp.egenstheme.com/wp-content/uploads/2026/01/portfolio-dt-gallery-img6.webp"
        mainImageSrc="https://anio-wp.egenstheme.com/wp-content/uploads/2026/01/portfolio-dt-gallery-img7.webp"
        imageAlt="Project Gallery Image"
      />
      <ProjectImpact />

    </div>
  );
}
