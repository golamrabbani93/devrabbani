import Image from 'next/image';

const Breadcrumb = () => {
	return (
		<div
			className="absolute inset-0 h-[300px] w-full overflow-hidden"
			style={{
				maskImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0) 100%)',
				WebkitMaskImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0) 100%)', // For Safari
				opacity: 1,
			}}
		>
			<Image
				fill
				alt="project-breadcrumb.png"
				className="halftone pointer-events-none absolute inset-0 z-[-1] h-[300px] w-full object-cover mix-blend-overlay grayscale select-none"
				src="/images/project-breadcrumb.png"
			/>
		</div>
	);
};

export default Breadcrumb;
