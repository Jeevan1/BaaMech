import { VscTools } from 'react-icons/vsc';
import SectionHeading from './SectionHeading';
import data from '../utility/data.json';
import { TbSquareRoundedCheckFilled } from 'react-icons/tb';

const FeaturesSection = () => {
  return (
    <div className="bg-white" id="features">
      <div className="container py-20">
        <SectionHeading title="Features" icon={VscTools} />
        <h2 className="mt-6 text-center text-2xl font-bold text-accent md:text-3xl lg:text-5xl">
          Features We Offer You
        </h2>
        <p className="text-md mt-4 text-center font-semibold text-gray-500 sm:px-[15%] md:text-lg">
          At <span className="text-primary">Bato Mechanics</span>, we provide
          top-notch automotive services to keep your vehicle running smoothly.
          Our expert technicians use advanced tools and years of experience to
          diagnose, repair, and maintain your car with precision.
        </p>
        {/* <div className="grid grid-cols-2 gap-2 space-x-10 py-6 text-center sm:space-x-15 md:grid-cols-3">
          {data.features.map((feature) => (
            <div
              key={feature.id}
              className="inline-flex items-center justify-center gap-2"
            >
              <TbSquareRoundedCheckFilled size={40} className="text-primary" />
              <p className="text-lg font-semibold">{feature.name}</p>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2">
          {data.features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex items-center gap-4 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="flex-1">
                <p className="inline-flex items-center gap-1.5 font-semibold">
                  <TbSquareRoundedCheckFilled
                    size={30}
                    className="text-primary"
                  />
                  <span className="pt-0.5 text-lg font-bold md:text-xl">
                    {feature.name}
                  </span>
                </p>
                <p className="pt-1 font-semibold text-gray-500 md:text-lg">
                  {feature.description}
                </p>
              </div>
              <img
                src={feature.image}
                alt={feature.name}
                className="max-h-60 object-contain sm:h-100 md:max-h-130"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
