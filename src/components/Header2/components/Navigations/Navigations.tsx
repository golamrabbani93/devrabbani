import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Navigations = () => {
	//get active path
	const pathname = usePathname();

	const navigationItems = [
		{
			id: 'home',
			pathname: '/',
			icon: (
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
					className={`lucide lucide-home size-5 text-neutral-200 ${
						pathname === '/' ? 'text-white' : 'group-hover:text-black'
					}`}
				>
					<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
					<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
				</svg>
			),
			title: 'Home',
			description: 'Welcome to my forever work-in-progress!',
			active: pathname === '/',
		},
		{
			id: 'projects',
			pathname: '/projects',
			icon: (
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
					className={`lucide lucide-folder size-5 text-neutral-200 ${
						pathname === '/projects' ? 'text-white' : 'group-hover:text-black'
					}`}
				>
					<path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path>
					<circle cx="13" cy="12" r="2"></circle>
					<path d="M18 19c-2.8 0-5-2.2-5-5v8"></path>
					<circle cx="20" cy="19" r="2"></circle>
				</svg>
			),
			title: 'Projects',
			description: 'Showcase of my projects',
			active: pathname === '/projects',
		},
		{
			id: 'about',
			pathname: '/about',
			icon: (
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
					className={`lucide lucide-user size-5 text-neutral-200 ${
						pathname === '/about' ? 'text-white' : 'group-hover:text-black'
					}`}
				>
					<circle cx="12" cy="8" r="5"></circle>
					<path d="M20 21a8 8 0 0 0-16 0"></path>
				</svg>
			),
			title: 'About',
			description: 'Learn more about me!',
		},
		{
			id: 'blog',
			pathname: '/blog',
			icon: (
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
					className={`lucide lucide-edit size-5 text-neutral-200 ${
						pathname === '/blog' ? 'text-white' : 'group-hover:text-black'
					}`}
				>
					<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
					<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
					<path d="M10 9H8"></path>
					<path d="M16 13H8"></path>
					<path d="M16 17H8"></path>
				</svg>
			),
			title: 'Blog',
			description: 'Thoughts, mental models, and tutorials',
			active: pathname === '/blog',
		},
		{
			id: 'guestbook',
			pathname: '#',
			icon: (
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
					className={`lucide lucide-message-square size-5 text-neutral-200 ${
						pathname === '/guestbook' ? 'text-white' : 'group-hover:text-black'
					}`}
				>
					<path d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"></path>
					<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
				</svg>
			),
			title: 'Guestbook',
			description: 'Leave a message for me',
			active: pathname === '/guestbook',
		},
		{
			id: 'links',
			pathname: '#',
			icon: (
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
					className={`lucide lucide-link size-5 text-neutral-200 ${
						pathname === '/links' ? 'text-white' : 'group-hover:text-black'
					}`}
				>
					<path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
					<path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
					<line x1="8" x2="16" y1="12" y2="12"></line>
				</svg>
			),
			title: 'Links',
			description: 'All my links are here',
			active: pathname === '/links',
		},

		{
			id: 'bucket-list',
			pathname: '#',
			icon: (
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
					className={`lucide lucide-award size-5 text-neutral-200 ${
						pathname === '/bucket-list' ? 'text-white' : 'group-hover:text-black'
					}`}
				>
					<rect x="3" y="5" width="6" height="6" rx="1"></rect>
					<path d="m3 17 2 2 4-4"></path>
					<path d="M13 6h8"></path>
					<path d="M13 12h8"></path>
					<path d="M13 18h8"></path>
				</svg>
			),
			title: 'Bucket List',
			description: 'Things to do at least once in my life',
		},
		// {
		// 	id: 'book-a-call',
		// 	icon: (
		// 		<svg
		// 			xmlns="http://www.w3.org/2000/svg"
		// 			width="24"
		// 			height="24"
		// 			viewBox="0 0 24 24"
		// 			fill="none"
		// 			stroke="currentColor"
		// 			strokeWidth="2"
		// 			strokeLinecap="round"
		// 			strokeLinejoin="round"
		// 			className={`lucide lucide-phone size-5 text-neutral-200 ${
		// 				pathname === '/book-a-call' ? 'text-white' : 'group-hover:text-black'
		// 			}`}
		// 		>
		// 			<path d="M16 2v2"></path>
		// 			<path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path>
		// 			<path d="M8 2v2"></path>
		// 			<circle cx="12" cy="11" r="3"></circle>
		// 			<rect x="3" y="4" width="18" height="18" rx="2"></rect>
		// 		</svg>
		// 	),
		// 	title: 'Book a Call',
		// 	description: 'Book a call with me',
		// },
	];
	const modalClose = () => {
		const closeButton = document.getElementById('close-dialog') as HTMLButtonElement;
		if (closeButton) {
			closeButton.click();
		}
	};
	return (
		<div
			data-slot="command-group"
			className="text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium"
			cmdk-group=""
			role="presentation"
			data-value="Navigation"
		>
			<div cmdk-group-items="" role="group" aria-labelledby=":r2d:">
				{navigationItems.map((item) => (
					<Link href={item?.pathname} key={item.id} onClick={modalClose}>
						<div
							data-slot="command-item"
							className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative cursor-pointer gap-2.5 rounded-xl px-2 py-0.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group flex items-start  hover:bg-white/10 hover:text-white/90"
							id={item.id}
							cmdk-item=""
							role="option"
							aria-disabled="false"
							aria-selected="false"
							data-disabled="false"
							data-selected="false"
							data-value={`${item.title}${item.description}`}
						>
							<div
								className={`mt-0.5 rounded-lg  p-2 group-hover:bg-white/80 ${
									item?.active ? '!bg-blue-500/80' : 'bg-zinc-700/70'
								}`}
							>
								{item.icon}
							</div>
							<div className="flex flex-col">
								<span className="line-clamp-1 text-sm">{item.title}</span>
								<span className="mt-0.5 line-clamp-1 text-xs text-neutral-400 group-hover:text-white">
									{item.description}
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navigations;
