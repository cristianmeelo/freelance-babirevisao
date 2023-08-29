export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import FeaturesBlocksFormat from "@/components/features-blocks-format";
import FeaturesBlocksStructure from "@/components/features-blocks-structure";
import Testimonials from "@/components/testimonials";
import FeaturesBlocksV2 from "@/components/features-blocks-v2";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <FeaturesBlocks />
      <FeaturesBlocksFormat />
    <FeaturesBlocksStructure /> */}
      <FeaturesBlocksV2 />
      <Features />
      <Testimonials />
    </>
  );
}
