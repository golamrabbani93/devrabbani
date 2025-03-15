const techList = [
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
];

export const projects = [
	{
		id: '1',
		name: 'All The Jobs',
		image: 'https://res.cloudinary.com/dolttvkme/image/upload/allthejobs_1_apiy5g.png',
		live_link: 'https://allthejobs.vercel.app',
		headline: ' All The Jobs is a job search engine that helps you find the right job for you.',
		description:
			'All The Jobs is a job search engine that helps you find the right job for you. It is a platform that provides you with the latest job listings from various job boards, companies, and organizations. It is a one-stop solution for all your job search needs. You can search for jobs by location, industry, and job type. You can also filter jobs by salary, experience level, and job title. All The Jobs is the perfect tool for job seekers who want to find the right job quickly and easily.',
		admin_info: {
			email: 'admin@rabbani.com',
			pass: '123456@S',
		},
		github_link: [
			{
				client_side: 'https://github.com/golamrabbani93/Eshop-Spots-Ecommerce',
				server_side: 'https://github.com/golamrabbani93/Eshop-Spots-Ecommerce-Server',
			},
		],

		feature:
			'Furniture buy and sell E-commerce web application. | Seller posts his/her product, and Buyer buys his/her product | Viewer cannot add or delete his/her review without signup or login.',
		site_images: [
			'https://i.ibb.co/3Nzv0ZV/eshopspots-shop.png',
			'https://i.ibb.co/th4RBQt/eshopspots-checkout.png',
			'https://i.ibb.co/0C1P56M/eshopspots-payment.png',
			'https://i.ibb.co/R34gv91/eshopspots-cart.png',
			'https://i.ibb.co/KL0RDJH/eshopspots-wishlistpng.png',
			'https://i.ibb.co/HHqmDwm/eshopspots-dashboard.png',
		],
		highLightTools: [
			{
				name: 'NextJS',
				icon: 'https://cdn.simpleicons.org/nextdotjs/white',
			},
			{
				name: 'ReactJS',
				icon: 'https://cdn.simpleicons.org/react',
			},
			{
				name: 'Tailwind CSS',
				icon: 'https://cdn.simpleicons.org/tailwindcss',
			},
			{
				name: 'NodeJS',
				icon: 'https://cdn.simpleicons.org/nodedotjs/darkgreen',
			},
			{
				name: 'ExpressJS',
				icon: 'https://cdn.simpleicons.org/express/white',
			},
			{
				name: 'MongoDB',
				icon: 'https://cdn.simpleicons.org/mongodb/darkgreen',
			},
		],
		allTools: techList,
		background:
			'linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)',
		color: 'rgb(219, 39, 119)',
		shadow: '#f9d793',
	},
	{
		id: '2',
		name: 'E-shopSpots',
		image: 'https://res.cloudinary.com/dolttvkme/image/upload/allthejobs_1_apiy5g.png',
		live_link: 'https://eshopspots.web.app/',
		admin_info: {
			email: 'admin@rabbani.com',
			pass: '123456@S',
		},
		github_link: [
			{
				client_side: 'https://github.com/golamrabbani93/Eshop-Spots-Ecommerce',
				server_side: 'https://github.com/golamrabbani93/Eshop-Spots-Ecommerce-Server',
			},
		],

		feature:
			'Furniture buy and sell E-commerce web application. | Seller posts his/her product, and Buyer buys his/her product | Viewer cannot add or delete his/her review without signup or login.',
		site_images: [
			'https://i.ibb.co/3Nzv0ZV/eshopspots-shop.png',
			'https://i.ibb.co/th4RBQt/eshopspots-checkout.png',
			'https://i.ibb.co/0C1P56M/eshopspots-payment.png',
			'https://i.ibb.co/R34gv91/eshopspots-cart.png',
			'https://i.ibb.co/KL0RDJH/eshopspots-wishlistpng.png',
			'https://i.ibb.co/HHqmDwm/eshopspots-dashboard.png',
		],
		highLightTools: [
			{
				name: 'ReactJS',
				icon: 'https://cdn.simpleicons.org/react',
			},
			{
				name: 'Tailwind CSS',
				icon: 'https://cdn.simpleicons.org/tailwindcss',
			},
			{
				name: 'NodeJS',
				icon: 'https://cdn.simpleicons.org/nodedotjs/darkgreen',
			},
			{
				name: 'ExpressJS',
				icon: 'https://cdn.simpleicons.org/express/white',
			},
			{
				name: 'MongoDB',
				icon: 'https://cdn.simpleicons.org/mongodb/darkgreen',
			},
		],
		allTools: techList,

		background:
			'linear-gradient(188.62deg, rgb(7, 14, 87) 49.9%, rgb(41, 50, 203) 81.7%, rgb(121, 128, 255) 93.88%, rgb(249, 215, 147) 113.5%)',
		color: 'rgb(41, 50, 203)',
		shadow: '#2932cb',
	},
];
