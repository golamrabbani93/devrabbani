'use client';
import Image from 'next/image';
import {Modal} from './components/Modal/Modal';
import {useRouter} from 'next/navigation';
import BookACallModal from './components/BookACallModal/BookACallModal';
import LinkItem from './components/LinkItem/LinkItem';

export const Header = () => {
	const router = useRouter();
	return (
		<div className="animate-fadeInDown fixed inset-x-0 top-4 z-[5000] mx-auto mt-1.5 flex w-full max-w-7xl items-center justify-between px-6 py-1.5 pr-4 lg:top-1 lg:px-0">
			<span
				onClick={() => router.push('/')}
				className="animate-fadeInLeft size-8 p-1 drop-shadow-xl delay-200 md:size-9 cursor-pointer ml-2"
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
