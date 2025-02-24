import {Globe} from '@/components/magicui/globe';
import Link from 'next/link';

const GlobeAnimation = () => {
	return (
		<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2">
			<div className="size-full">
				<h3 className="mt-4 w-full bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text px-4 text-center text-3xl leading-[100%] font-bold tracking-tighter text-balance text-transparent select-none md:mt-12">
					I&apos;m very flexible with time zone communications
				</h3>
				<div className="absolute right-0 -bottom-52 min-w-full scale-[1.6] [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] md:-bottom-20 lg:-bottom-8">
					<div
						style={{
							width: '100%',
							maxWidth: '600px',
							aspectRatio: '1 / 1',
							margin: 'auto',
							position: 'relative',
						}}
					>
						<Globe className="top-2 text-red-400" />
					</div>
				</div>
			</div>
			<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
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
					className="lucide lucide-map-pin size-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
				>
					<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
					<circle cx="12" cy="10" r="3"></circle>
				</svg>
				<h3 className="max-w-lg text-neutral-400">Remote</h3>
				<p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
					India - 02:07
				</p>
			</div>
			<div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
				<Link
					href="/cal"
					data-slot="button"
					className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 has-[>svg]:px-2.5 pointer-events-auto"
				>
					Connect now
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
						className="lucide lucide-arrow-right ml-2 size-4"
					>
						<path d="M5 12h14"></path>
						<path d="m12 5 7 7-7 7"></path>
					</svg>
				</Link>
			</div>
			<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
		</div>
	);
};

export default GlobeAnimation;
