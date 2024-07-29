import Link from 'next/link';

export default function SignUp() {
  return (
    <section className="w-screen px-4 lg:px-20">
      <div className="relative flex flex-col items-center justify-center gap-y-4 overflow-hidden rounded-3xl bg-[#30005F] p-4 text-white lg:gap-10 lg:p-16">
        <div className="absolute -right-64 -top-64 z-0 flex h-96 w-96 items-center justify-center rounded-full bg-[#FF5F5F] blur-sm lg:-right-44 lg:-top-44">
          <div className="h-64 w-64 rounded-full bg-[#30005F]"></div>
        </div>
        <div className="absolute -bottom-64 -left-64 z-0 flex h-96 w-96 items-center justify-center rounded-full bg-[#1FA7FF] blur-sm lg:-bottom-44 lg:-left-44">
          <div className="h-64 w-64 rounded-full bg-[#30005F]"></div>
        </div>
        <div className="flex flex-col lg:gap-y-4">
          <h1 className="z-[1] text-center text-2xl font-semibold lg:text-5xl">
            Daftarkan Anak Anda
          </h1>
          <h1 className="z-[1] text-center text-2xl font-semibold lg:text-5xl">
            Kontak Kami (031 123-4567)
          </h1>
        </div>
        <Link
          href="/kontak"
          className="poppins z-[1] flex h-12 items-center rounded-full bg-purple px-8 py-3 text-base font-semibold tracking-wide"
        >
          Lihat Semua
        </Link>
      </div>
    </section>
  );
}
