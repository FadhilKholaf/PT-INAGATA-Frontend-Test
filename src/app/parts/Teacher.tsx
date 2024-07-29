import Image from 'next/image';

const teachers: { name: string; role: string }[] = [
  { name: 'Mrs.Y', role: 'Kepala Sekolah' },
  { name: 'Mr.X', role: 'Kepala Staff' },
  { name: 'Mrs.Y', role: 'Guru Matematika' },
  { name: 'Mr.X', role: 'Guru Biologi' },
  { name: 'Mrs.Y', role: 'Guru Fisika' },
  { name: 'Mr.X', role: 'Guru Bahasa' },
  { name: 'Mrs.Y', role: 'Guru Kimia' },
  { name: 'Mr.X', role: 'Guru Seni Budaya' }
];

export default function Teacher() {
  return (
    <section className="flex w-screen flex-col gap-y-20 px-4 lg:mt-36 lg:px-20">
      <h1 className="text-center text-4xl font-semibold text-dark lg:text-6xl">
        Guru dan Staff Sekolah
      </h1>
      <div className="flex w-full flex-wrap justify-between gap-8">
        {teachers &&
          teachers.map((teacher, index) => (
            <div
              key={index}
              className="flex h-[400px] w-full flex-col lg:w-[270px]"
            >
              <Image
                src={`/staff/Teacher${index + 1}.png`}
                alt="Guru"
                width={500}
                height={500}
                className="h-[320px] w-full rounded-3xl object-cover"
              />
              <p className="poppins mt-6 text-2xl font-medium text-dark">
                {teacher.name}
              </p>
              <p className="poppins mt-1 text-base text-light">
                {teacher.role}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
