'use client';
import Image from 'next/image';
import Link from 'next/link';
import {Modal} from './components/Modal/Modal';
import {motion} from 'framer-motion';
import {usePathname, useRouter} from 'next/navigation';
import BookACallModal from './components/BookACallModal/BookACallModal';

export const Header = () => {
	const router = useRouter();
	return (
		<div className="animate-fadeInDown fixed inset-x-0 top-4 z-[5000] mx-auto mt-1.5 flex w-full max-w-7xl items-center justify-between px-6 py-1.5 pr-4 lg:top-1 lg:px-0">
			<span
				onClick={() => router.push('/')}
				className="animate-fadeInLeft size-8 p-1 drop-shadow-xl delay-200 md:size-9 cursor-pointer"
			>
				<Image alt="Golam Rabbani logo" width={35} height={35} src="/images/logo.png" />
			</span>
			<div className="absolute top-1/2 left-1/2 hidden w-fit -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-md lg:flex">
				<nav
					aria-label="Main"
					className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center"
				>
					<div style={{position: 'relative'}}>
						<ul className="group flex-1 list-none items-center justify-center gap-1 relative hidden rounded-full border border-white/10 bg-white/5 px-1.5 py-1 lg:flex">
							<LinkItem href="/">Home</LinkItem>

							<LinkItem href="/projects">Work</LinkItem>

							<LinkItem href="/about">About</LinkItem>

							<LinkItem href="/blog">Blog</LinkItem>

							<LinkItem href="/contact">Contact</LinkItem>

							<BookACallModal />
						</ul>
					</div>
				</nav>
			</div>
			{/* Add modal  */}
			<Modal />
		</div>
	);
};

const Cursor = () => {
	return (
		<motion.div
			layoutId="cursor"
			className="bg-primary/5 absolute inset-0 -z-10 w-full rounded-full "
			transition={{type: 'tween', duration: 0.7}}
			style={{borderRadius: '9999px'}}
		>
			<div className="bg-primary absolute -top-2.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full">
				<div className="bg-primary/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md"></div>
				<div className="bg-primary/20 absolute -top-1 h-6 w-8 rounded-full blur-md"></div>
			</div>
		</motion.div>
	);
};
interface ILinkItemProps {
	href: string;
	children: React.ReactNode;
}
const LinkItem = ({href, children}: ILinkItemProps) => {
	const pathname = usePathname();
	return (
		<li className="relative">
			<Link
				href={href}
				className="focus:text-accent-foreground data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground gap-1 rounded-full p-2 focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
			>
				{children}
			</Link>
			{pathname === href && <Cursor />}
		</li>
	);
};
