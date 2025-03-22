import AboutUsSection from '../../components/AboutUsSection';
import Banner from '../../components/Banner';
import ContactUsSection from '../../components/ContactUsSection';
import FaqSection from '../../components/FaqSection';
import FeaturesSection from '../../components/FeaturesSection';

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <AboutUsSection />
      <FeaturesSection />
      <FaqSection />
      <ContactUsSection />
    </div>
  );
};

export default HomePage;
