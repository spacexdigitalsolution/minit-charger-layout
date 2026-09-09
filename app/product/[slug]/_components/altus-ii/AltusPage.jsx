import React from 'react';
import AltusHero from './AltusHero';
import AltusCloserLook from './AltusCloserLook';
import AltusPhotoSection from './AltusPhotoSection';
import AltusRampReality from './AltusRampReality';
import AltusBpm from './AltusBpm';
import AltusCompare from './AltusCompare';
import AltusFaqAccordion from './AltusFaqAccordion';
import AltusFinalCta from './AltusFinalCta';

export default function AltusPage({ data }) {
  return (
    <main className="bg-white">
      <AltusHero data={data.hero} />
      <AltusCloserLook data={data.closerLook} />
      <AltusPhotoSection data={data.turnaround} />
      <AltusPhotoSection data={data.mixedFleets} />
      <AltusRampReality data={data.rampReality} />
      <AltusPhotoSection data={data.fleetIntelligence} />
      <AltusBpm data={data.bpm} />
      <AltusCompare data={data.compare} />
      <AltusFaqAccordion data={data.faq} />
      <AltusFinalCta data={data.finalCta} />
    </main>
  );
}
