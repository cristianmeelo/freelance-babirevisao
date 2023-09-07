import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import FeaturesBlocksV2 from "@/components/features-blocks-v2";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocksV2 />
      <Features />
      <Testimonials />
    </>
  );
}
