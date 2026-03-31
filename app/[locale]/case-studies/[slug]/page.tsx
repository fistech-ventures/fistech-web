type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <div className="">
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold">Case Study: {params.slug}</h1>
      </div>
    </div>
  );
}
