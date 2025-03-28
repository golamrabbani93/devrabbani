import AllBlog from './components/AllBlog/AllBlog';
import Topics from './components/Topics/Topics';

const index = () => {
	return (
		<div className="min-h-screen px-4 py-16 pt-36 md:px-1">
			<h2 className="relative z-[2] text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center max-w-xs md:max-w-xl text-balance mx-auto mb-10 md:mb-10">
				<p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
					The Blog
				</p>
				<span className="">
					<span className="">The Pensieve of </span>
					<span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
						My Thoughts
					</span>
				</span>
			</h2>
			{/* Search Blog Start */}
			<div className="relative mx-auto mb-8 px-2 w-full max-w-lg">
				<div className="bg-opacity-50 relative rounded-xl bg-neutral-900 p-1 ring-1 ring-neutral-800 backdrop-blur-xl">
					<div className="flex items-center">
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
							className="lucide lucide-search ml-3 h-5 w-5 text-neutral-400"
						>
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.3-4.3"></path>
						</svg>
						<input
							placeholder="Search blog posts..."
							className="w-full bg-transparent px-4 py-2 text-neutral-200 placeholder-neutral-400 focus:outline-none"
							type="text"
						/>
						<div className="flex items-center mr-3 text-neutral-400">
							<span className="text-xs text-nowrap">Shift + S</span>
						</div>
					</div>
				</div>
			</div>
			{/* Search Blog End */}
			<div className="mt-20 flex w-full border-white/5 md:border-t">
				<div className="mx-auto flex flex-col-reverse md:flex-row">
					<div className="w-full border-white/5 px-2 md:border-r md:px-8 lg:min-w-3xl">
						{/* //blogs */}
						<AllBlog />
					</div>

					{/*Topics  */}
					<Topics />
				</div>
			</div>
		</div>
	);
};

export default index;
