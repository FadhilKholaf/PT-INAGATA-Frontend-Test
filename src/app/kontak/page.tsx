import LandingTemplate from '@/components/LandingTemplate';
import Contact from '../parts/Contact';

export default function Kontak() {
  return (
    <main className="flex flex-col gap-32 overflow-hidden">
      <LandingTemplate
        title="Kontak"
        description="Anda Membutuhkan Bantuan Bertanya Atau Sekedar Berbincang Kami Siap Membantu"
      />
      <Contact />
    </main>
  );
}
