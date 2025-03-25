const TopTitle = () => {
	return (
		<h2
			className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center"
			style={{
				textShadow: 'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',
				opacity: 1,
				transform: 'none',
			}}
		>
			<p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
				FEATURED CASE STUDIES
			</p>
			<span className="">
				<span className="">Curated</span>{' '}
				<span className="text-colorfull animate-gradient-x font-nyght tracking-wide">work</span>
			</span>
		</h2>
	);
};

export default TopTitle;
