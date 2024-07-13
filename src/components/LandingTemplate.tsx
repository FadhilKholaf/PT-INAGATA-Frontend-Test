import Image from 'next/image';

export default function LandingTemplate({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-purple flex h-screen w-screen items-center justify-between px-20 text-white">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="poppins text-justify text-xl">{description}</p>
      </div>
      <Image
        src="/Landing.png"
        alt="Landing Image"
        width={500}
        height={500}
        className="h-5/6 w-auto pt-24"
      />
    </section>
  );
}
