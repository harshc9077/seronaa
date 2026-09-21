import { Hero } from '@/components/home/Hero';
import { BrandStatement } from '@/components/home/BrandStatement';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { LabGrownIntro } from '@/components/home/LabGrownIntro';
import { DiamondShapes } from '@/components/home/DiamondShapes';
import { Craftsmanship } from '@/components/home/Craftsmanship';
import { TheHouse } from '@/components/home/TheHouse';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <FeaturedCollection />
      <LabGrownIntro />
      <DiamondShapes />
      <Craftsmanship />
      <TheHouse />
      <FinalCTA />
    </>
  );
}
