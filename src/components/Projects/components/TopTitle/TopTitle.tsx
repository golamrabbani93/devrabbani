const TopTitle = () => {
	return (
		<div>
			<h2
				className="z-2 relative mb-36 text-4xl md:text-5xl text-center"
				style={{
					textShadow:
						'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',
				}}
			>
				<p className="mb-4 text-xs uppercase tracking-widest text-white/70 md:text-sm">
					FEATURED CASE STUDIES
				</p>
				<span>Curated</span>{' '}
				<span className="text-colorfull animate-gradient-x font-nyght tracking-wide">work</span>
			</h2>
		</div>
	);
};

export default TopTitle;
