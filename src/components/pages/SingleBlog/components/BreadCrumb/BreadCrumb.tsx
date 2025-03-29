import Image from 'next/image';

const BreadCrumb = () => {
	return (
		<div
			className="relative inset-0 h-[300px] w-full overflow-hidden"
			style={{
				maskImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0) 100%)',
				opacity: 1,
			}}
		>
			<Image
				alt="How to build a blog with Next.js and MDX"
				className="pointer-events-none absolute inset-0  h-[300px] w-full object-cover mix-blend-overlay select-none "
				src="/images/cover.avif"
				layout="fill"
			/>
		</div>
	);
};

export default BreadCrumb;
