import { Outlet } from 'react-router';
import Header from '../components/Header';
import GoTop from '../components/GoToTop';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScroolToTop';

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <main>
        <Header />
        <Outlet />
        <Footer />
        <GoTop />
      </main>
    </>
  );
};

export default MainLayout;
