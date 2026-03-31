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
      <ProjectGallery />
      <ProjectImpact />
      <ParallaxHeroImage
              imageSrc="/images/contact/contact-hero.webp"
              imageAlt="Contact Image"
            />
    </div>
  );
}
