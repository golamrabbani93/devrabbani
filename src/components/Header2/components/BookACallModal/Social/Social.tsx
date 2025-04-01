import Link from 'next/link';

const Social = () => {
	return (
		<div className="flex my-6 justify-center gap-4">
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
	);
};

export default Social;
