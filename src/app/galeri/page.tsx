import LandingTemplate from '@/components/LandingTemplate';
import ActivityList from '../parts/ActivityList';

export default function Galeri() {
  return (
    <main className="flex flex-col gap-32 overflow-hidden">
      <LandingTemplate
        title="Galeri"
        description="Halaman Yang Akan Memberikan Dokumentasi Kegiatan Sekolah"
      />
      <ActivityList />
    </main>
  );
}
