import { useState, useEffect } from 'react';
import { PiArrowFatUpFill } from 'react-icons/pi';
const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-50 rounded-xs bg-primary p-1.5 text-white  transition-opacity duration-300 hover:cursor-pointer md:text-4xl ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <PiArrowFatUpFill size={20} />
    </button>
  );
};

export default GoTop;
