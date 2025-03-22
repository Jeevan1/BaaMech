import { Link, useLocation } from 'react-router-dom';
import data from '../utility/data.json';
import { MdClose, MdMenu } from 'react-icons/md';
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [headerFixed, setHeaderFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-accent py-4 ${headerFixed ? 'fixed top-0 z-[100] w-full border-b-2 border-dashed border-primary transition-all duration-200 ease-in-out' : 'border-b-2 border-dashed border-primary'}`}
    >
      <div className="relative z-10 container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex w-max flex-col items-center">
            <img
              src="/assets/bm_logo.png"
              alt="bato mechanics logo"
              className="w-25 sm:w-30"
            />
          </Link>
          <ul className="hidden space-x-6 sm:flex">
            {data.nav.map((item, index) => (
              <li key={index} className="sm:inline">
                <a
                  href={item.path}
                  className={`uppercase transition-all duration-200 hover:text-primary sm:inline ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : '/' + location.hash === item.path
                        ? 'text-primary'
                        : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`fixed inset-0 z-[999] min-h-screen bg-accent px-4 py-10 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'} duration-300 ease-in-out`}
          >
            <div className="mt-2 flex h-full flex-col px-3">
              <Link to="/" className="py-2">
                <img
                  src="/assets/bm_logo.png"
                  alt="logo"
                  width={300}
                  height={100}
                  className="h-[50px] w-fit object-contain"
                />
              </Link>
              <p className="mt-2 text-sm font-semibold text-gray-200">
                Welcome to Baato Mechanic! These Terms and Conditions ('Terms')
                govern your use of our mobile application and services.
              </p>
              <ul className="mt-8 flex flex-col justify-center gap-5">
                {data.nav.map((item, index) => (
                  <li key={index} className="sm:inline">
                    <a
                      href={item.path}
                      className={`text-sm font-semibold uppercase transition-all duration-200 hover:text-primary sm:inline sm:text-base ${
                        location.pathname === item.path
                          ? 'text-primary'
                          : '/' + location.hash === item.path
                            ? 'text-primary'
                            : 'text-white'
                      }`}
                      onClick={() => setOpen(!open)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <MdClose
                className="absolute top-6 right-4 cursor-pointer text-3xl text-white md:hidden"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
          <MdMenu
            className="cursor-pointer text-2xl text-white md:hidden"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
