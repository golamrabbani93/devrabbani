const Overview = ({overview}: {overview: string}) => {
	return (
		<div>
			<h2
				className="flex scroll-m-28 flex-row items-center gap-2 text-base mt-12 mb-6 font-bold"
				id="-overview"
			>
				<a data-card="" href="#-overview" className=" block text-2xl">
					🔍 Overview
				</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
					aria-label="Link to section"
				>
					<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
					<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
				</svg>
			</h2>

			<p>{overview}</p>
		</div>
	);
};

export default Overview;
