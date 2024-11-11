import Navbar from '@/components/customs/Navbar';
import Footer from '@/components/customs/Footer';
import { ToggleTheme } from '@/components/customs/ToggleTheme';
import ScrollTop from '@/components/customs/ScrollTop';
import MenuSideBar from '@/components/customs/MenuSideBar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grow'>
      <Navbar />
      {children}
      <MenuSideBar />
      <Footer />
      <div className='fixed left-5 top-1/2'>
        <ToggleTheme />
      </div>
      <ScrollTop />
    </div>
  );
};

export default MainLayout;
