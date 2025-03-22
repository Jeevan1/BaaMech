import { RiShieldUserLine } from 'react-icons/ri';
import SectionHeading from './SectionHeading';
import Testimonials from './Testimonials';

const AboutUsSection = () => {
  return (
    <div className="bg-light" id="about">
      <div className="container py-20">
        <SectionHeading title="About Us" icon={RiShieldUserLine} />
        <h2 className="mt-6 text-center text-2xl font-bold text-accent md:text-3xl lg:text-5xl">
          About <span className="text-primary">Bato Mechanics</span>
        </h2>
        <p className="text-md m-auto mt-4 max-w-5xl text-center font-semibold text-gray-500 md:text-lg">
          At <span className="text-primary">Bato Mechanics</span>, we are a team
          of automotive enthusiasts who are passionate about providing top-notch
          automotive services to our valued customers. Our mission is to ensure
          that your vehicle is running smoothly and efficiently, whether you
          need routine maintenance, repairs, or any other automotive needs.
        </p>
        <div className="pt-10">
          {/* <SectionHeading title="Testimonial" /> */}
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
