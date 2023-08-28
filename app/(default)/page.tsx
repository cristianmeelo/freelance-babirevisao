export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import FeaturesBlocksFormat from '@/components/features-blocks-format'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <FeaturesBlocksFormat />
      <Features />
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  )
}
