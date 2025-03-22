import { IoLogoInstagram } from 'react-icons/io';
import { AiFillTikTok } from 'react-icons/ai';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-accent">
      <div className="container py-7">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <img
            src="/assets/bm_logo.png"
            alt="bato mechanics logo"
            className="w-30"
          />
          <ul className="flex flex-1 flex-wrap items-center justify-evenly gap-4 space-y-2 font-normal text-white">
            <li>
              <Link to="/privacy">Privacy Policy </Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="flex items-center gap-3">
              <IoLogoInstagram size={26} className="inline text-white" />
              <AiFillTikTok size={24} className="inline text-white" />
            </li>
          </ul>
        </div>
      </div>
      <div className="container bg-primary">
        <p className="py-4 text-center text-sm  font-normal text-white">
          Copyright &copy; 2023 BATOMECHANICS. | All Rights Reserved. | Powered
          by BATOMECHANICS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
