'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Modal} from './components/Modal/Modal';

const Header = () => {
	return (
		<div className="animate-fadeInDown fixed inset-x-0 top-4 z-[5000] mx-auto mt-1.5 flex w-full max-w-7xl items-center justify-between px-6 py-1.5 pr-4 lg:top-1 lg:px-0">
			<Link href="/" className="animate-fadeInLeft size-8 p-1 drop-shadow-xl delay-200 md:size-9">
				<Image alt="Golam Rabbani logo" width={35} height={35} src="/images/logo.png" />
			</Link>
			<div className="absolute top-1/2 left-1/2 hidden w-fit -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-md lg:flex">
				<nav
					aria-label="Main"
					className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center"
				>
					<div style={{position: 'relative'}}>
						<ul className="group flex-1 list-none items-center justify-center gap-1 relative hidden rounded-full border border-white/10 bg-white/5 px-1.5 py-1 lg:flex">
							<li className="relative">
								<Link
									href="/"
									className="gap-1 rounded-full p-2 inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
								>
									Home
								</Link>
								<div
									className="bg-primary/5 absolute inset-0 -z-10 w-full rounded-full"
									style={{transform: 'none', transformOrigin: '50% 50% 0px'}}
								>
									<div className="bg-primary absolute -top-2.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full">
										<div className="bg-primary/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md"></div>
										<div className="bg-primary/20 absolute -top-1 h-6 w-8 rounded-full blur-md"></div>
									</div>
								</div>
							</li>
							<li className="relative">
								<Link
									href="/projects"
									className="gap-1 rounded-full p-2 inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
								>
									Work
								</Link>
							</li>
							<li className="relative">
								<Link
									href="/about"
									className="gap-1 rounded-full p-2 inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
								>
									About
								</Link>
							</li>
							<li className="relative">
								<button className="group h-9 w-max items-center justify-center rounded-full inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85">
									Blog
								</button>
							</li>
							<li className="relative">
								<button className="group h-9 w-max items-center justify-center rounded-full inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85">
									More
								</button>
							</li>
							<li className="relative">
								<button className="items-center justify-center gap-2 relative inline-block h-full cursor-pointer rounded-full bg-white/10 px-4 py-1.5 text-sm font-light text-white/70 transition-all duration-300 hover:bg-white/15 hover:text-white/90">
									Book a Call
									<div className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-white/40 opacity-30 blur-sm"></div>
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			{/* Add modal  */}
			<Modal />
		</div>
	);
};

export default Header;
