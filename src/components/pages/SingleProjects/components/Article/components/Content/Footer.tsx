const Footer = () => {
	return (
		<div className="flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md">
			{/* Left vertical bar */}
			<div role="none" className="w-0.5 bg-green-500 rounded-sm" />

			{/* Icon */}
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
				className="lucide size-5 -me-0.5 fill-green-500 text-fd-card"
			>
				<circle cx="12" cy="12" r="10" className="text-green-500" />
				<path d="m9 12 2 2 4-4" />
			</svg>

			{/* Content */}
			<div className="flex flex-col gap-2 min-w-0 flex-1">
				<p className="font-medium !my-0">🔗 Want to explore it live?</p>
				<div className="text-fd-muted-foreground prose-no-margin empty:hidden">
					<p>
						👉{' '}
						<a href="https://ab-next-venture.vercel.app" rel="noreferrer noopener" target="_blank">
							Visit the live app
						</a>{' '}
						<span className="text-slate-500">or</span>{' '}
						<a
							href="https://github.com/aayushbharti/next-venture"
							rel="noreferrer noopener"
							target="_blank"
						>
							view the source code
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
