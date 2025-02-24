'use client';
import dynamic from 'next/dynamic';
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
		</div>
	);
};

export default dynamic(() => Promise.resolve(Collaboration), {
	ssr: false,
});
