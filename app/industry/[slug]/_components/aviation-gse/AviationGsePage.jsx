import React from 'react';
import AviationHero from './AviationHero';
import PainPointsHorizontal from './PainPointsHorizontal';
import ThesisHorizontal from './ThesisHorizontal';
import BoldStats from './BoldStats';
import WhyAlternating from './WhyAlternating';
import EcosystemGrid from './EcosystemGrid';
import AviationFaq from './AviationFaq';
import FinalCta from './FinalCta';

export default function AviationGsePage({ data }) {
  return (
    <main>
      <AviationHero data={data.hero} />
      <PainPointsHorizontal data={data.painPoints} />
      <ThesisHorizontal data={data.thesis} />
      <BoldStats data={data.boldStats} />
      <WhyAlternating data={data.whyAlternating} />
      <EcosystemGrid data={data.ecosystem} />
      <AviationFaq data={data.faq} />
      <FinalCta data={data.finalCta} />
    </main>
  );
}
