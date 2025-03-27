import Image from 'next/image';

const Github = () => {
	return (
		<div className="mt-2 flex flex-col items-start gap-y-2 text-sm font-light">
			<span className="text-muted-foreground font-normal tracking-wide uppercase">
				JUN 2024 - CURRENT
			</span>
			<p className="text-xl font-semibold text-white/90 md:text-2xl">Open Source Contributor</p>
			<a
				href="https://github.com/golamrabbani93"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-1.5 font-normal tracking-wide text-neutral-300 hover:text-neutral-100"
			>
				<Image
					className="w-5 rounded-[3px]"
					width={40}
					height={40}
					alt="Github Logo"
					src="/images/placeholder.svg"
				/>
				<span>Github</span>
			</a>
			<div className="text-muted-foreground flex items-center gap-1.5">
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
					className="lucide lucide-map-pin h-3.5 w-3.5"
				>
					<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
					<circle cx="12" cy="10" r="3"></circle>
				</svg>
				<span>192.168.1.1 · Remote</span>
			</div>
		</div>
	);
};

export default Github;
