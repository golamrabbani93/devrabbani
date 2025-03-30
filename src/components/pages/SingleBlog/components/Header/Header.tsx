/* eslint-disable @next/next/no-img-element */
const Header = () => {
	return (
		<header className="mb-4">
			<div className="mb-4 flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm">
				<span className="rounded-sm bg-gray-100/80 px-1.5 py-0.5 text-gray-700 dark:bg-neutral-900/60 dark:text-neutral-500">
					typescript
				</span>
				<span className="rounded-sm bg-gray-100/80 px-1.5 py-0.5 text-gray-700 dark:bg-neutral-900/60 dark:text-neutral-500">
					nextjs
				</span>
			</div>
			<h1 className="mb-2 text-3xl font-bold md:text-5xl">
				How to build a blog with Next.js and MDX
			</h1>
			<p className="mb-4 text-sm text-white/65 md:text-base">
				Using Next.js to build a blog is very easy!
			</p>
			<div aria-label="Author" className="my-8 flex gap-3">
				<img
					alt="Golam Rabbani"
					className="size-10 object-cover rounded-full"
					src="/images/gradient-photo.png"
				/>
				<div className="gap-px text-sm">
					<p className="text-white">Golam Rabbani</p>
					<time className="text-xs text-white/65">04-01-2025</time>
				</div>
			</div>
		</header>
	);
};

export default Header;
