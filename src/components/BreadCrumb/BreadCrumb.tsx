import Image from 'next/image';

const BreadCrumb = () => {
	return (
		<div
			className="absolute inset-0 h-[450px] w-full overflow-hidden bg-neutral-950"
			style={{
				maskImage: 'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)',
				opacity: 1,
			}}
		>
			<Image
				alt="crumpled paper texture"
				loading="lazy"
				decoding="async"
				fill
				className="pointer-events-none absolute inset-0  h-[450px] w-full object-cover mix-blend-overlay select-none"
				src="/images/crumpled-paper.avif"
			/>
		</div>
	);
};

export default BreadCrumb;
