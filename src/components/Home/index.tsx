'use client';
import dynamic from 'next/dynamic';
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import MarqueeText from './components/MarqueeText/MarqueeText';
import About from './components/About/About';
import Testimonials from './components/Testimonial/Testimonial';
const Collaboration = dynamic(() => import('./components/Collaboration/Collaboration'), {
	ssr: false,
});
const index = () => {
	return (
		<>
			<Banner />
			<div className="w-full max-w-7xl px-5 md:px-4 mx-auto">
				<Collaboration />
				<Projects />
				<Skills />
			</div>

			<div className="w-full overflow-hidden">
				<MarqueeText />
				<About />
				<Testimonials />
			</div>
		</>
	);
};

export default index;
