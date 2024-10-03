

import Header from '../app/components/header'
import Cover from './components/cover';
import FAQAccordion from './components/faqs';
import Features from './components/features';
import Footer from './components/footer';
import LandingBanner from './components/landingBanner';
import Testimonial from './components/testimonials';

function Home(){
  return (
    <div className="bg-dark text-white">
      
     
      <Cover/>
      <Features/>
      <Testimonial/>
      <FAQAccordion/>
      <LandingBanner/>
      
    </div>
  );
};

export default Home;
