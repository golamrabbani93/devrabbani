import Link from 'next/link';

const Footer = () => {
	return (
		<footer className=" w-full bg-black text-neutral-300">
			<div className="h-px w-full bg-gradient-to-r from-black via-neutral-600 to-black"></div>
			<div className="container mx-auto my-12 grid max-w-6xl gap-8 py-12 md:grid-cols-[1.1fr_1.4fr_1.1fr] md:gap-16">
				<div>
					<h2 className="text-2xl font-semibold text-white">Golam Rabbani</h2>
					<p className="mt-3 text-sm text-neutral-400">
						Help you create experiences where aesthetics & functionality seamlessly come together.
					</p>
					<div className="flex gap-3 mt-4">
						<Link
							href="https://www.linkedin.com/in/g-rabbani/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-300 transition-colors hover:text-neutral-100"
						>
							<span className="sr-only">LinkedIn</span>
							<svg
								stroke="currentColor"
								fill="none"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								strokeLinecap="round"
								strokeLinejoin="round"
								height="20"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
								className="stroke-1"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect width="4" height="12" x="2" y="9"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
						</Link>
						<Link
							href="https://github.com/golamrabbani93"
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-300 transition-colors hover:text-neutral-100"
						>
							<span className="sr-only">GitHub</span>
							<svg
								stroke="currentColor"
								fill="none"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								strokeLinecap="round"
								strokeLinejoin="round"
								height="20"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
								className="stroke-1"
							>
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
								<path d="M9 18c-4.51 2-5-2-7-2"></path>
							</svg>
						</Link>
						<Link
							href="https://www.facebook.com/golam.rabbani.72"
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-300 transition-colors hover:text-neutral-100"
						>
							<span className="sr-only">Twitter</span>
							<svg
								stroke="currentColor"
								fill="none"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								strokeLinecap="round"
								strokeLinejoin="round"
								height="20"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
								className="stroke-1"
							>
								<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
							</svg>
						</Link>
						<Link
							href="https://www.facebook.com/golam.rabbani.72"
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-300 transition-colors hover:text-neutral-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-facebook-icon lucide-facebook"
							>
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
							</svg>
						</Link>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-2">
					<div>
						<h3 className="text-sm font-medium text-white">General</h3>
						<ul className="mt-4 flex flex-col gap-y-3 text-sm">
							<li>
								<Link className="transition-colors hover:text-neutral-50" href="/">
									Home
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-neutral-50" href="/project">
									Projects
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-neutral-50" href="/blog">
									Blog
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-neutral-50" href="/#about">
									About
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-medium text-white">The Website</h3>
						<ul className="mt-4 flex flex-col gap-y-3 text-sm">
							<li>
								<Link className="transition-colors hover:text-neutral-50" href="/guestbook">
									Guest Book
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-neutral-50" href="/bucket-list">
									Bucket List
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-neutral-50" href="/links">
									Links
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-neutral-50" href="/cal">
									Book a call
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<h2 className="text-base text-neutral-200">
						Feel free to reach out to me for any inquiries or collaboration opportunities.
					</h2>
					<p className="mt-3 flex items-center gap-2 text-base text-blue-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-mail"
						>
							<rect width="20" height="16" x="2" y="4" rx="2"></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
						<Link
							href="mailto:devrabbani9@gmai.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							devrabbani9@gmail.com
						</Link>
					</p>
				</div>
			</div>
			<div className="mx-auto h-px w-full max-w-6xl bg-linear-to-r from-black via-neutral-600 to-black"></div>
			<p className="container py-10 pb-6 text-center text-sm text-neutral-500">
				Copyright © 2025 Golam Rabbani. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
