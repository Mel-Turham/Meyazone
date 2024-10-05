import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToggleTheme } from '@/components/ToggleTheme';
import ScrollTop from '@/components/ScrollTop';
import MenuSideBar from '@/components/MenuSideBar';

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
