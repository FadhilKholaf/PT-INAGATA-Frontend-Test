import Image from 'next/image';

export default function LandingTemplate({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-between bg-purple px-4 pt-24 text-white lg:flex-row lg:px-20 lg:pt-0">
      <div className="z-10 flex w-full flex-col gap-y-8 lg:w-1/3">
        <h1 className="text-4xl font-bold lg:text-6xl">{title}</h1>
        <p className="poppins text-justify lg:text-xl">{description}</p>
      </div>
      <Image
        src="/Landing.png"
        alt="Landing Image"
        width={500}
        height={500}
        className="right-20 h-3/4 w-full object-cover md:w-auto lg:absolute lg:h-5/6 lg:pt-24 lg:brightness-50 xl:brightness-100"
      />
    </section>
  );
}
