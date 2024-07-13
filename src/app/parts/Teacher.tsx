import Image from 'next/image';

export default function Teacher() {
  return (
    <section className="mt-36 flex w-screen flex-col gap-y-20 px-20">
      <h1 className="text-dark text-center text-6xl font-semibold">
        Guru dan Staff Sekolah
      </h1>
      <div className="flex w-full flex-wrap justify-between gap-8">
        <div className="flex h-[400px] w-[270px] flex-col">
          <Image
            src="/staff/Teacher.png"
            alt="Guru"
            width={500}
            height={500}
            className="h-[320px] w-full rounded-3xl object-cover"
          />
          <p className="poppins text-dark mt-6 text-2xl font-medium">Mrs.Y</p>
          <p className="text-light poppins mt-1 text-base">Kepala Sekolah</p>
        </div>
        <div className="flex h-[400px] w-[270px] flex-col">
          <Image
            src="/staff/Teacher2.png"
            alt="Guru"
            width={500}
            height={500}
            className="h-[320px] w-full rounded-3xl object-cover"
          />
          <p className="poppins text-dark mt-6 text-2xl font-medium">Mrs.X</p>
          <p className="text-light poppins mt-1 text-base">Kepala Staff</p>
        </div>
        <div className="flex h-[400px] w-[270px] flex-col">
          <Image
            src="/staff/Teacher3.png"
            alt="Guru"
            width={500}
            height={500}
            className="h-[320px] w-full rounded-3xl object-cover"
          />
          <p className="poppins text-dark mt-6 text-2xl font-medium">Mrs.Y</p>
          <p className="text-light poppins mt-1 text-base">Guru Matematika</p>
        </div>
        <div className="flex h-[400px] w-[270px] flex-col">
          <Image
            src="/staff/Teacher4.png"
            alt="Guru"
            width={500}
            height={500}
            className="h-[320px] w-full rounded-3xl object-cover"
          />
          <p className="poppins text-dark mt-6 text-2xl font-medium">Mrs.X</p>
          <p className="text-light poppins mt-1 text-base">Guru Biologi</p>
        </div>
        <div className="flex h-[400px] w-[270px] flex-col">
          <Image
            src="/staff/Teacher5.png"
            alt="Guru"
            width={500}
            height={500}
            className="h-[320px] w-full rounded-3xl object-cover"
          />
          <p className="poppins text-dark mt-6 text-2xl font-medium">Mrs.Y</p>
          <p className="text-light poppins mt-1 text-base">Guru FIsika</p>
        </div>
        <div className="flex h-[400px] w-[270px] flex-col">
          <Image
            src="/staff/Teacher6.png"
            alt="Guru"
            width={500}
            height={500}
            className="h-[320px] w-full rounded-3xl object-cover"
          />
          <p className="poppins text-dark mt-6 text-2xl font-medium">Mrs.X</p>
          <p className="text-light poppins mt-1 text-base">Guru Bahasa</p>
        </div>
        <div className="flex h-[400px] w-[270px] flex-col">
          <Image
            src="/staff/Teacher7.png"
            alt="Guru"
            width={500}
            height={500}
            className="h-[320px] w-full rounded-3xl object-cover"
          />
          <p className="poppins text-dark mt-6 text-2xl font-medium">Mrs.Y</p>
          <p className="text-light poppins mt-1 text-base">Guru Kimia</p>
        </div>
        <div className="flex h-[400px] w-[270px] flex-col">
          <Image
            src="/staff/Teacher8.png"
            alt="Guru"
            width={500}
            height={500}
            className="h-[320px] w-full rounded-3xl object-cover"
          />
          <p className="poppins text-dark mt-6 text-2xl font-medium">Mrs.X</p>
          <p className="text-light poppins mt-1 text-base">Guru Seni Budaya</p>
        </div>
      </div>
    </section>
  );
}
