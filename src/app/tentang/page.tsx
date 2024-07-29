import LandingTemplate from '@/components/LandingTemplate';
import React from 'react';
import Description from '../parts/Description';
import Benefit from '../parts/Benefit';
import Profile from '../parts/Profile';
import Teacher from '../parts/Teacher';
import Partner from '../parts/Partner';

export default function TentangKita() {
  return (
    <main className="flex flex-col gap-y-32 overflow-hidden">
      <LandingTemplate
        title="Tentang Kami"
        description="Penjelasan Tentang Seokolah Kami Yang Dapat Menambah Referesi Anda"
      />
      <Description tentang />
      <Benefit tentang />
      <Profile />
      <Teacher />
      <Partner tentang />
    </main>
  );
}
