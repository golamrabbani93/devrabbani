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
				{name: 'Redux', icon: 'https://cdn.simpleicons.org/redux/593692'},
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
			].map((tech, index) => (
				<div
					key={index}
					draggable={false}
					className="relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-1.5 text-sm text-white/80 lg:text-base"
					style={{opacity: 1, transform: 'none'}}
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
					{tech.name}
				</div>
			))}
		</div>
	);
};

export default TechLists;
