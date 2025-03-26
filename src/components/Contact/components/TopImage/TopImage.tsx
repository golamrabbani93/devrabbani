import Image from 'next/image';

const TopImage = () => {
	return (
		<>
			<Image
				aria-hidden="true"
				draggable="false"
				alt="wings"
				loading="lazy"
				width="338"
				height="110"
				decoding="async"
				className="brightness-125 saturate-150 select-none"
				style={{color: 'transparent'}}
				src="/images/wings.svg"
			/>
			<Image
				alt="Golam Logo"
				draggable="false"
				loading="lazy"
				width="200"
				height="200"
				decoding="async"
				className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full select-none md:size-10"
				style={{color: 'transparent'}}
				src="/images/logo.png"
			/>
		</>
	);
};

export default TopImage;
