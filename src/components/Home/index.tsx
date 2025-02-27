'use client';
import dynamic from 'next/dynamic';
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
const Collaboration = dynamic(() => import('./components/Collaboration/Collaboration'), {
	ssr: false,
});
const index = () => {
	return (
		<>
			<Banner />
			<div className="w-full max-w-7xl px-5 md:px-4 mx-auto">
				<Collaboration />
			</div>
			<Projects />
		</>
	);
};

export default index;
