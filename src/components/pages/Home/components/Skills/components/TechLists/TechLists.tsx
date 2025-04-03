import {motion} from 'framer-motion';
const TechLists = () => {
	return (
		<div className="mx-auto mt-16 flex max-w-4xl flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4">
			{[
				// Core Web Technologies
				{name: 'HTML', icon: 'https://cdn.simpleicons.org/html5'},
				{name: 'CSS', icon: 'https://cdn.simpleicons.org/css3'},
				// CSS Preprocessors
				{name: 'SASS', icon: 'https://cdn.simpleicons.org/sass'},
				{name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript'},

				// Advanced JavaScript & TypeScript
				{name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript'},

				// Frontend Frameworks & Libraries
				{name: 'ReactJS', icon: 'https://cdn.simpleicons.org/react'},
				{name: 'NextJS', icon: 'https://cdn.simpleicons.org/nextdotjs/white'},
				{name: 'Redux', icon: 'https://cdn.simpleicons.org/redux/593692'},
				// Styling & UI Libraries
				{name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss'},
				{name: 'Material UI', icon: 'https://cdn.simpleicons.org/mui'},
				{name: 'Antd', icon: 'https://cdn.simpleicons.org/antdesign'},
				{name: 'NextUI', icon: 'https://cdn.simpleicons.org/nextui/white'},
				{name: 'DaisyUI', icon: 'https://cdn.simpleicons.org/daisyui'},
				{name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/Bootstrap'},
				{name: 'React Bootstrap', icon: 'https://cdn.simpleicons.org/reactbootstrap'},

				// Animation & Motion Libraries
				{name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer'},
				{name: 'GSAP', icon: 'https://cdn.simpleicons.org/greensock/white'},
				{name: 'Lottie Files', icon: 'https://cdn.simpleicons.org/lottiefiles'},

				// Backend Technologies
				{name: 'NodeJS', icon: 'https://cdn.simpleicons.org/nodedotjs/darkgreen'},
				{name: 'ExpressJS', icon: 'https://cdn.simpleicons.org/express/white'},
				{name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/darkgreen'},
				{name: 'Mongoose', icon: 'https://cdn.simpleicons.org/mongoosedotws'},

				// State Management & Tools

				{name: 'Zod', icon: 'https://cdn.simpleicons.org/zod/purple'},

				// Version Control & Deployment
				{name: 'Git', icon: 'https://cdn.simpleicons.org/git'},
				{name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white'},
				{name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/white'},
				{name: 'Netlify', icon: 'https://cdn.simpleicons.org/netlify'},

				// APIs & Miscellaneous Tools
				{name: 'Postman', icon: 'https://cdn.simpleicons.org/postman'},
				{name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/ffc413'},
				{name: 'JsonWebToken', icon: 'https://cdn.simpleicons.org/jsonwebtokens/00b9f1'},
				{name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe'},
				{name: 'Api', icon: 'https://cdn.simpleicons.org/filedotio'},

				// Browsers
				{name: 'Fire Fox', icon: 'https://cdn.simpleicons.org/firefox'},
				{name: 'Chrome', icon: 'https://cdn.simpleicons.org/googlechrome'},

				// Miscellaneous
				{name: 'Shadcn', icon: 'https://cdn.simpleicons.org/shadcnui/white'},
				{name: 'React to PDF', icon: 'https://cdn.simpleicons.org/files'},
				{name: 'Yarn', icon: 'https://cdn.simpleicons.org/yarn'},
				{name: 'NPM', icon: 'https://cdn.simpleicons.org/npm'},
				{name: 'Prettier', icon: 'https://cdn.simpleicons.org/prettier'},
				{name: 'ESLint', icon: 'https://cdn.simpleicons.org/eslint'},
			].map((tech, index) => (
				<motion.div
					key={index}
					draggable={false}
					className="relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-1.5 text-sm text-white/80 lg:text-base"
					initial={{opacity: 0, rotate: -10, scale: 0.5}}
					whileInView={{opacity: 1, rotate: 0, scale: 1}}
					transition={{delay: index * 0.1}}
					exit={{opacity: 0, rotate: -10, scale: 0.5}}
					viewport={{once: false, amount: 0.2}}
				>
					{tech.icon && (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							height={18}
							width={18}
							alt={tech.name}
							className="mr-0-1 w-4 lg:w-5"
							src={tech.icon}
						/>
					)}
					<span className="relative">
						<span className="animate-gradient-x text-colorfull absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							{tech.name}
						</span>
						<span className="transition-colors duration-300">{tech.name}</span>
					</span>
				</motion.div>
			))}
		</div>
	);
};

export default TechLists;
