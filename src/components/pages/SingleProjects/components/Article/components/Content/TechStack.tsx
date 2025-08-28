/* eslint-disable @next/next/no-img-element */
const TechStack = ({techStack}: {techStack: {name: string; image: string}[]}) => {
	return (
		<div>
			<h2
				className="flex scroll-m-28 flex-row items-center gap-2 text-base mt-12 mb-6 font-bold"
				id="-KeyFeatures"
			>
				<a data-card="" href="#-KeyFeatures" className=" block text-2xl">
					🧪 Tech Stack
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
			<div className="mt-10 flex flex-wrap gap-3 text-sm">
				{techStack?.map((item, index) => (
					<div
						key={index}
						className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
						style={{opacity: 1, transform: 'none'}}
					>
						{/* <img
							height="16"
							width="16"
							alt={item.name}
							src={`data:image/svg+xml;utf8,${encodeURIComponent(item.image)}`}
						/> */}
						{item?.image?.length > 200 ? (
							<img
								className="img-fluid"
								alt=""
								height="16"
								width="16"
								src={`data:image/svg+xml;utf8,${encodeURIComponent(item.image)}`}
							/>
						) : (
							<img height="16" width="16" className="img-fluid" alt="" src={item.image} />
						)}

						{item.name}
					</div>
				))}

				{/* Repeat for other tech stack items */}
			</div>
		</div>
	);
};

export default TechStack;
