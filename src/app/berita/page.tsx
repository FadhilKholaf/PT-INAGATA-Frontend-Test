import LandingTemplate from '@/components/LandingTemplate';
import LatestNews from '../parts/LatestNews';
import NewsList from '../parts/NewsList';

export default function Berita() {
  return (
    <main className="flex flex-col gap-32 overflow-hidden">
      <LandingTemplate
        title="Berita"
        description="Halaman Yang Akan Memberikan Pemberitahuan dan Pengetahuan Untuk Anda"
      />
      <LatestNews />
      <NewsList />
    </main>
  );
}
