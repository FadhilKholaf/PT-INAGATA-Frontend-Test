import Link from 'next/link';

export default function SignUp() {
  return (
    <section className="w-screen px-20">
      <div className="relative flex flex-col items-center justify-center gap-10 overflow-hidden rounded-3xl bg-[#30005F] p-16 text-white">
        <div className="absolute -right-44 -top-44 z-0 flex h-96 w-96 items-center justify-center rounded-full bg-[#FF5F5F] blur-sm">
          <div className="h-64 w-64 rounded-full bg-[#30005F]"></div>
        </div>
        <div className="absolute -bottom-44 -left-44 z-0 flex h-96 w-96 items-center justify-center rounded-full bg-[#1FA7FF] blur-sm">
          <div className="h-64 w-64 rounded-full bg-[#30005F]"></div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="z-[1] text-center text-5xl font-semibold">
            Daftarkan Anak Anda
          </h1>
          <h1 className="z-[1] text-center text-5xl font-semibold">
            Kontak Kami (031 123-4567)
          </h1>
        </div>
        <Link
          href="/kontak"
          className="bg-purple poppins z-[1] flex h-12 items-center rounded-full px-8 py-3 text-base font-semibold tracking-wide"
        >
          Lihat Semua
        </Link>
      </div>
    </section>
  );
}
