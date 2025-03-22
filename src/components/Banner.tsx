import { MdOutlineAppShortcut } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 py-16 sm:grid-cols-2">
          <div className="col-span-1 flex flex-col items-center justify-center sm:items-start">
            <p className="text-md mb-3 font-semibold text-primary sm:text-lg">
              Your One-Stop Mechanic
            </p>
            <h1 className="text-center text-3xl leading-tight font-semibold text-accent sm:text-start sm:text-4xl md:text-5xl">
              Welcome to <span className="text-primary">Bato Mechanics</span>
            </h1>
            <p className="mt-3 text-center text-xl font-semibold text-gray-500 sm:text-start sm:text-2xl md:text-3xl">
              Your One-Stop Shop for All Your Automotive Needs
            </p>
            <Link
              to="/"
              className="mt-6 flex w-max items-center rounded-md border-2 border-gray-500 px-5 py-3 text-sm font-bold text-accent transition-all duration-200 hover:border-primary hover:text-primary"
            >
              <MdOutlineAppShortcut className="me-3 inline" />
              <span className="">GET THE APP</span>
            </Link>
          </div>
          <div className="col-span-1">
            <img
              src="/assets/bm_icon.png"
              alt="bato mechanics banner"
              className="max-h-60 w-full object-contain sm:max-h-80 md:max-h-124"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
