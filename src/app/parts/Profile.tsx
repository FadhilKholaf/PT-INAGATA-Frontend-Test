import Image from 'next/image';

export default function Profile() {
  return (
    <section className="flex w-screen flex-col gap-y-4 px-20 mt-36">
      <h1 className="text-center text-6xl font-semibold text-[#444444]">
        Video Profil
      </h1>
      <p className="poppins text-gray text-center text-2xl">
        Berikut adalah video profil dari sekolah kami
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9xofia597HI?si=b8isVlB54vM4fB9-&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="mt-6 h-[50vh] w-full rounded-3xl"
      ></iframe>
    </section>
  );
}
