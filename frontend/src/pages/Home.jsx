import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicies from '../components/OurPolicies';
import NewLetterBox from '../components/NewsLetterBox';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicies />
      <NewLetterBox />
    </div>
  )
}

export default Home
