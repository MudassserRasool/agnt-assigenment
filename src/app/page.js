import Accordions from '@/components/Accordions';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MultipleIntegration from '@/components/MultipleIntegration';
import Navbar from '@/components/Navbar';
import Productivity from '@/components/Productivity';
const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <MultipleIntegration />
      <Productivity />
      <Accordions />
      <Footer />
    </div>
  );
};

export default page;
