export default function Contact() {
  return (
    <section className="my-20 flex w-screen justify-between px-20">
      <div className="flex w-[40%] flex-col">
        <h1 className="text-dark mb-10 text-7xl font-semibold">Kontak Kami</h1>
        <p className="poppins text-light text-2xl">
          Untuk Setiap Pertanyaan, perkiraan proyek atau Katakan saja Halo Get
          Touch Anda dapat menelepon atau mengobrol Bersama kami
        </p>
      </div>
      <div className="flex w-[40%] flex-col justify-center">
        <p className="poppins text-dark mb-2 text-2xl">Number</p>
        <p className="poppins text-light mb-4 text-2xl">
          (229) 555-0109 (405) 555-0128
        </p>
        <p className="poppins text-dark mb-2 text-2xl">Office Address</p>
        <p className="poppins text-light mb-16 text-2xl">
          4140 Parker Rd.Richardson California 62639
        </p>
        <p className="bg-pink poppins flex h-12 w-fit items-center rounded-full px-12 py-3 text-base font-semibold tracking-wide text-white">
          Kontak Kami
        </p>
      </div>
    </section>
  );
}
