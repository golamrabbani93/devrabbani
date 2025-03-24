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
								x="0px"
								y="0px"
								width="20"
								height="20"
								viewBox="0 0 50 50"
								style={{fill: '#dddddd'}}
							>
								<path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
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
