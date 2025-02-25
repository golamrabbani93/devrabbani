'use client';
import dynamic from 'next/dynamic';
import DynamicIconCloud from '../DynamicIconCloud/DynamicIconCloud';
import Together from './Together/Together';
import {FeatureCards} from './FeatureCards/FeatureCards';
const GlobeAnimation = dynamic(() => import('./GlobeAnimation/GlobeAnimation'), {
	ssr: false,
});
const Video = dynamic(() => import('./Video/Video'), {
	ssr: false,
});
const Collaboration = () => {
	return (
		<div className="mx-auto grid w-full max-w-sm auto-rows-[21rem] grid-cols-6 gap-4 md:max-w-full md:auto-rows-[19rem] my-20">
			{/* video start*/}
			<Video />
			{/* video End*/}
			{/* Globe Start */}
			<GlobeAnimation />
			{/* Globe Ends */}
			{/* Dynamic Icon Cloud */}
			<DynamicIconCloud />
			<Together />
			<FeatureCards />
		</div>
	);
};

export default dynamic(() => Promise.resolve(Collaboration), {
	ssr: false,
});
