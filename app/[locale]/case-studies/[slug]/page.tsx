export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = await params;

  return (
    <div className="">
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold">Case Study: {slug}</h1>
      </div>
    </div>
  );
}
