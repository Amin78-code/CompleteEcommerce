import React from 'react'
import StorefrontLayout from './layout'
import { products } from '@/app/src/data/data';
import { HeroSlider, NewArrival, BestSelling, Cta, Features } from '@/app/src/components'

const StorefrontHomePage = () => {

  const handleCTAClick = () => {
    console.log('handleCTAClick called')
  }

  return (
    <StorefrontLayout>
      <HeroSlider />
      <NewArrival products={products} />
      <BestSelling products={products} />
      <Cta
        heading="Upgrade Your Style This Season"
        subheading="Discover our exclusive summer collection with up to 40% off on all trending apparel and accessories. Offer valid for a limited time!"
        buttonText="Shop Collection Now"
        bgImageUrl="/hero2.png"
        onAction={handleCTAClick} />
        <Features />
    </StorefrontLayout>
  )
}

export default StorefrontHomePage