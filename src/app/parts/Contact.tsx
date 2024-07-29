export default function Contact() {
  return (
    <section className="my-20 flex w-screen flex-col justify-between gap-y-8 px-4 lg:flex-row lg:gap-y-0 lg:px-20">
      <div className="flex w-full flex-col lg:w-[40%]">
        <h1 className="mb-10 text-4xl font-semibold text-dark lg:text-7xl">
          Kontak Kami
        </h1>
        <p className="poppins text-light lg:text-2xl">
          Untuk Setiap Pertanyaan, perkiraan proyek atau Katakan saja Halo Get
          Touch Anda dapat menelepon atau mengobrol Bersama kami
        </p>
      </div>
      <div className="flex w-full flex-col justify-center lg:w-[40%]">
        <p className="poppins mb-2 text-lg text-dark lg:text-2xl">Number</p>
        <p className="poppins mb-4 text-light lg:text-2xl">
          (229) 555-0109 (405) 555-0128
        </p>
        <p className="poppins mb-2 text-lg text-dark lg:text-2xl">
          Office Address
        </p>
        <p className="poppins mb-16 text-light lg:text-2xl">
          4140 Parker Rd.Richardson California 62639
        </p>
        <p className="poppins flex h-12 w-fit items-center rounded-full bg-pink px-12 py-3 text-base font-semibold tracking-wide text-white">
          Kontak Kami
        </p>
      </div>
    </section>
  );
}
