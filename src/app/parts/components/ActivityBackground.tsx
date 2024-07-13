import Image from 'next/image';

export default function ActivityBackground() {
  return (
    <>
      <Image
        src="/Rectangle.svg"
        alt="Logo"
        width={500}
        height={500}
        className="absolute -top-36 right-32 z-[1] h-52 w-52 rounded-xl object-cover"
      />
      <Image
        src="/Triangle.svg"
        alt="Logo"
        width={500}
        height={500}
        className="absolute -top-12 right-0 z-[0] h-52 w-52 rounded-xl object-cover"
      />
      <Image
        src="/Rectangle.svg"
        alt="Logo"
        width={500}
        height={500}
        className="absolute -bottom-20 left-24 z-[0] h-52 w-52 rounded-xl object-cover"
      />
      <Image
        src="/Triangle.svg"
        alt="Logo"
        width={500}
        height={500}
        className="absolute -bottom-10 -left-24 z-[1] h-52 w-fit -rotate-[60deg] rounded-xl object-cover"
      />
      <Image
        src="/Ellipse.svg"
        alt="Logo"
        width={500}
        height={500}
        className="absolute bottom-0 right-0 h-32 w-32 object-fill"
      />
      <Image
        src="/Ellipse.svg"
        alt="Logo"
        width={500}
        height={500}
        className="absolute left-0 top-0 h-32 w-32 rotate-180 object-fill"
      />
    </>
  );
}
