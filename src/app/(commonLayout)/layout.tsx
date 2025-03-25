import Footer from '@/components/Footer/Footer';
import {Header} from '@/components/Header2/Header';

const layout = ({children}: {children: React.ReactNode}) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default layout;
