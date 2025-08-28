export const allProjects = [
	{
		id: '6718b81aee57ea421afec216',
		_id: 'all-the-jobs',
		name: 'AlltheJobs',
		fullPhoto:
			'https://res.cloudinary.com/dolttvkme/image/upload/v1750505686/all-the-jobs_yt4ryq.jpg',
		images: [
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729673240/uk0ocg19uhp-1729673236236-images-Bikeist-dash.png',
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729673241/5p1p4uzu58-1729673238252-images-Bikeist-list.png',
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729673241/rhdd8cbfhh-1729673239111-images-Bikeist-create.png',
		],
		liveLink: 'https://all-the-jobs.vercel.app/',
		githubClientLink: 'https://github.com/golamrabbani93/allthejobs',

		highLightTech: [
			{name: 'HTML', image: 'https://cdn.simpleicons.org/html5'},
			{name: 'CSS', image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png'},
			{name: 'Tailwind', image: 'https://cdn.simpleicons.org/tailwindcss'},
			{name: 'Javascript', image: 'https://cdn.simpleicons.org/javascript'},

			{name: 'ReactJS', image: 'https://cdn.simpleicons.org/react'},
			{name: 'NextJS', image: 'https://cdn.simpleicons.org/nextdotjs/white'},
			{name: 'JWT', image: 'https://cdn.simpleicons.org/jsonwebtokens/white'},
			{name: 'React Hook Form', image: 'https://cdn.simpleicons.org/reacthookform'},
			{name: 'Stream-chat', image: 'https://cdn.simpleicons.org/streamlabs'},
			{name: 'Carousel', image: 'https://cdn.simpleicons.org/clickhouse'},
			{name: 'vercel', image: 'https://cdn.simpleicons.org/vercel/white'},
		],
		description:
			'Allthejobs is a full-stack job board application that allows users to post, search, and apply for jobs.',
		descriptions: {
			head: 'A full-stack job board application built with modern web technologies, enabling users to post, search, and apply for jobs seamlessly.',
			founders:
				'<strong>AllTheJobs</strong> is a full-stack job portal that enables users to seamlessly post, search, and apply for jobs. Designed with scalability, performance, and clean UI/UX in mind, it provides a professional and efficient platform for both job seekers and employers.',
			overview:
				'AllTheJobs is a comprehensive web application where job seekers can explore opportunities and employers can post openings effortlessly. With full-stack functionality and optimized workflows, it bridges the gap between candidates and companies while offering an intuitive experience.',
			outcome:
				'AllTheJobs has been successfully developed and deployed, earning positive feedback for its usability, reliability, and modern design. It demonstrates the potential of full-stack applications to solve real-world hiring and job-search challenges effectively.',
		},
		Challenges: {
			title: 'Challenges & Learnings',
			points: [
				{
					pointTitle: '🚀 Building AllTheJobs from Scratch',
					description:
						'Designing and developing the platform end-to-end gave me practical insights into handling real-world job boards with scalability in mind.',
				},
				{
					pointTitle: '🔄 Adopting the Next.js 15 Ecosystem',
					description:
						'Working with experimental features like Partial Prerendering and Server Actions was both exciting and challenging. Since documentation and community resources were still evolving, I had to frequently refer to source code and RFCs to understand internals.',
				},
				{
					pointTitle: '🔒 Auth.js Integration',
					description:
						'Although Auth.js offered a solid foundation for OAuth, customizing session behavior and securing edge cases (e.g., token expiry) required debugging and patching both server and client logic.',
				},
				{
					pointTitle: '🎨 Clean & User-Friendly UI',
					description:
						'Focused on building a minimal yet engaging UI with modern styling practices, ensuring responsiveness and smooth navigation across all devices.',
				},
				{
					pointTitle: '⚡ Performance & Scalability',
					description:
						'Optimized queries, caching strategies, and server-side rendering made the platform fast and ready to handle growth in both users and job postings.',
				},
			],
		},

		color: 'pink',
		technologies: [
			{
				id: '67173a304a8476b6667fd08d',
				name: 'HTML',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' enable-background='new 0 0 434.1 434.1' version='1.1' viewBox='0 0 434.1 434.1' xml:space='preserve' width='58' height='58'> <path fill='#fff' d='M82.7 44.3H362.2V366.7H82.7z'> </path><path fill='#FC490B' d='M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z'> </path></svg>",
			},
			{
				id: '67173a304a8476b6667fd08e',
				name: 'CSS',
				image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png',
			},
			{
				id: '67173a304a8476b6667fd090',
				name: 'Tailwind',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' width='58.3' height='35.2' fill='none' viewBox='0 0 65 39'><path fill='#06B6D4' fill-rule='evenodd' d='M32.5 0c-8.665 0-14.081 4.333-16.25 13 3.251-4.332 7.042-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.395 3.173 3.235 6.876 6.976 14.927 6.976 8.665 0 14.081-4.333 16.25-13-3.248 4.335-7.039 5.96-11.373 4.875-2.476-.618-4.232-2.41-6.2-4.396C44.244 3.725 40.558 0 32.5 0zM16.25 19.497c-8.665 0-14.081 4.334-16.25 13 3.255-4.331 7.046-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.4C20.745 35.254 24.448 39 32.5 39c8.665 0 14.081-4.333 16.25-13-3.248 4.332-7.039 5.953-11.373 4.864-2.476-.618-4.232-2.41-6.2-4.396-3.173-3.235-6.876-6.981-14.927-6.981v.01z' clip-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd091',
				name: 'SASS',
				image: 'https://cdn.simpleicons.org/sass',
			},
			{
				id: '67173a304a8476b6667fd095',
				name: 'JavaScript',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='55' height='55' viewBox='0 0 512 512'><path fill='#ffdf00' d='M0 0h512v512H0z'></path><path d='M343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232V235.089h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z'></path></svg>",
			},

			{
				id: '67173a304a8476b6667fd097',
				name: 'React',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.232 23 20.463' width='58' height='58'><circle r='2.05' fill='#61dafb'></circle><g fill='none' stroke='#61dafb'><ellipse rx='11' ry='4.2'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(60)'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(120)'></ellipse></g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09a',
				name: 'Next JS',
				image: 'https://cdn.simpleicons.org/nextdotjs/white',
			},
			{
				id: '67173a304a8476b6667fd096',
				name: 'Redux',
				image: 'https://cdn.simpleicons.org/redux',
			},
			{
				id: '67173a304a8476b6667fd09b',
				name: 'Radix UI',
				image: 'https://cdn.simpleicons.org/radixui/white',
			},
			{
				id: '67173a304a8476b6667fd09a',
				name: 'Git',
				image: 'https://cdn.simpleicons.org/git',
			},

			{
				id: '67173a304a8476b6667fd09b',
				name: 'Github',
				image:
					"<svg viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Dribbble-Light-Preview' transform='translate(-140.000000, -7559.000000)' fill='#ffffff'> <g id='icons' transform='translate(56.000000, 160.000000)'> <path d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399' id='github-[#142]'> </path> </g> </g> </g> </g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09d',
				name: 'React Toast',
				image: 'https://cdn.simpleicons.org/typst',
			},

			{
				id: '67173a304a8476b6667fd0a1',
				name: 'Email JS',
				image: 'https://cdn.simpleicons.org/minutemailer',
			},
			{
				id: '67173a304a8476b6667fd0a2',
				name: 'Stripe',
				image: 'https://cdn.simpleicons.org/stripe',
			},
			{
				id: '67173a304a8476b6667fd0a3',
				name: 'JWT',
				image: 'https://jwt.io/img/pic_logo.svg',
			},
			{
				id: '67173a304a8476b6667fd0a4',
				name: 'Axios',
				image: 'https://cdn.simpleicons.org/axios',
			},
			{
				id: '67174c534a8476b6667fd0ab',
				name: 'Bcrypt JS',
				image: 'https://cdn.simpleicons.org/letsencrypt/white',
			},
			{
				id: '67176feb4a8476b6667fd0da',
				name: 'API',
				image: 'https://cdn.simpleicons.org/fastapi',
			},
			{
				id: '67176feb4a8476b6667fffd0da',
				name: 'ZOD',
				image: 'https://cdn.simpleicons.org/zod',
			},
		],
		keyFeatures: [
			{
				featureTitle: '🚀 Seamless Job Posting',
				description:
					'Employers can quickly create and manage job postings with a user-friendly interface. Each job listing supports structured fields like title, description, salary, experience level, and location, ensuring that candidates receive all the necessary details before applying. This feature significantly reduces friction for recruiters and streamlines the hiring process from start to finish.',
			},
			{
				featureTitle: '🔍 Advanced Job Search',
				description:
					'Job seekers can filter opportunities based on multiple parameters such as job title, category, location, salary range, and work type (remote, hybrid, on-site). With optimized search and pagination, users can efficiently navigate through thousands of job listings without performance issues, leading to a smooth and intuitive job-finding experience.',
			},
			{
				featureTitle: '📂 Application Tracking',
				description:
					'Applicants can view the status of all their job applications in one place. This feature offers real-time updates, helping candidates track whether their application has been viewed, shortlisted, or rejected. Employers also benefit by having a clear overview of candidate progress, enabling them to respond faster and manage applications more effectively.',
			},
			{
				featureTitle: '👥 User Profiles & Dashboards',
				description:
					'Both job seekers and employers have personalized dashboards. Job seekers can build detailed profiles with resumes, skills, and experiences, while employers can showcase their company profile and job openings. This centralization of information helps create a professional ecosystem where both sides can interact and collaborate effectively.',
			},
			{
				featureTitle: '💳 Secure Payments & Premium Listings',
				description:
					'Employers have the option to promote their job postings via premium listings, ensuring higher visibility. Integrated with secure payment gateways, this feature allows businesses to invest in their recruitment campaigns with confidence, while maintaining transparency and security for all financial transactions within the platform.',
			},
		],

		features: [
			'Responsive design with a mobile-first approach.',
			'Video consultant with a calendar booking system.',
			'Manage full website feature via an admin panel.',
			'Secure payment integration via Stripe.',
			'Profile management and bike comparison tool.',
			'History & Milestones section with a timeline of achievements.',
		],
		filter: 'dynamic',
		isDeleted: false,
		adminEmail: 'admin@rabbani.com',
		adminPassword: '123456',
		status: 'Active',
		createdAt: '2024-10-23T08:47:22.115Z',
		updatedAt: '2024-10-23T08:47:22.115Z',
		__v: 0,
	},
	{
		id: '6718b81aee57ea421afec217',
		_id: 'bikeist',
		name: 'Bikeist',
		fullPhoto: 'https://res.cloudinary.com/dolttvkme/image/upload/v1729674213/bikeist_gg9bhn.jpg',
		images: [
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729673240/uk0ocg19uhp-1729673236236-images-Bikeist-dash.png',
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729673241/5p1p4uzu58-1729673238252-images-Bikeist-list.png',
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729673241/rhdd8cbfhh-1729673239111-images-Bikeist-create.png',
		],
		liveLink: 'https://bikeist.vercel.app/',
		githubClientLink: 'https://github.com/golamrabbani93/bikeist',
		githubServerLink: 'https://github.com/golamrabbani93/Bike-Rental-Reservation-System-Backend',
		highLightTech: [
			{name: 'HTML', image: 'https://cdn.simpleicons.org/html5'},
			{name: 'CSS', image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png'},
			{name: 'Tailwind', image: 'https://cdn.simpleicons.org/tailwindcss'},
			{name: 'Javascript', image: 'https://cdn.simpleicons.org/javascript'},
			{name: 'TypeScript', image: 'https://cdn.simpleicons.org/typescript'},
			{name: 'ReactJs', image: 'https://cdn.simpleicons.org/react'},
			{name: 'MongoDB', image: 'https://cdn.simpleicons.org/mongodb'},
			{name: 'Express', image: 'https://cdn.simpleicons.org/express/white'},
			{name: 'NodeJS', image: 'https://cdn.simpleicons.org/nodedotjs/darkgreen'},
			{name: 'JWT', image: 'https://cdn.simpleicons.org/jsonwebtokens/white'},
			{name: 'vercel', image: 'https://cdn.simpleicons.org/vercel/white'},
		],
		description:
			'Bikeist is a full-stack bike rental system where users can browse, rent, and manage bike bookings, while admins oversee bike inventory and reservations.',
		descriptions: {
			head: 'A full-stack bike rental application built with modern web technologies, enabling users to browse, rent, and manage bike bookings seamlessly, with admin tools for inventory and reservation management.',
			founders:
				'<strong>Bikeist</strong> is a comprehensive bike rental platform designed for ease of use, scalability, and performance. It provides a seamless experience for users to rent bikes and for admins to manage inventory, with a focus on modern UI/UX and robust backend functionality.',
			overview:
				'Bikeist empowers users to explore available bikes, make reservations, and track their rental history through an intuitive dashboard. Admins can manage bike listings, monitor bookings, and handle payments, creating a streamlined ecosystem for bike rentals.',
			outcome:
				'Bikeist has been successfully deployed, receiving praise for its user-friendly interface, reliable performance, and innovative features like gamified discounts. It showcases the power of full-stack development in addressing real-world rental service challenges.',
		},
		Challenges: {
			title: 'Challenges & Learnings',
			points: [
				{
					pointTitle: '🚀 Building a Scalable Bike Rental Platform',
					description:
						'Developing Bikeist from scratch provided deep insights into creating a scalable full-stack application tailored for bike rental services, balancing user and admin needs.',
				},
				{
					pointTitle: '🔄 Integrating MongoDB with Mongoose',
					description:
						'Implementing MongoDB with Mongoose for efficient data management was challenging due to complex relationships between bikes, users, and bookings. Careful schema design and query optimization were key to success.',
				},
				{
					pointTitle: '🔒 Secure Authentication with JWT',
					description:
						'Customizing JWT for secure user and admin authentication required handling edge cases like token refresh and session management, ensuring robust security across the platform.',
				},
				{
					pointTitle: '🎨 Gamified UI with Spin-the-Wheel',
					description:
						'Creating an engaging spin-the-wheel feature for discounts demanded innovative UI design and seamless integration with the backend, enhancing user interaction and retention.',
				},
				{
					pointTitle: '⚡ Optimizing for Performance',
					description:
						'Ensuring fast load times and smooth interactions involved optimizing API calls, implementing caching, and leveraging Vercel’s deployment for scalability.',
				},
			],
		},
		color: 'pink',
		technologies: [
			{
				id: '67173a304a8476b6667fd08d',
				name: 'HTML',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' enable-background='new 0 0 434.1 434.1' version='1.1' viewBox='0 0 434.1 434.1' xml:space='preserve' width='58' height='58'> <path fill='#fff' d='M82.7 44.3H362.2V366.7H82.7z'> </path><path fill='#FC490B' d='M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z'> </path></svg>",
			},
			{
				id: '67173a304a8476b6667fd08e',
				name: 'CSS',
				image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png',
			},
			{
				id: '67173a304a8476b6667fd090',
				name: 'Tailwind',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' width='58.3' height='35.2' fill='none' viewBox='0 0 65 39'><path fill='#06B6D4' fill-rule='evenodd' d='M32.5 0c-8.665 0-14.081 4.333-16.25 13 3.251-4.332 7.042-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.395 3.173 3.235 6.876 6.976 14.927 6.976 8.665 0 14.081-4.333 16.25-13-3.248 4.335-7.039 5.96-11.373 4.875-2.476-.618-4.232-2.41-6.2-4.396C44.244 3.725 40.558 0 32.5 0zM16.25 19.497c-8.665 0-14.081 4.334-16.25 13 3.255-4.331 7.046-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.4C20.745 35.254 24.448 39 32.5 39c8.665 0 14.081-4.333 16.25-13-3.248 4.332-7.039 5.953-11.373 4.864-2.476-.618-4.232-2.41-6.2-4.396-3.173-3.235-6.876-6.981-14.927-6.981v.01z' clip-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd091',
				name: 'Ant Design',
				image: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
			},
			{
				id: '67173a304a8476b6667fd095',
				name: 'JavaScript',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='55' height='55' viewBox='0 0 512 512'><path fill='#ffdf00' d='M0 0h512v512H0z'></path><path d='M343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232V235.089h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd096',
				name: 'TypeScript',
				image:
					"<svg fill='none' height='26' viewBox='0 0 27 26' width='27' xmlns='http://www.w3.org/2000/svg'><path clip-rule='evenodd' d='m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z' fill='#3178C6' fill-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd097',
				name: 'React',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.232 23 20.463' width='58' height='58'><circle r='2.05' fill='#61dafb'></circle><g fill='none' stroke='#61dafb'><ellipse rx='11' ry='4.2'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(60)'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(120)'></ellipse></g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09a',
				name: 'Git',
				image: 'https://loopedback.com/wp-content/uploads/2019/12/git.png',
			},
			{
				id: '67173a304a8476b6667fd09b',
				name: 'Github',
				image:
					"<svg viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Dribbble-Light-Preview' transform='translate(-140.000000, -7559.000000)' fill='#ffffff'> <g id='icons' transform='translate(56.000000, 160.000000)'> <path d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399' id='github-[#142]'> </path> </g> </g> </g> </g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09d',
				name: 'React Toast',
				image: 'https://i.ibb.co/gTdNDLs/toast.png',
			},
			{
				id: '67173a304a8476b6667fd09f',
				name: 'Node JS',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='58' height='58' viewBox='0 0 512 512'><linearGradient id='XMLID_00000118357800129798447730000005862678814579567263_' x1='337.597' x2='156.289' y1='89.494' y2='459.361' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#3f873f'></stop><stop offset='0.33' stop-color='#3f8b3d'></stop><stop offset='0.637' stop-color='#3e9638'></stop><stop offset='0.934' stop-color='#3da92e'></stop><stop offset='1' stop-color='#3dae2b'></stop></linearGradient><linearGradient id='SVGID_1_' x1='225.787' x2='733.809' y1='282.815' y2='-92.539' gradientUnits='userSpaceOnUse'><stop offset='0.138' stop-color='#3f873f'></stop><stop offset='0.402' stop-color='#52a044'></stop><stop offset='0.713' stop-color='#64b749'></stop><stop offset='0.908' stop-color='#6abf4b'></stop></linearGradient><linearGradient id='SVGID_00000048489710280204197710000009720263475330385543_' x1='24.028' x2='487.275' y1='255.987' y2='255.987' gradientUnits='userSpaceOnUse'><stop offset='0.092' stop-color='#6abf4b'></stop><stop offset='0.287' stop-color='#64b749'></stop><stop offset='0.598' stop-color='#52a044'></stop><stop offset='0.862' stop-color='#3f873f'></stop></linearGradient><path id='XMLID_143_' fill='url(#XMLID_00000118357800129798447730000005862678814579567263_)' fill-rule='evenodd' d='M268.14 3.246a24.233 24.233 0 00-24.231 0L43.22 119.058a24.226 24.226 0 00-12.125 20.994v231.802c0 8.659 4.62 16.657 12.117 20.994L243.9 508.752a24.253 24.253 0 0024.247 0l200.642-115.905a24.258 24.258 0 0012.115-20.994v-231.81c0-8.659-4.62-16.657-12.123-20.986z' clip-rule='evenodd'></path><path fill='url(#SVGID_1_)' d='M469.18 119.058L267.93 3.246c-1.985-1.147-4.112-1.968-6.299-2.507L36.08 386.577c1.935 2.865 3.818 4.803 6.355 6.271l201.592 115.905c5.71 3.296 12.496 4.067 18.723 2.346L474.577 123.21a26.411 26.411 0 00-5.397-4.152z'></path><path fill='url(#SVGID_00000048489710280204197710000009720263475330385543_)' d='M469.293 392.848c5.848-3.384 9.989-9.312 11.148-16.265L261.631.739c-5.761-1.147-12.959-.486-18.143 2.507L43.59 118.361l215.947 393.404c3.082-.42 6.1-1.417 8.863-3.012z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd0a0',
				name: 'Express JS',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0,0,256,256'>\n<g fill='#ffffff' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><g transform='scale(5.12,5.12)'><path d='M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z'></path></g></g>\n</svg>",
			},
			{
				id: '67173a304a8476b6667fd0a1',
				name: 'Mongoose',
				image: 'https://seeklogo.com/images/M/Mongoose-logo-5EDDD83F50-seeklogo.com.png',
			},
			{
				id: '67173a304a8476b6667fd0a2',
				name: 'Stripe',
				image:
					"<svg viewBox='0 0 60 25' xmlns='http://www.w3.org/2000/svg' width='60' height='25' class='UserLogo variant-- '><path fill='var(--userLogoColor, #0A2540)' d='M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z' fill-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd0a3',
				name: 'JWT',
				image: 'https://jwt.io/img/pic_logo.svg',
			},
			{
				id: '67173a304a8476b6667fd0a4',
				name: 'Vercel',
				image:
					"<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M12 1L24 22H0L12 1Z' fill='#000000'></path> </g></svg>",
			},
			{
				id: '67174c534a8476b6667fd0ab',
				name: 'MongoDB',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' image-rendering='optimizeQuality' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' viewBox='0 0 598.88 1333.33' width='62' height='62'><g fill-rule='nonzero'><path fill='#599636' d='M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z'></path><path fill='#6cac48' d='M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z'></path><path fill='#c2bfbf' d='M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z'></path></g></svg>",
			},
		],
		keyFeatures: [
			{
				featureTitle: '🚴‍♂️ Easy Bike Rental Process',
				description:
					'Users can browse a wide range of bikes, select rental durations, and book with a few clicks. The interface includes detailed bike information like type, availability, and pricing, ensuring a smooth rental experience.',
			},
			{
				featureTitle: '📊 User Dashboard with Rental History',
				description:
					'A personalized dashboard allows users to view their rental history, including paid and unpaid bookings, with clear tabs for easy navigation, helping them manage their rentals efficiently.',
			},
			{
				featureTitle: '🎰 Gamified Discount Feature',
				description:
					'A spin-the-wheel feature offers users a fun way to win discounts on rentals, increasing engagement and encouraging repeat usage through an interactive and rewarding experience.',
			},
			{
				featureTitle: '💳 Secure Payment Integration',
				description:
					'Integrated with Stripe, Bikeist ensures secure and seamless payment processing for rentals, providing users with confidence and admins with reliable transaction management.',
			},
			{
				featureTitle: '🔧 Admin Panel for Bike Management',
				description:
					'Admins can add, update, or remove bikes from the inventory, monitor bookings, and manage user accounts through a robust admin panel, streamlining operational workflows.',
			},
		],
		features: [
			'User-friendly interface for renting bikes.',
			'User dashboard with rental history, including paid and unpaid tabs.',
			'Gamified discount feature with a spin-the-wheel component.',
			'Secure payment integration via Stripe.',
			'Profile management and bike comparison tool.',
			'History & Milestones section with a timeline of achievements.',
		],
		filter: 'dynamic',
		isDeleted: false,
		adminEmail: 'admin@rabbani.com',
		adminPassword: '123456',
		status: 'Active',
		createdAt: '2024-10-23T08:47:22.115Z',
		updatedAt: '2024-10-23T08:47:22.115Z',
		__v: 0,
	},
	{
		id: '671b1696d9f849e31575cb57',
		name: 'CarePress',
		fullPhoto:
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729828504/pkyrgm1dwk-1729828471957-fullPhoto-carepress.png',
		images: [
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729828469/4n3ua9xrfpo-1729828462247-images-carepress-home.png',
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729828472/uqfyfr6k57h-1729828465733-images-carepress-post.png',
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729828474/ebjlwrdrxrr-1729828467510-images-carepress-profile.png',
			'https://res.cloudinary.com/dolttvkme/image/upload/v1729828476/m132wjasfh-1729828471141-images-carepress-user.png',
		],
		description:
			'A full-stack social media application for sharing posts, following users, and liking posts.',
		descriptions: {
			head: 'CarePress is a dynamic social media platform built with cutting-edge web technologies, enabling pet care enthusiasts to create, share, and engage with content while fostering a vibrant community through follows, likes, and premium features.',
			founders:
				'<strong>CarePress</strong> is a community-driven social media application designed for pet care lovers. It combines a sleek, modern UI/UX powered by Next.js with a robust backend to deliver a scalable and engaging platform for sharing tips, stories, and advice.',
			overview:
				'CarePress empowers users to register, post content using a rich text editor, follow other pet enthusiasts, and interact through upvotes and comments. It offers premium content access via Stripe payments and includes gamified discounts to boost user engagement.',
			outcome:
				'Deployed successfully on Vercel, CarePress has been praised for its intuitive interface, secure authentication, and innovative features like gamified discounts, showcasing the power of full-stack development in creating engaging social platforms.',
		},
		Challenges: {
			title: 'Challenges & Learnings',
			points: [
				{
					pointTitle: '🌐 Crafting a Scalable Social Media Ecosystem',
					description:
						'Building CarePress required integrating complex social features like posting, following, and commenting while ensuring scalability and performance across a diverse user base.',
				},
				{
					pointTitle: '⚙️ Optimizing Next.js for Dynamic Content',
					description:
						'Leveraging Next.js for server-side rendering and dynamic routing posed challenges in optimizing performance and SEO, requiring careful configuration and efficient data fetching strategies.',
				},
				{
					pointTitle: '🔒 Implementing Secure JWT Authentication',
					description:
						'Ensuring secure user authentication with JWT for registration, login, and password recovery involved managing token lifecycles and securing premium content access.',
				},
				{
					pointTitle: '🎮 Designing Gamified User Engagement',
					description:
						'Creating a gamified discount feature for premium content demanded innovative UI/UX design and seamless backend integration to enhance user retention and interaction.',
				},
				{
					pointTitle: '⚡ Enhancing MongoDB Performance',
					description:
						'Handling large datasets for posts, comments, and user interactions required optimized MongoDB schemas and queries to ensure fast load times and smooth user experiences.',
				},
			],
		},
		keyFeatures: [
			{
				featureTitle: '📝 Rich Text Post Creation',
				description:
					'Users can create and format posts using a rich text editor or Markdown, enabling expressive and visually appealing content for sharing pet care tips and stories.',
			},
			{
				featureTitle: '🤝 Community Engagement Tools',
				description:
					'Features like following, upvoting, and commenting allow users to connect with the pet care community, fostering interaction and collaboration.',
			},
			{
				featureTitle: '🎰 Gamified Discount System',
				description:
					'A gamified discount feature encourages user engagement by offering rewards for premium content access, creating a fun and interactive experience.',
			},
			{
				featureTitle: '💳 Secure Stripe Payments',
				description:
					'Integrated Stripe payments provide secure access to premium content, ensuring reliable and safe transactions for users and admins.',
			},
			{
				featureTitle: '🔍 Content Search and Filtering',
				description:
					'Users can search and filter pet care tips and stories by category and upvote count, making it easy to discover relevant and popular content.',
			},
		],
		color: 'purple',
		highLightTech: [
			{name: 'HTML', image: 'https://cdn.simpleicons.org/html5'},
			{name: 'CSS', image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png'},
			{name: 'Tailwind', image: 'https://cdn.simpleicons.org/tailwindcss'},
			{name: 'Javascript', image: 'https://cdn.simpleicons.org/javascript'},
			{name: 'TypeScript', image: 'https://cdn.simpleicons.org/typescript'},
			{name: 'ReactJs', image: 'https://cdn.simpleicons.org/react'},
			{name: 'NextJs', image: 'https://cdn.simpleicons.org/nextdotjs/white'},
			{name: 'MongoDB', image: 'https://cdn.simpleicons.org/mongodb'},
			{name: 'Express', image: 'https://cdn.simpleicons.org/express/white'},
			{name: 'NodeJS', image: 'https://cdn.simpleicons.org/nodedotjs/darkgreen'},
			{name: 'JWT', image: 'https://cdn.simpleicons.org/jsonwebtokens/white'},
			{name: 'vercel', image: 'https://cdn.simpleicons.org/vercel/white'},
		],
		liveLink: 'https://carepress.vercel.app/',
		githubClientLink: 'https://github.com/golamrabbani93/carepress',
		githubServerLink: 'https://github.com/golamrabbani93/carepress-backend',
		technologies: [
			{
				id: '67173a304a8476b6667fd08d',
				name: 'HTML',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' enable-background='new 0 0 434.1 434.1' version='1.1' viewBox='0 0 434.1 434.1' xml:space='preserve' width='58' height='58'> <path fill='#fff' d='M82.7 44.3H362.2V366.7H82.7z'> </path><path fill='#FC490B' d='M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z'> </path></svg>",
			},
			{
				id: '67173a304a8476b6667fd08e',
				name: 'CSS',
				image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png',
			},
			{
				id: '67173a304a8476b6667fd090',
				name: 'Tailwind',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' width='58.3' height='35.2' fill='none' viewBox='0 0 65 39'><path fill='#06B6D4' fill-rule='evenodd' d='M32.5 0c-8.665 0-14.081 4.333-16.25 13 3.251-4.332 7.042-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.395 3.173 3.235 6.876 6.976 14.927 6.976 8.665 0 14.081-4.333 16.25-13-3.248 4.335-7.039 5.96-11.373 4.875-2.476-.618-4.232-2.41-6.2-4.396C44.244 3.725 40.558 0 32.5 0zM16.25 19.497c-8.665 0-14.081 4.334-16.25 13 3.255-4.331 7.046-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.4C20.745 35.254 24.448 39 32.5 39c8.665 0 14.081-4.333 16.25-13-3.248 4.332-7.039 5.953-11.373 4.864-2.476-.618-4.232-2.41-6.2-4.396-3.173-3.235-6.876-6.981-14.927-6.981v.01z' clip-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd095',
				name: 'JavaScript',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='55' height='55' viewBox='0 0 512 512'><path fill='#ffdf00' d='M0 0h512v512H0z'></path><path d='M343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232V235.089h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd096',
				name: 'TypeScript',
				image:
					"<svg fill='none' height='26' viewBox='0 0 27 26' width='27' xmlns='http://www.w3.org/2000/svg'><path clip-rule='evenodd' d='m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z' fill='#3178C6' fill-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd098',
				name: 'Nexj JS',
				image:
					"<svg viewBox='-25.6 -25.6 307.20 307.20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' preserveAspectRatio='xMidYMid' fill='#000000' stroke='#000000' transform='matrix(1, 0, 0, 1, 0, 0)rotate(0)'> <g id='SVGRepo_bgCarrier' stroke-width='0'></g> <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g> <g id='SVGRepo_iconCarrier'> <g> <path d='M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z' fill='#ffffff'></path> </g> </g> </svg>",
			},
			{
				id: '67173a304a8476b6667fd099',
				name: 'Next UI',
				image:
					"<svg viewBox='0 0 256 256' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#000000'> <g id='SVGRepo_bgCarrier' stroke-width='0'></g> <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g> <g id='SVGRepo_iconCarrier'> <path d='M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128 128-57.31 128-128S198.69 0 128 0zm0 230.4c-56.41 0-102.4-45.99-102.4-102.4S71.59 25.6 128 25.6 230.4 71.59 230.4 128 184.41 230.4 128 230.4z' fill='#000'></path> <text x='50%' y='50%' fill='#FFF' font-size='96' font-family='Arial' font-weight='bold' text-anchor='middle' alignment-baseline='middle'>UI</text> </g> </svg>",
			},
			{
				id: '67173a304a8476b6667fd09a',
				name: 'Git',
				image: 'https://loopedback.com/wp-content/uploads/2019/12/git.png',
			},
			{
				id: '67173a304a8476b6667fd09b',
				name: 'Github',
				image:
					"<svg viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Dribbble-Light-Preview' transform='translate(-140.000000, -7559.000000)' fill='#ffffff'> <g id='icons' transform='translate(56.000000, 160.000000)'> <path d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399' id='github-[#142]'> </path> </g> </g> </g> </g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09f',
				name: 'Node JS',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='58' height='58' viewBox='0 0 512 512'><linearGradient id='XMLID_00000118357800129798447730000005862678814579567263_' x1='337.597' x2='156.289' y1='89.494' y2='459.361' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#3f873f'></stop><stop offset='0.33' stop-color='#3f8b3d'></stop><stop offset='0.637' stop-color='#3e9638'></stop><stop offset='0.934' stop-color='#3da92e'></stop><stop offset='1' stop-color='#3dae2b'></stop></linearGradient><linearGradient id='SVGID_1_' x1='225.787' x2='733.809' y1='282.815' y2='-92.539' gradientUnits='userSpaceOnUse'><stop offset='0.138' stop-color='#3f873f'></stop><stop offset='0.402' stop-color='#52a044'></stop><stop offset='0.713' stop-color='#64b749'></stop><stop offset='0.908' stop-color='#6abf4b'></stop></linearGradient><linearGradient id='SVGID_00000048489710280204197710000009720263475330385543_' x1='24.028' x2='487.275' y1='255.987' y2='255.987' gradientUnits='userSpaceOnUse'><stop offset='0.092' stop-color='#6abf4b'></stop><stop offset='0.287' stop-color='#64b749'></stop><stop offset='0.598' stop-color='#52a044'></stop><stop offset='0.862' stop-color='#3f873f'></stop></linearGradient><path id='XMLID_143_' fill='url(#XMLID_00000118357800129798447730000005862678814579567263_)' fill-rule='evenodd' d='M268.14 3.246a24.233 24.233 0 00-24.231 0L43.22 119.058a24.226 24.226 0 00-12.125 20.994v231.802c0 8.659 4.62 16.657 12.117 20.994L243.9 508.752a24.253 24.253 0 0024.247 0l200.642-115.905a24.258 24.258 0 0012.115-20.994v-231.81c0-8.659-4.62-16.657-12.123-20.986z' clip-rule='evenodd'></path><path fill='url(#SVGID_1_)' d='M469.18 119.058L267.93 3.246c-1.985-1.147-4.112-1.968-6.299-2.507L36.08 386.577c1.935 2.865 3.818 4.803 6.355 6.271l201.592 115.905c5.71 3.296 12.496 4.067 18.723 2.346L474.577 123.21a26.411 26.411 0 00-5.397-4.152z'></path><path fill='url(#SVGID_00000048489710280204197710000009720263475330385543_)' d='M469.293 392.848c5.848-3.384 9.989-9.312 11.148-16.265L261.631.739c-5.761-1.147-12.959-.486-18.143 2.507L43.59 118.361l215.947 393.404c3.082-.42 6.1-1.417 8.863-3.012z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd0a0',
				name: 'Express JS',
				image:
					'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">\n<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z"></path></g></g>\n</svg>',
			},
			{
				id: '67173a304a8476b6667fd0a1',
				name: 'Mongoose',
				image: 'https://seeklogo.com/images/M/Mongoose-logo-5EDDD83F50-seeklogo.com.png',
			},
			{
				id: '67173a304a8476b6667fd0a2',
				name: 'Stripe',
				image:
					'<svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" class="UserLogo variant-- "><path fill="var(--userLogoColor, #0A2540)" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill-rule="evenodd"></path></svg>',
			},
			{
				id: '67173a304a8476b6667fd0a3',
				name: 'JWT',
				image: 'https://jwt.io/img/pic_logo.svg',
			},
			{
				id: '67173a304a8476b6667fd0a4',
				name: 'Vercel',
				image:
					'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1L24 22H0L12 1Z" fill="#000000"></path> </g></svg>',
			},
			{
				id: '67174c534a8476b6667fd0ab',
				name: 'MongoDB',
				image:
					'<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 598.88 1333.33" width="62" height="62"><g fill-rule="nonzero"><path fill="#599636" d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"></path><path fill="#6cac48" d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"></path><path fill="#c2bfbf" d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"></path></g></svg>',
			},
			{
				id: '67176feb4a8476b6667fd0da',
				name: 'API',
				image:
					"<svg height='200px' width='200px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve' fill='#000000'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <circle style='fill:#FAD24D;' cx='256' cy='256' r='256'></circle> <ellipse style='fill:#EDB937;' cx='256' cy='421.64' rx='182.28' ry='14.369'></ellipse> <path style='fill:#666666;' d='M65.982,67.222h380.036c12.486,0,22.7,10.217,22.7,22.703V324.03H43.282V89.925 C43.282,77.439,53.496,67.222,65.982,67.222z'></path> <path style='fill:#15BDB2;' d='M58.695,308.614h394.607V89.922c0-3.979-3.308-7.287-7.287-7.287H65.979 c-3.976,0-7.287,3.308-7.287,7.287v218.693L58.695,308.614L58.695,308.614z'></path> <g> <path style='fill:#FFFFFF;' d='M468.718,324.03v24.826c0,12.489-11.261,22.703-25.026,22.703H68.305 c-13.765,0-25.026-10.214-25.026-22.703V324.03h425.436H468.718z'></path> <path style='fill:#FFFFFF;' d='M144.153,234.3H131.29l-2.201-14.717h-15.643l-2.201,14.717H99.54l12.979-81.119h18.657 l12.979,81.119H144.153z M115.064,208.573h12.284l-6.14-41.024L115.064,208.573z'></path> <path style='fill:#FFFFFF;' d='M168.837,153.181c6.413,0,11.182,1.7,14.314,5.099c3.129,3.399,4.693,8.384,4.693,14.951v10.544 c0,6.568-1.563,11.549-4.693,14.949c-3.129,3.399-7.901,5.099-14.314,5.099h-6.025v30.476h-12.748V153.18h18.773V153.181z M162.812,164.769v27.465h6.025c2.009,0,3.554-0.54,4.635-1.624c1.081-1.081,1.621-3.09,1.621-6.025v-12.168 c0-2.935-0.54-4.944-1.621-6.025c-1.083-1.081-2.628-1.621-4.635-1.621h-6.025V164.769z'></path> <path style='fill:#FFFFFF;' d='M193.75,153.181h12.748V234.3H193.75V153.181z'></path> <path style='fill:#FFFFFF;' d='M367.541,206.507l4.024-15.339l-9.107-3.575c0.307-3.438,0.288-6.901-0.055-10.34l9.073-3.67 l-4.184-15.295l-9.663,1.458c-1.437-3.101-3.179-6.091-5.228-8.932l6.02-7.709l-11.274-11.155l-7.646,6.101 c-2.861-2.02-5.872-3.733-8.983-5.136l1.358-9.679l-15.339-4.024l-3.575,9.107c-3.438-0.307-6.903-0.291-10.34,0.055l-3.667-9.073 l-15.297,4.184l1.458,9.663l0.005-0.002c-3.098,1.435-6.091,3.179-8.932,5.228l-7.709-6.022l-11.155,11.274l6.101,7.646 c-2.02,2.861-3.733,5.87-5.136,8.983l-9.679-1.358l-4.024,15.339l9.107,3.575c-0.307,3.438-0.288,6.901,0.055,10.34l-9.073,3.667 l4.184,15.297l9.66-1.458c1.437,3.098,3.179,6.091,5.228,8.932l-6.02,7.709L269,233.453l7.646-6.101 c2.858,2.02,5.87,3.733,8.983,5.136l-1.358,9.676l15.339,4.026l3.575-9.107c3.438,0.307,6.901,0.288,10.34-0.055l3.67,9.073 l15.295-4.184l-1.458-9.66c3.101-1.437,6.091-3.179,8.932-5.228l7.709,6.02l11.155-11.271l-6.101-7.646 c2.02-2.858,3.733-5.87,5.136-8.983L367.541,206.507z M325.84,200.282c-9.713,9.813-25.538,9.894-35.35,0.184 c-9.813-9.713-9.895-25.537-0.184-35.35c9.713-9.813,25.538-9.894,35.35-0.184C335.469,174.645,335.55,190.47,325.84,200.282z'></path> </g> <path style='fill:#ECF0F1;' d='M308.071,150.421c-17.826,0-32.279,14.45-32.279,32.279c0,17.826,14.451,32.279,32.279,32.279 c17.826,0,32.279-14.451,32.279-32.279C340.35,164.874,325.9,150.421,308.071,150.421z M325.84,200.284 c-9.713,9.813-25.538,9.894-35.35,0.184c-9.813-9.712-9.895-25.537-0.184-35.35c9.713-9.813,25.538-9.894,35.35-0.184 C335.469,174.647,335.55,190.472,325.84,200.284z'></path> <path style='fill:#FFFFFF;' d='M417.06,242.49c0.098-1.815,0.006-3.649-0.285-5.477l5.244-2.987l-5.957-12.386l-5.65,2.028 c-1.236-1.38-2.605-2.605-4.076-3.67l1.598-5.821l-12.971-4.546l-2.563,5.429c-1.815-0.098-3.649-0.006-5.477,0.285l-2.986-5.241 l-12.386,5.959l2.028,5.647c-1.377,1.236-2.605,2.605-3.67,4.076l-5.821-1.598l-4.546,12.971l5.429,2.565 c-0.097,1.812-0.008,3.649,0.283,5.474l-5.244,2.987l5.957,12.386l5.65-2.028c1.238,1.377,2.607,2.605,4.076,3.67l-1.595,5.821 l12.971,4.546l2.563-5.432c1.812,0.1,3.649,0.008,5.477-0.283l2.985,5.244l12.386-5.957l-2.028-5.647 c1.38-1.239,2.605-2.608,3.67-4.079l5.821,1.598l4.546-12.971L417.06,242.49z M400.732,250.72c-5.309,5.367-13.963,5.408-19.329,0.1 c-5.363-5.31-5.408-13.963-0.1-19.329c5.309-5.365,13.963-5.408,19.329-0.1C405.997,236.702,406.041,245.353,400.732,250.72z'></path> <path style='fill:#ECF0F1;' d='M391.016,221.639c-10.752,0-19.468,8.716-19.468,19.468s8.716,19.468,19.468,19.468 c10.752,0,19.468-8.716,19.468-19.468C410.484,230.355,401.768,221.639,391.016,221.639z M400.73,250.72 c-5.309,5.365-13.963,5.408-19.326,0.1c-5.366-5.309-5.411-13.963-0.103-19.326v-0.003c5.312-5.367,13.963-5.411,19.329-0.1 C405.995,236.699,406.039,245.353,400.73,250.72z'></path> <circle style='fill:#B6B6B8;' cx='256' cy='346.8' r='7.814'></circle> <path style='fill:#C2C2C4;' d='M305.065,407.271l36.095,11.564H170.836l29.123-11.564v-35.712h105.104v35.712H305.065z'></path> <path style='fill:#B6B6B8;' d='M305.065,407.271l-105.104-35.712h105.104V407.271z'></path> <path style='fill:#ECF0F1;' d='M199.959,407.271h105.104l36.095,11.564v4.981h-85.161h-85.163v-4.981l29.123-11.564H199.959z'></path> </g></svg>",
			},
		],
		features: [
			'Register, login, and recover passwords with JWT-based authentication.',
			'Manage content, view followers, and interact with the community.',
			'Create and format posts using a rich text editor or Markdown.',
			'Access exclusive content with secure payments through Stripe.',
			'Offer gamified discount features for premium content.',
			'Engage with posts through upvotes and comments.',
			'Manage user profiles, including editing personal details and viewing content history.',
			'Search and filter pet care tips and stories by category and upvote count.',
		],
		filter: 'dynamic',
		isDeleted: false,
		adminEmail: 'admin@gmail.com',
		adminPassword: 'password123',
		status: 'Active',
		createdAt: '2024-10-25T03:55:02.971Z',
		updatedAt: '2024-10-25T03:55:02.971Z',
		__v: 0,
	},
	{
		isDeleted: false,
		id: '65a61dfccd2d7dabc69737cc',
		name: 'E-shopSpots',
		fullPhoto: 'https://i.ibb.co/3CHhSBZ/eshopspots-home.png',
		liveLink: 'https://eshopspots.web.app/',
		adminEmail: 'admin@rabbani.com',
		adminPassword: '123456@S',
		githubClientLink: 'https://github.com/golamrabbani93/Eshop-Spots-Ecommerce',
		githubServerLink: 'https://github.com/golamrabbani93/Eshop-Spots-Ecommerce-Server',
		highLightTech: [
			{name: 'HTML', image: 'https://cdn.simpleicons.org/html5'},
			{name: 'CSS', image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png'},
			{name: 'Tailwind', image: 'https://cdn.simpleicons.org/tailwindcss'},
			{name: 'Javascript', image: 'https://cdn.simpleicons.org/javascript'},
			{name: 'ReactJs', image: 'https://cdn.simpleicons.org/react'},
			{name: 'MongoDB', image: 'https://cdn.simpleicons.org/mongodb'},
			{name: 'Express', image: 'https://cdn.simpleicons.org/express/white'},
			{name: 'NodeJS', image: 'https://cdn.simpleicons.org/nodedotjs/darkgreen'},
			{name: 'Firebase', image: 'https://cdn.simpleicons.org/firebase'},
		],
		description:
			'EshopSpots is an e-commerce platform where users can buy and sell products. It features a user-friendly interface, secure payment gateways, and a responsive design.',
		descriptions: {
			head: 'EshopSpots is a robust e-commerce platform built with modern web technologies, enabling users to buy and sell furniture with a seamless, secure, and responsive shopping experience.',
			founders:
				'<strong>EshopSpots</strong> is a dynamic marketplace designed for furniture enthusiasts, offering an intuitive interface for sellers to list products and buyers to make purchases, powered by React and a scalable Node.js backend.',
			overview:
				'EshopSpots provides a comprehensive e-commerce solution with features like product listings, secure Stripe payments, cart management, and a user dashboard. It ensures a smooth user experience with Firebase authentication and responsive design.',
			outcome:
				'Successfully deployed on Firebase, EshopSpots has been recognized for its user-friendly design, secure payment integration, and efficient product management, demonstrating the strength of full-stack development in e-commerce.',
		},
		Challenges: {
			title: 'Challenges & Learnings',
			points: [
				{
					pointTitle: '🛒 Building a Scalable E-commerce Platform',
					description:
						'Creating EshopSpots required integrating complex e-commerce features like product listings, cart management, and secure payments while ensuring scalability for a growing user base.',
				},
				{
					pointTitle: '🔐 Implementing Firebase Authentication',
					description:
						'Integrating Firebase for secure user authentication and authorization posed challenges in managing user roles (buyers, sellers, admins) and ensuring seamless login and signup flows.',
				},
				{
					pointTitle: '💳 Securing Stripe Payment Integration',
					description:
						'Incorporating Stripe for secure payment processing required careful handling of sensitive data and compliance with payment security standards to ensure user trust.',
				},
				{
					pointTitle: '📱 Optimizing for Responsive Design',
					description:
						'Ensuring a consistent and responsive user experience across devices using Tailwind CSS and Daisy UI demanded meticulous design adjustments and testing.',
				},
				{
					pointTitle: '⚡ Efficient MongoDB Data Management',
					description:
						'Managing large datasets for product listings, user reviews, and order histories required optimized MongoDB schemas and queries to maintain performance and speed.',
				},
			],
		},
		keyFeatures: [
			{
				featureTitle: '🛍️ Product Listing and Management',
				description:
					'Sellers can easily create, edit, and manage furniture listings with detailed descriptions, images, and pricing, providing a robust platform for showcasing products.',
			},
			{
				featureTitle: '🛡️ Secure Payment Processing',
				description:
					'Integrated Stripe payments ensure secure and reliable transactions, supporting multiple payment methods for a seamless checkout experience.',
			},
			{
				featureTitle: '🛒 Cart and Wishlist Functionality',
				description:
					'Users can add products to their cart or wishlist, enabling easy purchase planning and management of desired furniture items.',
			},
			{
				featureTitle: '🔒 Role-Based Authentication',
				description:
					'Firebase authentication ensures secure access with distinct roles for buyers, sellers, and admins, restricting actions like reviews to authenticated users.',
			},
			{
				featureTitle: '📊 User Dashboard',
				description:
					'A comprehensive dashboard allows users to manage their profiles, track orders, and view purchase history, enhancing user engagement and control.',
			},
		],
		technologies: [
			{
				id: '67173a304a8476b6667fd08d',
				name: 'HTML',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' enable-background='new 0 0 434.1 434.1' version='1.1' viewBox='0 0 434.1 434.1' xml:space='preserve' width='58' height='58'> <path fill='#fff' d='M82.7 44.3H362.2V366.7H82.7z'> </path><path fill='#FC490B' d='M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z'> </path></svg>",
			},
			{
				id: '67173a304a8476b6667fd08e',
				name: 'CSS',
				image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png',
			},
			{
				id: '67173a304a8476b6667fd090',
				name: 'Tailwind',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' width='58.3' height='35.2' fill='none' viewBox='0 0 65 39'><path fill='#06B6D4' fill-rule='evenodd' d='M32.5 0c-8.665 0-14.081 4.333-16.25 13 3.251-4.332 7.042-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.395 3.173 3.235 6.876 6.976 14.927 6.976 8.665 0 14.081-4.333 16.25-13-3.248 4.335-7.039 5.96-11.373 4.875-2.476-.618-4.232-2.41-6.2-4.396C44.244 3.725 40.558 0 32.5 0zM16.25 19.497c-8.665 0-14.081 4.334-16.25 13 3.255-4.331 7.046-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.4C20.745 35.254 24.448 39 32.5 39c8.665 0 14.081-4.333 16.25-13-3.248 4.332-7.039 5.953-11.373 4.864-2.476-.618-4.232-2.41-6.2-4.396-3.173-3.235-6.876-6.981-14.927-6.981v.01z' clip-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd094',
				name: 'Daisy UI',
				image:
					"<svg class='h-6 w-6 md:h-8 md:w-8' width='32' height='32' viewBox='0 0 415 415' xmlns='http://www.w3.org/2000/svg'><rect x='82.5' y='290' width='250' height='125' rx='62.5' fill='#1AD1A5'></rect><circle cx='207.5' cy='135' r='130' fill='black' fill-opacity='.3'></circle><circle cx='207.5' cy='135' r='125' fill='white'></circle><circle cx='207.5' cy='135' r='56' fill='#FF9903'></circle></svg>",
			},
			{
				id: '67173a304a8476b6667fd095',
				name: 'JavaScript',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='55' height='55' viewBox='0 0 512 512'><path fill='#ffdf00' d='M0 0h512v512H0z'></path><path d='M343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232V235.089h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd097',
				name: 'React',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.232 23 20.463' width='58' height='58'><circle r='2.05' fill='#61dafb'></circle><g fill='none' stroke='#61dafb'><ellipse rx='11' ry='4.2'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(60)'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(120)'></ellipse></g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09b',
				name: 'Github',
				image:
					"<svg viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Dribbble-Light-Preview' transform='translate(-140.000000, -7559.000000)' fill='#ffffff'> <g id='icons' transform='translate(56.000000, 160.000000)'> <path d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399' id='github-[#142]'> </path> </g> </g> </g> </g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09c',
				name: 'Firebase',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' version='1.1' viewBox='0 0 95.39 131.07' width='50' height='50'><path fill='#FFA000' d='M.05 105.75L16.18 2.52c.2-1.27 1.18-2.26 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l45.02 85.72H.05z'></path><path fill='#F57C00' d='M55.78 65.54L38.43 32.68.05 105.75l55.73-40.21z'></path><path fill='#FFCA28' d='M95.39 105.75L83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L.05 105.75l43.12 24.18a8.94 8.94 0 008.71 0l43.51-24.18z'></path><path fill='#fff' fill-opacity='0.2' d='M83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L62.52 43.19 50.36 20.03c-.51-.98-1.53-1.59-2.64-1.59s-2.12.61-2.64 1.59l-6.65 12.66L21.75 1.57C21.15.44 19.88-.18 18.62.04s-2.25 1.22-2.44 2.48L.05 105.75H0l.05.06.42.21 77.49-77.58c.79-.79 1.95-1.08 3.02-.74s1.85 1.24 2.03 2.35l12.25 75.77.12-.07-12.35-76.46zM.19 105.61L16.18 3.26c.19-1.27 1.18-2.27 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l11.92 22.66L.19 105.61z'></path><path fill='#A52714' fill-opacity='0.2' d='M51.89 129.2a8.94 8.94 0 01-8.71 0L.16 105.09l-.1.66 43.12 24.18a8.94 8.94 0 008.71 0l43.5-24.18-.11-.69-43.39 24.14z'></path><linearGradient id='b_1_' x1='-243.479' x2='-242.436' y1='345.28' y2='344.521' gradientTransform='matrix(95 0 0 -130.9998 23127.441 45253.934)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#FFF' stop-opacity='0.1'></stop><stop offset='0.14' stop-color='#FFF' stop-opacity='0.08'></stop><stop offset='0.61' stop-color='#FFF' stop-opacity='0.02'></stop><stop offset='1' stop-color='#FFF' stop-opacity='0'></stop></linearGradient><path id='b' fill='url(#b_1_)' d='M82.91 29.3c-.19-1.1-.97-2-2.02-2.34a2.953 2.953 0 00-3 .73L62.47 43.2 50.35 20.05c-.51-.98-1.53-1.59-2.63-1.59s-2.11.61-2.63 1.59l-6.63 12.66L21.84 1.6C21.24.47 19.98-.15 18.72.07s-2.24 1.22-2.43 2.48L.22 105.73l42.97 24.17a8.882 8.882 0 008.68 0l43.34-24.17-12.3-76.43z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd09d',
				name: 'React Toast',
				image: 'https://i.ibb.co/gTdNDLs/toast.png',
			},
			{
				id: '67173a304a8476b6667fd09e',
				name: 'Day Picker',
				image:
					"<svg height='200px' width='200px' version='1.1' id='_x35_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve' fill='#000000'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <g> <g> <path style='fill:#FFFFFF;' d='M494.406,17.657L376.968,135.095l-15.909,15.825v0.083l-81.624,81.624l-85.038,84.955 l-20.573,20.572L21.489,490.575l-3.831,3.748C11.661,488.326,6.913,481.08,3.915,473C1.332,466.421,0,459.342,0,451.929V59.968 C0,26.986,27.069,0,60.052,0h391.96c5.081,0,9.995,0.666,14.659,1.915C477.332,4.497,486.827,10.078,494.406,17.657z'></path> <path style='fill:#FFFFFF;' d='M494.373,17.618L17.654,494.337c10.876,10.876,25.878,17.627,42.38,17.627h391.959 c33.004,0,60.007-27.003,60.007-60.007V59.998C512,43.496,505.249,28.494,494.373,17.618z'></path> </g> <g> <path style='fill:#D5942B;' d='M111.691,96.283v5.33h17.824v52.973h6.663v-52.973h17.907v-5.33H111.691z'></path> <path style='fill:#D5942B;' d='M194.481,143.424v-30.567h-6.58v25.903c0,7.413-6.163,11.327-11.327,11.327 c-7.246,0-9.745-5.664-9.745-13.742v-23.488h-6.58v24.654c0,14.326,7.663,17.99,14.243,17.99c7.413,0,11.827-4.248,13.826-7.496 h0.25l0.333,6.58h5.997C194.731,151.337,194.481,147.755,194.481,143.424z'></path> <path style='fill:#D5942B;' d='M240.623,130.931c0-7.329-3.415-19.073-16.825-19.073c-11.66,0-19.323,9.412-19.323,22.488 c0,12.493,7.58,21.072,20.239,21.072c6.58,0,11.161-1.499,13.576-2.582l-1.249-4.664c-2.665,1.083-5.997,2.166-11.411,2.166 c-7.746,0-14.659-4.331-14.742-15.909h29.568C240.54,133.429,240.623,132.347,240.623,130.931z M211.056,129.682 c0.666-5.747,4.165-13.077,12.16-13.077c8.496,0,10.994,7.412,10.911,13.077H211.056z'></path> <path style='fill:#D5942B;' d='M263.112,130.514c-5.581-2.332-8.079-3.998-8.079-7.579c0-3.415,2.582-6.247,7.329-6.247 c3.915,0,6.913,1.499,8.496,2.499l1.916-4.831c-2.332-1.416-5.83-2.499-9.995-2.499c-8.745,0-14.159,5.331-14.159,11.827 c0,5.081,3.748,8.995,11.078,11.827c5.747,2.166,8.079,4.331,8.079,8.246c0,3.748-2.915,6.746-8.746,6.746 c-3.748,0-7.496-1.5-9.745-2.832l-1.832,4.914c2.915,1.665,7.079,2.831,11.327,2.831c9.495,0,15.408-4.914,15.408-12.327 C274.189,136.761,270.108,133.263,263.112,130.514z'></path> <path style='fill:#D5942B;' d='M319.415,144.257V93.284h-6.663v25.07h-0.166c-1.999-3.498-6.247-6.496-12.66-6.496 c-10.078,0-18.74,8.329-18.74,22.405c0,12.826,7.829,21.239,17.907,21.239c6.997,0,11.911-3.665,14.159-8.079h0.25l0.333,7.163 h5.914C319.582,151.753,319.415,147.589,319.415,144.257z M312.752,137.594c0,6.664-4.747,12.66-11.91,12.66 c-8.579,0-12.826-7.496-12.826-16.325c0-9.578,4.83-16.907,13.076-16.907c5.58,0,11.66,4.164,11.66,12.493V137.594z'></path> <path style='fill:#D5942B;' d='M361.06,151.004v-0.083c-0.166-1.999-0.166-4.165-0.166-6.33v-16.158 c0-8.246-3.165-16.575-15.409-16.575c-4.914,0-9.745,1.249-13.243,3.498l1.582,4.331c2.915-1.999,6.83-2.998,10.577-2.998 c9.911,0,9.911,7.995,9.911,11.493c-16.075-0.083-25.153,5.414-25.153,15.409c0,6.08,4.331,11.91,12.66,11.91 c6.08,0,10.578-2.998,12.827-6.33h0.25l0.583,5.414h6.08C361.31,153.419,361.143,152.336,361.06,151.004z M354.396,140.759 c0,5.081-4.581,9.828-10.994,9.828c-3.998,0-7.496-2.415-7.496-7.746c0-8.829,10.245-9.995,18.49-9.995V140.759z'></path> <path style='fill:#D5942B;' d='M399.456,112.857l-8.829,25.154c-0.999,3.248-2.082,6.33-2.749,8.911h-0.25 c-0.749-2.582-1.665-5.83-2.748-8.745l-2.999-7.995l-6.496-17.324h-7.246l8.829,22.238l6.496,16.325 c0.334,0.749,0.5,1.416,0.5,1.749c0,0.833-3.914,11.411-13.993,14.993l1.833,5.414c1.582-0.416,5.164-1.749,8.829-4.914 c5.413-4.914,9.078-12.744,14.242-26.32l11.577-29.484H399.456z'></path> </g> <path style='fill:#D5942B;' d='M60.416,49.784h-1.402c-7.514,0-13.662-6.148-13.662-13.662V34.72 c0-7.514,6.148-13.662,13.662-13.662h1.402c7.514,0,13.662,6.148,13.662,13.662v1.402C74.078,43.636,67.93,49.784,60.416,49.784z'></path> <path style='fill:#ffffff;' d='M102.548,49.784h-1.402c-7.514,0-13.662-6.148-13.662-13.662V34.72 c0-7.514,6.148-13.662,13.662-13.662h1.402c7.514,0,13.662,6.148,13.662,13.662v1.402C116.21,43.636,110.062,49.784,102.548,49.784 z'></path> <g> <polygon style='fill:#ffffff;' points='176.381,215.132 137.071,237.195 142.145,252.918 173.338,234.913 173.844,234.913 173.844,334.565 194.388,314.022 194.388,215.132 '></polygon> <polygon style='fill:#ffffff;' points='173.844,405.082 194.388,405.082 194.388,314.022 173.844,334.565 '></polygon> <polygon style='fill:#ffffff;' points='293.278,215.132 275.779,232.631 353.4,232.631 353.4,233.137 274.02,405.082 295.578,405.082 374.956,228.573 374.956,215.132 '></polygon> <polygon style='fill:#ffffff;' points='263.624,215.132 263.624,232.631 275.779,232.631 293.278,215.132 '></polygon> </g> </g> </g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09f',
				name: 'Node JS',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='58' height='58' viewBox='0 0 512 512'><linearGradient id='XMLID_00000118357800129798447730000005862678814579567263_' x1='337.597' x2='156.289' y1='89.494' y2='459.361' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#3f873f'></stop><stop offset='0.33' stop-color='#3f8b3d'></stop><stop offset='0.637' stop-color='#3e9638'></stop><stop offset='0.934' stop-color='#3da92e'></stop><stop offset='1' stop-color='#3dae2b'></stop></linearGradient><linearGradient id='SVGID_1_' x1='225.787' x2='733.809' y1='282.815' y2='-92.539' gradientUnits='userSpaceOnUse'><stop offset='0.138' stop-color='#3f873f'></stop><stop offset='0.402' stop-color='#52a044'></stop><stop offset='0.713' stop-color='#64b749'></stop><stop offset='0.908' stop-color='#6abf4b'></stop></linearGradient><linearGradient id='SVGID_00000048489710280204197710000009720263475330385543_' x1='24.028' x2='487.275' y1='255.987' y2='255.987' gradientUnits='userSpaceOnUse'><stop offset='0.092' stop-color='#6abf4b'></stop><stop offset='0.287' stop-color='#64b749'></stop><stop offset='0.598' stop-color='#52a044'></stop><stop offset='0.862' stop-color='#3f873f'></stop></linearGradient><path id='XMLID_143_' fill='url(#XMLID_00000118357800129798447730000005862678814579567263_)' fill-rule='evenodd' d='M268.14 3.246a24.233 24.233 0 00-24.231 0L43.22 119.058a24.226 24.226 0 00-12.125 20.994v231.802c0 8.659 4.62 16.657 12.117 20.994L243.9 508.752a24.253 24.253 0 0024.247 0l200.642-115.905a24.258 24.258 0 0012.115-20.994v-231.81c0-8.659-4.62-16.657-12.123-20.986z' clip-rule='evenodd'></path><path fill='url(#SVGID_1_)' d='M469.18 119.058L267.93 3.246c-1.985-1.147-4.112-1.968-6.299-2.507L36.08 386.577c1.935 2.865 3.818 4.803 6.355 6.271l201.592 115.905c5.71 3.296 12.496 4.067 18.723 2.346L474.577 123.21a26.411 26.411 0 00-5.397-4.152z'></path><path fill='url(#SVGID_00000048489710280204197710000009720263475330385543_)' d='M469.293 392.848c5.848-3.384 9.989-9.312 11.148-16.265L261.631.739c-5.761-1.147-12.959-.486-18.143 2.507L43.59 118.361l215.947 393.404c3.082-.42 6.1-1.417 8.863-3.012z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd0a0',
				name: 'Express JS',
				image:
					'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">\n<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z"></path></g></g>\n</svg>',
			},
			{
				id: '67173a304a8476b6667fd0a1',
				name: 'Mongoose',
				image: 'https://seeklogo.com/images/M/Mongoose-logo-5EDDD83F50-seeklogo.com.png',
			},
			{
				id: '67173a304a8476b6667fd0a2',
				name: 'Stripe',
				image:
					'<svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" class="UserLogo variant-- "><path fill="var(--userLogoColor, #0A2540)" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill-rule="evenodd"></path></svg>',
			},
			{
				id: '67173a304a8476b6667fd0a3',
				name: 'JWT',
				image: 'https://jwt.io/img/pic_logo.svg',
			},
			{
				id: '67173a304a8476b6667fd0a4',
				name: 'Vercel',
				image:
					'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1L24 22H0L12 1Z" fill="#000000"></path> </g></svg>',
			},
		],
		features: [
			'Furniture buy and sell E-commerce web application.',
			'Seller posts his/her product, and Buyer buys his/her product',
			'Viewer cannot add or delete his/her review without signup or login.',
		],
		images: [
			'https://i.ibb.co/3Nzv0ZV/eshopspots-shop.png',
			'https://i.ibb.co/th4RBQt/eshopspots-checkout.png',
			'https://i.ibb.co/0C1P56M/eshopspots-payment.png',
			'https://i.ibb.co/R34gv91/eshopspots-cart.png',
			'https://i.ibb.co/KL0RDJH/eshopspots-wishlistpng.png',
			'https://i.ibb.co/HHqmDwm/eshopspots-dashboard.png',
		],
		filter: 'dynamic',
		status: 'Active',
	},
	{
		isDeleted: false,
		id: '65a61dfccd2d7dabc69737cd',
		name: 'Medicational',
		fullPhoto: 'https://i.ibb.co/fD63G4c/medicational.png',
		liveLink: 'https://medicationals.web.app/',
		adminEmail: 'arosh@gmail.com',
		adminPassword: '123456@S',
		githubClientLink: 'https://github.com/golamrabbani93/medicational',
		githubServerLink: 'https://github.com/golamrabbani93/medicational-server',
		highLightTech: [
			{name: 'HTML', image: 'https://cdn.simpleicons.org/html5'},
			{name: 'CSS', image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png'},
			{name: 'Tailwind', image: 'https://cdn.simpleicons.org/tailwindcss'},
			{name: 'Daisy UI', image: 'https://cdn.simpleicons.org/daisyui'},
			{name: 'Javascript', image: 'https://cdn.simpleicons.org/javascript'},
			{name: 'ReactJs', image: 'https://cdn.simpleicons.org/react'},
			{name: 'MongoDB', image: 'https://cdn.simpleicons.org/mongodb'},
			{name: 'Express', image: 'https://cdn.simpleicons.org/express/white'},
			{name: 'NodeJS', image: 'https://cdn.simpleicons.org/nodedotjs/darkgreen'},
		],
		description:
			'Medicational is a full-stack doctor appointment platform for booking, medical history tracking, and appointment reminders.',
		descriptions: {
			head: 'Medicational is a comprehensive doctor appointment platform built with modern web technologies, enabling seamless appointment booking, medical history tracking, and reminders for patients and doctors.',
			founders:
				'<strong>Medicational</strong> is a full-stack healthcare solution designed to streamline doctor-patient interactions, offering an intuitive interface for booking appointments and managing medical records, powered by React and a robust Node.js backend.',
			overview:
				'Medicational facilitates easy appointment scheduling, secure medical record management, and doctor availability tracking. It integrates Firebase for authentication, Stripe for payments, and MongoDB for efficient data storage, ensuring a responsive and user-friendly experience.',
			outcome:
				'Successfully deployed on Firebase, Medicational has been praised for its intuitive design, secure data handling, and efficient appointment management, showcasing the power of full-stack development in healthcare applications.',
		},
		Challenges: {
			title: 'Challenges & Learnings',
			points: [
				{
					pointTitle: '🩺 Building a Healthcare Appointment System',
					description:
						'Developing Medicational required integrating complex features like appointment scheduling, doctor availability, and medical history tracking while ensuring scalability and reliability.',
				},
				{
					pointTitle: '🔒 Implementing Secure Firebase Authentication',
					description:
						'Integrating Firebase for secure user authentication for patients, doctors, and admins posed challenges in managing role-based access and ensuring secure login flows.',
				},
				{
					pointTitle: '💳 Integrating Stripe for Payments',
					description:
						'Incorporating Stripe for secure payment processing required handling sensitive payment data and ensuring compliance with healthcare and payment security standards.',
				},
				{
					pointTitle: '📱 Ensuring Responsive Design',
					description:
						'Creating a consistent and responsive user interface across devices using Tailwind CSS and Daisy UI demanded extensive testing and optimization for accessibility.',
				},
				{
					pointTitle: '📊 Optimizing MongoDB for Medical Data',
					description:
						'Managing complex medical data, including appointment schedules and patient records, required efficient MongoDB schema design and optimized queries for performance.',
				},
			],
		},
		keyFeatures: [
			{
				featureTitle: '📅 Appointment Booking',
				description:
					'Users can browse available doctors, select time slots, and book appointments seamlessly, with real-time availability updates.',
			},
			{
				featureTitle: '📋 Medical History Tracking',
				description:
					'Patients can securely access and manage their past appointments, prescriptions, and medical records in one centralized platform.',
			},
			{
				featureTitle: '🔔 Appointment Reminders',
				description:
					'Automated reminders ensure patients and doctors stay informed about upcoming appointments, improving scheduling efficiency.',
			},
			{
				featureTitle: '🔐 Role-Based Access Control',
				description:
					'Firebase authentication provides secure access with distinct roles for patients, doctors, and admins, ensuring data privacy and restricted actions.',
			},
			{
				featureTitle: '🩺 Doctor Dashboard',
				description:
					'Doctors can manage their schedules, view patient details, and update availability through a dedicated dashboard, enhancing operational efficiency.',
			},
		],
		technologies: [
			{
				id: '67173a304a8476b6667fd08d',
				name: 'HTML',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' enable-background='new 0 0 434.1 434.1' version='1.1' viewBox='0 0 434.1 434.1' xml:space='preserve' width='58' height='58'> <path fill='#fff' d='M82.7 44.3H362.2V366.7H82.7z'> </path><path fill='#FC490B' d='M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z'> </path></svg>",
			},
			{
				id: '67173a304a8476b6667fd08e',
				name: 'CSS',
				image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png',
			},
			{
				id: '67173a304a8476b6667fd090',
				name: 'Tailwind',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' width='58.3' height='35.2' fill='none' viewBox='0 0 65 39'><path fill='#06B6D4' fill-rule='evenodd' d='M32.5 0c-8.665 0-14.081 4.333-16.25 13 3.251-4.332 7.042-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.395 3.173 3.235 6.876 6.976 14.927 6.976 8.665 0 14.081-4.333 16.25-13-3.248 4.335-7.039 5.96-11.373 4.875-2.476-.618-4.232-2.41-6.2-4.396C44.244 3.725 40.558 0 32.5 0zM16.25 19.497c-8.665 0-14.081 4.334-16.25 13 3.255-4.331 7.046-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.4C20.745 35.254 24.448 39 32.5 39c8.665 0 14.081-4.333 16.25-13-3.248 4.332-7.039 5.953-11.373 4.864-2.476-.618-4.232-2.41-6.2-4.396-3.173-3.235-6.876-6.981-14.927-6.981v.01z' clip-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd094',
				name: 'Daisy UI',
				image:
					"<svg class='h-6 w-6 md:h-8 md:w-8' width='32' height='32' viewBox='0 0 415 415' xmlns='http://www.w3.org/2000/svg'><rect x='82.5' y='290' width='250' height='125' rx='62.5' fill='#1AD1A5'></rect><circle cx='207.5' cy='135' r='130' fill='black' fill-opacity='.3'></circle><circle cx='207.5' cy='135' r='125' fill='white'></circle><circle cx='207.5' cy='135' r='56' fill='#FF9903'></circle></svg>",
			},
			{
				id: '67173a304a8476b6667fd095',
				name: 'JavaScript',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='55' height='55' viewBox='0 0 512 512'><path fill='#ffdf00' d='M0 0h512v512H0z'></path><path d='M343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232V235.089h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd097',
				name: 'React',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.232 23 20.463' width='58' height='58'><circle r='2.05' fill='#61dafb'></circle><g fill='none' stroke='#61dafb'><ellipse rx='11' ry='4.2'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(60)'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(120)'></ellipse></g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09b',
				name: 'Github',
				image:
					"<svg viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Dribbble-Light-Preview' transform='translate(-140.000000, -7559.000000)' fill='#ffffff'> <g id='icons' transform='translate(56.000000, 160.000000)'> <path d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399' id='github-[#142]'> </path> </g> </g> </g> </g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09c',
				name: 'Firebase',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' version='1.1' viewBox='0 0 95.39 131.07' width='50' height='50'><path fill='#FFA000' d='M.05 105.75L16.18 2.52c.2-1.27 1.18-2.26 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l45.02 85.72H.05z'></path><path fill='#F57C00' d='M55.78 65.54L38.43 32.68.05 105.75l55.73-40.21z'></path><path fill='#FFCA28' d='M95.39 105.75L83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L.05 105.75l43.12 24.18a8.94 8.94 0 008.71 0l43.51-24.18z'></path><path fill='#fff' fill-opacity='0.2' d='M83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L62.52 43.19 50.36 20.03c-.51-.98-1.53-1.59-2.64-1.59s-2.12.61-2.64 1.59l-6.65 12.66L21.75 1.57C21.15.44 19.88-.18 18.62.04s-2.25 1.22-2.44 2.48L.05 105.75H0l.05.06.42.21 77.49-77.58c.79-.79 1.95-1.08 3.02-.74s1.85 1.24 2.03 2.35l12.25 75.77.12-.07-12.35-76.46zM.19 105.61L16.18 3.26c.19-1.27 1.18-2.27 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l11.92 22.66L.19 105.61z'></path><path fill='#A52714' fill-opacity='0.2' d='M51.89 129.2a8.94 8.94 0 01-8.71 0L.16 105.09l-.1.66 43.12 24.18a8.94 8.94 0 008.71 0l43.5-24.18-.11-.69-43.39 24.14z'></path><linearGradient id='b_1_' x1='-243.479' x2='-242.436' y1='345.28' y2='344.521' gradientTransform='matrix(95 0 0 -130.9998 23127.441 45253.934)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#FFF' stop-opacity='0.1'></stop><stop offset='0.14' stop-color='#FFF' stop-opacity='0.08'></stop><stop offset='0.61' stop-color='#FFF' stop-opacity='0.02'></stop><stop offset='1' stop-color='#FFF' stop-opacity='0'></stop></linearGradient><path id='b' fill='url(#b_1_)' d='M82.91 29.3c-.19-1.1-.97-2-2.02-2.34a2.953 2.953 0 00-3 .73L62.47 43.2 50.35 20.05c-.51-.98-1.53-1.59-2.63-1.59s-2.11.61-2.63 1.59l-6.63 12.66L21.84 1.6C21.24.47 19.98-.15 18.72.07s-2.24 1.22-2.43 2.48L.22 105.73l42.97 24.17a8.882 8.882 0 008.68 0l43.34-24.17-12.3-76.43z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd09d',
				name: 'React Toast',
				image: 'https://i.ibb.co/gTdNDLs/toast.png',
			},
			{
				id: '67173a304a8476b6667fd09e',
				name: 'Day Picker',
				image:
					"<svg height='200px' width='200px' version='1.1' id='_x35_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve' fill='#000000'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <g> <g> <path style='fill:#FFFFFF;' d='M494.406,17.657L376.968,135.095l-15.909,15.825v0.083l-81.624,81.624l-85.038,84.955 l-20.573,20.572L21.489,490.575l-3.831,3.748C11.661,488.326,6.913,481.08,3.915,473C1.332,466.421,0,459.342,0,451.929V59.968 C0,26.986,27.069,0,60.052,0h391.96c5.081,0,9.995,0.666,14.659,1.915C477.332,4.497,486.827,10.078,494.406,17.657z'></path> <path style='fill:#FFFFFF;' d='M494.373,17.618L17.654,494.337c10.876,10.876,25.878,17.627,42.38,17.627h391.959 c33.004,0,60.007-27.003,60.007-60.007V59.998C512,43.496,505.249,28.494,494.373,17.618z'></path> </g> <g> <path style='fill:#D5942B;' d='M111.691,96.283v5.33h17.824v52.973h6.663v-52.973h17.907v-5.33H111.691z'></path> <path style='fill:#D5942B;' d='M194.481,143.424v-30.567h-6.58v25.903c0,7.413-6.163,11.327-11.327,11.327 c-7.246,0-9.745-5.664-9.745-13.742v-23.488h-6.58v24.654c0,14.326,7.663,17.99,14.243,17.99c7.413,0,11.827-4.248,13.826-7.496 h0.25l0.333,6.58h5.997C194.731,151.337,194.481,147.755,194.481,143.424z'></path> <path style='fill:#D5942B;' d='M240.623,130.931c0-7.329-3.415-19.073-16.825-19.073c-11.66,0-19.323,9.412-19.323,22.488 c0,12.493,7.58,21.072,20.239,21.072c6.58,0,11.161-1.499,13.576-2.582l-1.249-4.664c-2.665,1.083-5.997,2.166-11.411,2.166 c-7.746,0-14.659-4.331-14.742-15.909h29.568C240.54,133.429,240.623,132.347,240.623,130.931z M211.056,129.682 c0.666-5.747,4.165-13.077,12.16-13.077c8.496,0,10.994,7.412,10.911,13.077H211.056z'></path> <path style='fill:#D5942B;' d='M263.112,130.514c-5.581-2.332-8.079-3.998-8.079-7.579c0-3.415,2.582-6.247,7.329-6.247 c3.915,0,6.913,1.499,8.496,2.499l1.916-4.831c-2.332-1.416-5.83-2.499-9.995-2.499c-8.745,0-14.159,5.331-14.159,11.827 c0,5.081,3.748,8.995,11.078,11.827c5.747,2.166,8.079,4.331,8.079,8.246c0,3.748-2.915,6.746-8.746,6.746 c-3.748,0-7.496-1.5-9.745-2.832l-1.832,4.914c2.915,1.665,7.079,2.831,11.327,2.831c9.495,0,15.408-4.914,15.408-12.327 C274.189,136.761,270.108,133.263,263.112,130.514z'></path> <path style='fill:#D5942B;' d='M319.415,144.257V93.284h-6.663v25.07h-0.166c-1.999-3.498-6.247-6.496-12.66-6.496 c-10.078,0-18.74,8.329-18.74,22.405c0,12.826,7.829,21.239,17.907,21.239c6.997,0,11.911-3.665,14.159-8.079h0.25l0.333,7.163 h5.914C319.582,151.753,319.415,147.589,319.415,144.257z M312.752,137.594c0,6.664-4.747,12.66-11.91,12.66 c-8.579,0-12.826-7.496-12.826-16.325c0-9.578,4.83-16.907,13.076-16.907c5.58,0,11.66,4.164,11.66,12.493V137.594z'></path> <path style='fill:#D5942B;' d='M361.06,151.004v-0.083c-0.166-1.999-0.166-4.165-0.166-6.33v-16.158 c0-8.246-3.165-16.575-15.409-16.575c-4.914,0-9.745,1.249-13.243,3.498l1.582,4.331c2.915-1.999,6.83-2.998,10.577-2.998 c9.911,0,9.911,7.995,9.911,11.493c-16.075-0.083-25.153,5.414-25.153,15.409c0,6.08,4.331,11.91,12.66,11.91 c6.08,0,10.578-2.998,12.827-6.33h0.25l0.583,5.414h6.08C361.31,153.419,361.143,152.336,361.06,151.004z M354.396,140.759 c0,5.081-4.581,9.828-10.994,9.828c-3.998,0-7.496-2.415-7.496-7.746c0-8.829,10.245-9.995,18.49-9.995V140.759z'></path> <path style='fill:#D5942B;' d='M399.456,112.857l-8.829,25.154c-0.999,3.248-2.082,6.33-2.749,8.911h-0.25 c-0.749-2.582-1.665-5.83-2.748-8.745l-2.999-7.995l-6.496-17.324h-7.246l8.829,22.238l6.496,16.325 c0.334,0.749,0.5,1.416,0.5,1.749c0,0.833-3.914,11.411-13.993,14.993l1.833,5.414c1.582-0.416,5.164-1.749,8.829-4.914 c5.413-4.914,9.078-12.744,14.242-26.32l11.577-29.484H399.456z'></path> </g> <path style='fill:#D5942B;' d='M60.416,49.784h-1.402c-7.514,0-13.662-6.148-13.662-13.662V34.72 c0-7.514,6.148-13.662,13.662-13.662h1.402c7.514,0,13.662,6.148,13.662,13.662v1.402C74.078,43.636,67.93,49.784,60.416,49.784z'></path> <path style='fill:#ffffff;' d='M102.548,49.784h-1.402c-7.514,0-13.662-6.148-13.662-13.662V34.72 c0-7.514,6.148-13.662,13.662-13.662h1.402c7.514,0,13.662,6.148,13.662,13.662v1.402C116.21,43.636,110.062,49.784,102.548,49.784 z'></path> <g> <polygon style='fill:#ffffff;' points='176.381,215.132 137.071,237.195 142.145,252.918 173.338,234.913 173.844,234.913 173.844,334.565 194.388,314.022 194.388,215.132 '></polygon> <polygon style='fill:#ffffff;' points='173.844,405.082 194.388,405.082 194.388,314.022 173.844,334.565 '></polygon> <polygon style='fill:#ffffff;' points='293.278,215.132 275.779,232.631 353.4,232.631 353.4,233.137 274.02,405.082 295.578,405.082 374.956,228.573 374.956,215.132 '></polygon> <polygon style='fill:#ffffff;' points='263.624,215.132 263.624,232.631 275.779,232.631 293.278,215.132 '></polygon> </g> </g> </g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09f',
				name: 'Node JS',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='58' height='58' viewBox='0 0 512 512'><linearGradient id='XMLID_00000118357800129798447730000005862678814579567263_' x1='337.597' x2='156.289' y1='89.494' y2='459.361' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#3f873f'></stop><stop offset='0.33' stop-color='#3f8b3d'></stop><stop offset='0.637' stop-color='#3e9638'></stop><stop offset='0.934' stop-color='#3da92e'></stop><stop offset='1' stop-color='#3dae2b'></stop></linearGradient><linearGradient id='SVGID_1_' x1='225.787' x2='733.809' y1='282.815' y2='-92.539' gradientUnits='userSpaceOnUse'><stop offset='0.138' stop-color='#3f873f'></stop><stop offset='0.402' stop-color='#52a044'></stop><stop offset='0.713' stop-color='#64b749'></stop><stop offset='0.908' stop-color='#6abf4b'></stop></linearGradient><linearGradient id='SVGID_00000048489710280204197710000009720263475330385543_' x1='24.028' x2='487.275' y1='255.987' y2='255.987' gradientUnits='userSpaceOnUse'><stop offset='0.092' stop-color='#6abf4b'></stop><stop offset='0.287' stop-color='#64b749'></stop><stop offset='0.598' stop-color='#52a044'></stop><stop offset='0.862' stop-color='#3f873f'></stop></linearGradient><path id='XMLID_143_' fill='url(#XMLID_00000118357800129798447730000005862678814579567263_)' fill-rule='evenodd' d='M268.14 3.246a24.233 24.233 0 00-24.231 0L43.22 119.058a24.226 24.226 0 00-12.125 20.994v231.802c0 8.659 4.62 16.657 12.117 20.994L243.9 508.752a24.253 24.253 0 0024.247 0l200.642-115.905a24.258 24.258 0 0012.115-20.994v-231.81c0-8.659-4.62-16.657-12.123-20.986z' clip-rule='evenodd'></path><path fill='url(#SVGID_1_)' d='M469.18 119.058L267.93 3.246c-1.985-1.147-4.112-1.968-6.299-2.507L36.08 386.577c1.935 2.865 3.818 4.803 6.355 6.271l201.592 115.905c5.71 3.296 12.496 4.067 18.723 2.346L474.577 123.21a26.411 26.411 0 00-5.397-4.152z'></path><path fill='url(#SVGID_00000048489710280204197710000009720263475330385543_)' d='M469.293 392.848c5.848-3.384 9.989-9.312 11.148-16.265L261.631.739c-5.761-1.147-12.959-.486-18.143 2.507L43.59 118.361l215.947 393.404c3.082-.42 6.1-1.417 8.863-3.012z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd0a0',
				name: 'Express JS',
				image:
					'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">\n<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z"></path></g></g>\n</svg>',
			},
			{
				id: '67173a304a8476b6667fd0a1',
				name: 'Mongoose',
				image: 'https://seeklogo.com/images/M/Mongoose-logo-5EDDD83F50-seeklogo.com.png',
			},
			{
				id: '67173a304a8476b6667fd0a2',
				name: 'Stripe',
				image:
					'<svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" class="UserLogo variant-- "><path fill="var(--userLogoColor, #0A2540)" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill-rule="evenodd"></path></svg>',
			},
			{
				id: '67173a304a8476b6667fd0a3',
				name: 'JWT',
				image: 'https://jwt.io/img/pic_logo.svg',
			},
			{
				id: '67173a304a8476b6667fd0a4',
				name: 'Vercel',
				image:
					'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1L24 22H0L12 1Z" fill="#000000"></path> </g></svg>',
			},
		],
		features: [
			'Users can browse available doctors, select a time slot, and book appointments hassle-free.',
			'Patients can track their past appointments, prescriptions, and medical records.',
			'Doctors can manage schedules, view patient details, and update availability',
		],
		images: [
			'https://i.ibb.co/VjFPpzc/medicational-date.png',
			'https://i.ibb.co/hBYzGyD/medicational-appointment.png',
			'https://i.ibb.co/PDHVKZh/medicationa-dashboard.png',
		],
		filter: 'dynamic',
		status: 'Active',
	},
	{
		isDeleted: false,
		id: '65a61dfccd2d7dabc69737ce',
		name: 'WOOD-STOCKS',
		fullPhoto: 'https://i.ibb.co/m5cMpDw/woodstoks.png',
		liveLink: 'https://woods-stocks.web.app/',
		adminEmail: 'admin@rabbani.com',
		adminPassword: '#Xyz#2',
		githubClientLink: 'https://github.com/golamrabbani93/wood-stocks',
		githubServerLink: 'https://github.com/golamrabbani93/wood-stocks-server-side',
		description:
			'WOOD-STOCKS is an e-commerce website where users can buy furniture items. It has a dynamic admin panel where an admin can manage products, orders, and users.',
		descriptions: {
			head: 'WOOD-STOCKS is a dynamic e-commerce platform tailored for furniture shopping, featuring a robust admin panel for managing products, orders, and users, built with modern web technologies.',
			founders:
				'<strong>WOOD-STOCKS</strong> is an intuitive marketplace for furniture enthusiasts, enabling seamless buying and selling with a powerful admin dashboard, powered by React and a scalable Node.js backend.',
			overview:
				'WOOD-STOCKS offers a comprehensive e-commerce experience with features like product listings, secure authentication, and a dynamic admin panel for managing inventory and user activities. It leverages Firebase for authentication and MongoDB for efficient data management.',
			outcome:
				'Successfully deployed on Firebase, WOOD-STOCKS has been recognized for its user-friendly interface, secure authentication, and efficient admin panel, demonstrating the effectiveness of full-stack development in e-commerce.',
		},
		Challenges: {
			title: 'Challenges & Learnings',
			points: [
				{
					pointTitle: '🛒 Developing a Furniture E-commerce Platform',
					description:
						'Building WOOD-STOCKS required integrating complex e-commerce functionalities like product management, order processing, and user reviews while ensuring scalability for a growing user base.',
				},
				{
					pointTitle: '🔐 Implementing Secure Firebase Authentication',
					description:
						'Integrating Firebase for secure user authentication and role-based access for buyers, sellers, and admins posed challenges in managing permissions and ensuring seamless login flows.',
				},
				{
					pointTitle: '🛠️ Building a Dynamic Admin Panel',
					description:
						'Creating a robust admin panel to manage products, orders, and users required efficient backend integration with MongoDB and a responsive front-end design.',
				},
				{
					pointTitle: '📱 Optimizing for Responsive Design',
					description:
						'Ensuring a consistent and responsive user experience across devices using Tailwind CSS demanded meticulous design adjustments and cross-device testing.',
				},
				{
					pointTitle: '⚡ Efficient MongoDB Data Management',
					description:
						'Handling large datasets for product listings, user reviews, and order histories required optimized MongoDB schemas and queries to maintain performance and speed.',
				},
			],
		},
		keyFeatures: [
			{
				featureTitle: '🛍️ Product Listing and Management',
				description:
					'Sellers can create, edit, and manage furniture listings with detailed descriptions, images, and pricing, providing a robust platform for showcasing products.',
			},
			{
				featureTitle: '📊 Dynamic Admin Panel',
				description:
					'Admins can efficiently manage products, orders, and user accounts through a comprehensive dashboard, ensuring streamlined operations.',
			},
			{
				featureTitle: '🔒 Role-Based Authentication',
				description:
					'Firebase authentication ensures secure access with distinct roles for buyers, sellers, and admins, restricting actions like reviews to authenticated users.',
			},
			{
				featureTitle: '🛒 Cart and Order Management',
				description:
					'Users can add products to their cart, place orders, and track order statuses, enhancing the shopping experience.',
			},
			{
				featureTitle: '📈 Scalable Backend',
				description:
					'The Node.js and Express backend, paired with MongoDB, ensures efficient data handling and scalability for growing user and product data.',
			},
		],
		highLightTech: [
			{name: 'HTML', image: 'https://cdn.simpleicons.org/html5'},
			{name: 'CSS', image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png'},
			{name: 'Tailwind', image: 'https://cdn.simpleicons.org/tailwindcss'},
			{name: 'Javascript', image: 'https://cdn.simpleicons.org/javascript'},
			{name: 'ReactJs', image: 'https://cdn.simpleicons.org/react'},
			{name: 'MongoDB', image: 'https://cdn.simpleicons.org/mongodb'},
			{name: 'Express', image: 'https://cdn.simpleicons.org/express/white'},
			{name: 'NodeJS', image: 'https://cdn.simpleicons.org/nodedotjs/darkgreen'},
		],
		technologies: [
			{
				id: '67173a304a8476b6667fd08d',
				name: 'HTML',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' enable-background='new 0 0 434.1 434.1' version='1.1' viewBox='0 0 434.1 434.1' xml:space='preserve' width='58' height='58'> <path fill='#fff' d='M82.7 44.3H362.2V366.7H82.7z'> </path><path fill='#FC490B' d='M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z'> </path></svg>",
			},
			{
				id: '67173a304a8476b6667fd08e',
				name: 'CSS',
				image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png',
			},
			{
				id: '67173a304a8476b6667fd090',
				name: 'Tailwind',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' width='58.3' height='35.2' fill='none' viewBox='0 0 65 39'><path fill='#06B6D4' fill-rule='evenodd' d='M32.5 0c-8.665 0-14.081 4.333-16.25 13 3.251-4.332 7.042-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.395 3.173 3.235 6.876 6.976 14.927 6.976 8.665 0 14.081-4.333 16.25-13-3.248 4.335-7.039 5.96-11.373 4.875-2.476-.618-4.232-2.41-6.2-4.396C44.244 3.725 40.558 0 32.5 0zM16.25 19.497c-8.665 0-14.081 4.334-16.25 13 3.255-4.331 7.046-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.4C20.745 35.254 24.448 39 32.5 39c8.665 0 14.081-4.333 16.25-13-3.248 4.332-7.039 5.953-11.373 4.864-2.476-.618-4.232-2.41-6.2-4.396-3.173-3.235-6.876-6.981-14.927-6.981v.01z' clip-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd094',
				name: 'Daisy UI',
				image:
					"<svg class='h-6 w-6 md:h-8 md:w-8' width='32' height='32' viewBox='0 0 415 415' xmlns='http://www.w3.org/2000/svg'><rect x='82.5' y='290' width='250' height='125' rx='62.5' fill='#1AD1A5'></rect><circle cx='207.5' cy='135' r='130' fill='black' fill-opacity='.3'></circle><circle cx='207.5' cy='135' r='125' fill='white'></circle><circle cx='207.5' cy='135' r='56' fill='#FF9903'></circle></svg>",
			},
			{
				id: '67173a304a8476b6667fd095',
				name: 'JavaScript',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='55' height='55' viewBox='0 0 512 512'><path fill='#ffdf00' d='M0 0h512v512H0z'></path><path d='M343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232V235.089h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd097',
				name: 'React',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.232 23 20.463' width='58' height='58'><circle r='2.05' fill='#61dafb'></circle><g fill='none' stroke='#61dafb'><ellipse rx='11' ry='4.2'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(60)'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(120)'></ellipse></g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09b',
				name: 'Github',
				image:
					"<svg viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Dribbble-Light-Preview' transform='translate(-140.000000, -7559.000000)' fill='#ffffff'> <g id='icons' transform='translate(56.000000, 160.000000)'> <path d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399' id='github-[#142]'> </path> </g> </g> </g> </g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09c',
				name: 'Firebase',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' version='1.1' viewBox='0 0 95.39 131.07' width='50' height='50'><path fill='#FFA000' d='M.05 105.75L16.18 2.52c.2-1.27 1.18-2.26 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l45.02 85.72H.05z'></path><path fill='#F57C00' d='M55.78 65.54L38.43 32.68.05 105.75l55.73-40.21z'></path><path fill='#FFCA28' d='M95.39 105.75L83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L.05 105.75l43.12 24.18a8.94 8.94 0 008.71 0l43.51-24.18z'></path><path fill='#fff' fill-opacity='0.2' d='M83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L62.52 43.19 50.36 20.03c-.51-.98-1.53-1.59-2.64-1.59s-2.12.61-2.64 1.59l-6.65 12.66L21.75 1.57C21.15.44 19.88-.18 18.62.04s-2.25 1.22-2.44 2.48L.05 105.75H0l.05.06.42.21 77.49-77.58c.79-.79 1.95-1.08 3.02-.74s1.85 1.24 2.03 2.35l12.25 75.77.12-.07-12.35-76.46zM.19 105.61L16.18 3.26c.19-1.27 1.18-2.27 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l11.92 22.66L.19 105.61z'></path><path fill='#A52714' fill-opacity='0.2' d='M51.89 129.2a8.94 8.94 0 01-8.71 0L.16 105.09l-.1.66 43.12 24.18a8.94 8.94 0 008.71 0l43.5-24.18-.11-.69-43.39 24.14z'></path><linearGradient id='b_1_' x1='-243.479' x2='-242.436' y1='345.28' y2='344.521' gradientTransform='matrix(95 0 0 -130.9998 23127.441 45253.934)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#FFF' stop-opacity='0.1'></stop><stop offset='0.14' stop-color='#FFF' stop-opacity='0.08'></stop><stop offset='0.61' stop-color='#FFF' stop-opacity='0.02'></stop><stop offset='1' stop-color='#FFF' stop-opacity='0'></stop></linearGradient><path id='b' fill='url(#b_1_)' d='M82.91 29.3c-.19-1.1-.97-2-2.02-2.34a2.953 2.953 0 00-3 .73L62.47 43.2 50.35 20.05c-.51-.98-1.53-1.59-2.63-1.59s-2.11.61-2.63 1.59l-6.63 12.66L21.84 1.6C21.24.47 19.98-.15 18.72.07s-2.24 1.22-2.43 2.48L.22 105.73l42.97 24.17a8.882 8.882 0 008.68 0l43.34-24.17-12.3-76.43z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd09d',
				name: 'React Toast',
				image: 'https://i.ibb.co/gTdNDLs/toast.png',
			},
			{
				id: '67173a304a8476b6667fd09f',
				name: 'Node JS',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='58' height='58' viewBox='0 0 512 512'><linearGradient id='XMLID_00000118357800129798447730000005862678814579567263_' x1='337.597' x2='156.289' y1='89.494' y2='459.361' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#3f873f'></stop><stop offset='0.33' stop-color='#3f8b3d'></stop><stop offset='0.637' stop-color='#3e9638'></stop><stop offset='0.934' stop-color='#3da92e'></stop><stop offset='1' stop-color='#3dae2b'></stop></linearGradient><linearGradient id='SVGID_1_' x1='225.787' x2='733.809' y1='282.815' y2='-92.539' gradientUnits='userSpaceOnUse'><stop offset='0.138' stop-color='#3f873f'></stop><stop offset='0.402' stop-color='#52a044'></stop><stop offset='0.713' stop-color='#64b749'></stop><stop offset='0.908' stop-color='#6abf4b'></stop></linearGradient><linearGradient id='SVGID_00000048489710280204197710000009720263475330385543_' x1='24.028' x2='487.275' y1='255.987' y2='255.987' gradientUnits='userSpaceOnUse'><stop offset='0.092' stop-color='#6abf4b'></stop><stop offset='0.287' stop-color='#64b749'></stop><stop offset='0.598' stop-color='#52a044'></stop><stop offset='0.862' stop-color='#3f873f'></stop></linearGradient><path id='XMLID_143_' fill='url(#XMLID_00000118357800129798447730000005862678814579567263_)' fill-rule='evenodd' d='M268.14 3.246a24.233 24.233 0 00-24.231 0L43.22 119.058a24.226 24.226 0 00-12.125 20.994v231.802c0 8.659 4.62 16.657 12.117 20.994L243.9 508.752a24.253 24.253 0 0024.247 0l200.642-115.905a24.258 24.258 0 0012.115-20.994v-231.81c0-8.659-4.62-16.657-12.123-20.986z' clip-rule='evenodd'></path><path fill='url(#SVGID_1_)' d='M469.18 119.058L267.93 3.246c-1.985-1.147-4.112-1.968-6.299-2.507L36.08 386.577c1.935 2.865 3.818 4.803 6.355 6.271l201.592 115.905c5.71 3.296 12.496 4.067 18.723 2.346L474.577 123.21a26.411 26.411 0 00-5.397-4.152z'></path><path fill='url(#SVGID_00000048489710280204197710000009720263475330385543_)' d='M469.293 392.848c5.848-3.384 9.989-9.312 11.148-16.265L261.631.739c-5.761-1.147-12.959-.486-18.143 2.507L43.59 118.361l215.947 393.404c3.082-.42 6.1-1.417 8.863-3.012z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd0a0',
				name: 'Express JS',
				image:
					'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">\n<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z"></path></g></g>\n</svg>',
			},
			{
				id: '67174c534a8476b6667fd0ab',
				name: 'MongoDB',
				image:
					'<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 598.88 1333.33" width="62" height="62"><g fill-rule="nonzero"><path fill="#599636" d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"></path><path fill="#6cac48" d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"></path><path fill="#c2bfbf" d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"></path></g></svg>',
			},
			{
				id: '67173a304a8476b6667fd0a3',
				name: 'JWT',
				image: 'https://jwt.io/img/pic_logo.svg',
			},
			{
				id: '67173a304a8476b6667fd0a4',
				name: 'Vercel',
				image:
					'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1L24 22H0L12 1Z" fill="#000000"></path> </g></svg>',
			},
		],
		features: [
			'Furniture buy and sell E-commerce web application. ',
			' Seller posts his/her product, and Buyer buys his/her product ',
			' Viewer cannot add or delete his/her review without signup or login.',
		],
		images: [
			'https://i.ibb.co/w4SPNxX/woodstokes-dashboard.png',
			'https://i.ibb.co/LJFJs4G/woodstokes-login.png',
			'https://i.ibb.co/cJpWWFK/woodstoks-product.png',
		],
		filter: 'dynamic',
		status: 'Active',
	},
	{
		isDeleted: false,
		id: '65a61dfccd2d7dabc69737d3',
		name: 'CODEWARS',
		fullPhoto: 'https://i.ibb.co/3rbBkmW/codewars.png',
		liveLink: 'https://codewars-hunt.web.app/',
		githubClientLink: 'https://github.com/golamrabbani93/codewars',
		githubServerLink: 'https://github.com/golamrabbani93/codewars-server-side',
		highLightTech: [
			{name: 'HTML', image: 'https://cdn.simpleicons.org/html5'},
			{name: 'CSS', image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png'},
			{name: 'Tailwind', image: 'https://cdn.simpleicons.org/tailwindcss'},
			{name: 'Javascript', image: 'https://cdn.simpleicons.org/javascript'},
			{name: 'ReactJs', image: 'https://cdn.simpleicons.org/react'},
			{name: 'MongoDB', image: 'https://cdn.simpleicons.org/mongodb'},
			{name: 'Express', image: 'https://cdn.simpleicons.org/express/white'},
			{name: 'NodeJS', image: 'https://cdn.simpleicons.org/nodedotjs/darkgreen'},
			{name: 'Firebase', image: 'https://cdn.simpleicons.org/firebase'},
		],
		description:
			'This is course buying website. where user can buy course and see his/her course details. ',
		descriptions: {
			head: 'CODEWARS is a dynamic e-learning platform designed for purchasing programming courses, enabling users to develop skills in various programming languages with a seamless and intuitive interface.',
			founders:
				'<strong>CODEWARS</strong> is an engaging course-buying platform that empowers learners to acquire skills in programming languages through a user-friendly interface, powered by React and a robust Node.js backend.',
			overview:
				'CODEWARS offers a comprehensive solution for learners to browse, purchase, and track programming courses. It integrates Firebase for secure authentication, MongoDB for efficient data storage, and a responsive design with Tailwind CSS for a seamless user experience.',
			outcome:
				'Successfully deployed on Firebase, CODEWARS has been recognized for its intuitive course purchasing system, secure user management, and responsive design, showcasing the strength of full-stack development in e-learning.',
		},
		Challenges: {
			title: 'Challenges & Learnings',
			points: [
				{
					pointTitle: '📚 Building an E-Learning Platform',
					description:
						'Developing CODEWARS required integrating course purchasing, tracking, and detailed course management while ensuring scalability for diverse programming languages.',
				},
				{
					pointTitle: '🔐 Implementing Secure Firebase Authentication',
					description:
						'Integrating Firebase for secure user authentication posed challenges in managing learner access and ensuring seamless login and signup flows.',
				},
				{
					pointTitle: '📊 Managing Course Data with MongoDB',
					description:
						'Handling large datasets for course details, user progress, and purchase histories required optimized MongoDB schemas and queries for performance.',
				},
				{
					pointTitle: '📱 Optimizing for Responsive Design',
					description:
						'Ensuring a consistent and responsive user experience across devices using Tailwind CSS and Daisy UI demanded extensive testing and design adjustments.',
				},
				{
					pointTitle: '⚡ Streamlining Course Purchase Workflow',
					description:
						'Creating a seamless course purchasing and tracking system required efficient backend integration and a user-friendly front-end interface.',
				},
			],
		},
		keyFeatures: [
			{
				featureTitle: '📚 Course Purchasing System',
				description:
					'Learners can browse and purchase programming courses tailored to various languages, with detailed course descriptions and pricing.',
			},
			{
				featureTitle: '📊 Course Progress Tracking',
				description:
					'Users can track their purchased courses, view progress, and access course details through a centralized dashboard.',
			},
			{
				featureTitle: '🔒 Secure Authentication',
				description:
					'Firebase authentication ensures secure access for learners, protecting user data and restricting actions to authenticated users.',
			},
			{
				featureTitle: '🛒 Seamless Checkout Experience',
				description:
					'The platform provides a streamlined checkout process, enabling users to purchase courses quickly and securely.',
			},
			{
				featureTitle: '📈 Scalable Backend',
				description:
					'The Node.js and Express backend, paired with MongoDB, ensures efficient data handling and scalability for growing course catalogs and user bases.',
			},
		],
		technologies: [
			{
				id: '67173a304a8476b6667fd08d',
				name: 'HTML',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' enable-background='new 0 0 434.1 434.1' version='1.1' viewBox='0 0 434.1 434.1' xml:space='preserve' width='58' height='58'> <path fill='#fff' d='M82.7 44.3H362.2V366.7H82.7z'> </path><path fill='#FC490B' d='M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z'> </path></svg>",
			},
			{
				id: '67173a304a8476b6667fd08e',
				name: 'CSS',
				image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png',
			},
			{
				id: '67173a304a8476b6667fd090',
				name: 'Tailwind',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' width='58.3' height='35.2' fill='none' viewBox='0 0 65 39'><path fill='#06B6D4' fill-rule='evenodd' d='M32.5 0c-8.665 0-14.081 4.333-16.25 13 3.251-4.332 7.042-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.395 3.173 3.235 6.876 6.976 14.927 6.976 8.665 0 14.081-4.333 16.25-13-3.248 4.335-7.039 5.96-11.373 4.875-2.476-.618-4.232-2.41-6.2-4.396C44.244 3.725 40.558 0 32.5 0zM16.25 19.497c-8.665 0-14.081 4.334-16.25 13 3.255-4.331 7.046-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.4C20.745 35.254 24.448 39 32.5 39c8.665 0 14.081-4.333 16.25-13-3.248 4.332-7.039 5.953-11.373 4.864-2.476-.618-4.232-2.41-6.2-4.396-3.173-3.235-6.876-6.981-14.927-6.981v.01z' clip-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd094',
				name: 'Daisy UI',
				image:
					"<svg class='h-6 w-6 md:h-8 md:w-8' width='32' height='32' viewBox='0 0 415 415' xmlns='http://www.w3.org/2000/svg'><rect x='82.5' y='290' width='250' height='125' rx='62.5' fill='#1AD1A5'></rect><circle cx='207.5' cy='135' r='130' fill='black' fill-opacity='.3'></circle><circle cx='207.5' cy='135' r='125' fill='white'></circle><circle cx='207.5' cy='135' r='56' fill='#FF9903'></circle></svg>",
			},
			{
				id: '67173a304a8476b6667fd095',
				name: 'JavaScript',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='55' height='55' viewBox='0 0 512 512'><path fill='#ffdf00' d='M0 0h512v512H0z'></path><path d='M343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232V235.089h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd097',
				name: 'React',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.232 23 20.463' width='58' height='58'><circle r='2.05' fill='#61dafb'></circle><g fill='none' stroke='#61dafb'><ellipse rx='11' ry='4.2'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(60)'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(120)'></ellipse></g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09b',
				name: 'Github',
				image:
					"<svg viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Dribbble-Light-Preview' transform='translate(-140.000000, -7559.000000)' fill='#ffffff'> <g id='icons' transform='translate(56.000000, 160.000000)'> <path d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399' id='github-[#142]'> </path> </g> </g> </g> </g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09c',
				name: 'Firebase',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' version='1.1' viewBox='0 0 95.39 131.07' width='50' height='50'><path fill='#FFA000' d='M.05 105.75L16.18 2.52c.2-1.27 1.18-2.26 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l45.02 85.72H.05z'></path><path fill='#F57C00' d='M55.78 65.54L38.43 32.68.05 105.75l55.73-40.21z'></path><path fill='#FFCA28' d='M95.39 105.75L83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L.05 105.75l43.12 24.18a8.94 8.94 0 008.71 0l43.51-24.18z'></path><path fill='#fff' fill-opacity='0.2' d='M83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L62.52 43.19 50.36 20.03c-.51-.98-1.53-1.59-2.64-1.59s-2.12.61-2.64 1.59l-6.65 12.66L21.75 1.57C21.15.44 19.88-.18 18.62.04s-2.25 1.22-2.44 2.48L.05 105.75H0l.05.06.42.21 77.49-77.58c.79-.79 1.95-1.08 3.02-.74s1.85 1.24 2.03 2.35l12.25 75.77.12-.07-12.35-76.46zM.19 105.61L16.18 3.26c.19-1.27 1.18-2.27 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l11.92 22.66L.19 105.61z'></path><path fill='#A52714' fill-opacity='0.2' d='M51.89 129.2a8.94 8.94 0 01-8.71 0L.16 105.09l-.1.66 43.12 24.18a8.94 8.94 0 008.71 0l43.5-24.18-.11-.69-43.39 24.14z'></path><linearGradient id='b_1_' x1='-243.479' x2='-242.436' y1='345.28' y2='344.521' gradientTransform='matrix(95 0 0 -130.9998 23127.441 45253.934)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#FFF' stop-opacity='0.1'></stop><stop offset='0.14' stop-color='#FFF' stop-opacity='0.08'></stop><stop offset='0.61' stop-color='#FFF' stop-opacity='0.02'></stop><stop offset='1' stop-color='#FFF' stop-opacity='0'></stop></linearGradient><path id='b' fill='url(#b_1_)' d='M82.91 29.3c-.19-1.1-.97-2-2.02-2.34a2.953 2.953 0 00-3 .73L62.47 43.2 50.35 20.05c-.51-.98-1.53-1.59-2.63-1.59s-2.11.61-2.63 1.59l-6.63 12.66L21.84 1.6C21.24.47 19.98-.15 18.72.07s-2.24 1.22-2.43 2.48L.22 105.73l42.97 24.17a8.882 8.882 0 008.68 0l43.34-24.17-12.3-76.43z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd09d',
				name: 'React Toast',
				image: 'https://i.ibb.co/gTdNDLs/toast.png',
			},
			{
				id: '6717701e4a8476b6667fd0dc',
				name: 'React To PDF',
				image:
					'<svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 303.188 303.188" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#E8E8E8;" points="219.821,0 32.842,0 32.842,303.188 270.346,303.188 270.346,50.525 "></polygon> <path style="fill:#FB3449;" d="M230.013,149.935c-3.643-6.493-16.231-8.533-22.006-9.451c-4.552-0.724-9.199-0.94-13.803-0.936 c-3.615-0.024-7.177,0.154-10.693,0.354c-1.296,0.087-2.579,0.199-3.861,0.31c-1.314-1.36-2.584-2.765-3.813-4.202 c-7.82-9.257-14.134-19.755-19.279-30.664c1.366-5.271,2.459-10.772,3.119-16.485c1.205-10.427,1.619-22.31-2.288-32.251 c-1.349-3.431-4.946-7.608-9.096-5.528c-4.771,2.392-6.113,9.169-6.502,13.973c-0.313,3.883-0.094,7.776,0.558,11.594 c0.664,3.844,1.733,7.494,2.897,11.139c1.086,3.342,2.283,6.658,3.588,9.943c-0.828,2.586-1.707,5.127-2.63,7.603 c-2.152,5.643-4.479,11.004-6.717,16.161c-1.18,2.557-2.335,5.06-3.465,7.507c-3.576,7.855-7.458,15.566-11.815,23.02 c-10.163,3.585-19.283,7.741-26.857,12.625c-4.063,2.625-7.652,5.476-10.641,8.603c-2.822,2.952-5.69,6.783-5.941,11.024 c-0.141,2.394,0.807,4.717,2.768,6.137c2.697,2.015,6.271,1.881,9.4,1.225c10.25-2.15,18.121-10.961,24.824-18.387 c4.617-5.115,9.872-11.61,15.369-19.465c0.012-0.018,0.024-0.036,0.037-0.054c9.428-2.923,19.689-5.391,30.579-7.205 c4.975-0.825,10.082-1.5,15.291-1.974c3.663,3.431,7.621,6.555,11.939,9.164c3.363,2.069,6.94,3.816,10.684,5.119 c3.786,1.237,7.595,2.247,11.528,2.886c1.986,0.284,4.017,0.413,6.092,0.335c4.631-0.175,11.278-1.951,11.714-7.57 C231.127,152.765,230.756,151.257,230.013,149.935z M119.144,160.245c-2.169,3.36-4.261,6.382-6.232,9.041 c-4.827,6.568-10.34,14.369-18.322,17.286c-1.516,0.554-3.512,1.126-5.616,1.002c-1.874-0.11-3.722-0.937-3.637-3.065 c0.042-1.114,0.587-2.535,1.423-3.931c0.915-1.531,2.048-2.935,3.275-4.226c2.629-2.762,5.953-5.439,9.777-7.918 c5.865-3.805,12.867-7.23,20.672-10.286C120.035,158.858,119.587,159.564,119.144,160.245z M146.366,75.985 c-0.602-3.514-0.693-7.077-0.323-10.503c0.184-1.713,0.533-3.385,1.038-4.952c0.428-1.33,1.352-4.576,2.826-4.993 c2.43-0.688,3.177,4.529,3.452,6.005c1.566,8.396,0.186,17.733-1.693,25.969c-0.299,1.31-0.632,2.599-0.973,3.883 c-0.582-1.601-1.137-3.207-1.648-4.821C147.945,83.048,146.939,79.482,146.366,75.985z M163.049,142.265 c-9.13,1.48-17.815,3.419-25.979,5.708c0.983-0.275,5.475-8.788,6.477-10.555c4.721-8.315,8.583-17.042,11.358-26.197 c4.9,9.691,10.847,18.962,18.153,27.214c0.673,0.749,1.357,1.489,2.053,2.22C171.017,141.096,166.988,141.633,163.049,142.265z M224.793,153.959c-0.334,1.805-4.189,2.837-5.988,3.121c-5.316,0.836-10.94,0.167-16.028-1.542 c-3.491-1.172-6.858-2.768-10.057-4.688c-3.18-1.921-6.155-4.181-8.936-6.673c3.429-0.206,6.9-0.341,10.388-0.275 c3.488,0.035,7.003,0.211,10.475,0.664c6.511,0.726,13.807,2.961,18.932,7.186C224.588,152.585,224.91,153.321,224.793,153.959z"></path> <polygon style="fill:#FB3449;" points="227.64,25.263 32.842,25.263 32.842,0 219.821,0 "></polygon> <g> <path style="fill:#A4A9AD;" d="M126.841,241.152c0,5.361-1.58,9.501-4.742,12.421c-3.162,2.921-7.652,4.381-13.472,4.381h-3.643 v15.917H92.022v-47.979h16.606c6.06,0,10.611,1.324,13.652,3.971C125.321,232.51,126.841,236.273,126.841,241.152z M104.985,247.387h2.363c1.947,0,3.495-0.546,4.644-1.641c1.149-1.094,1.723-2.604,1.723-4.529c0-3.238-1.794-4.857-5.382-4.857 h-3.348C104.985,236.36,104.985,247.387,104.985,247.387z"></path> <path style="fill:#A4A9AD;" d="M175.215,248.864c0,8.007-2.205,14.177-6.613,18.509s-10.606,6.498-18.591,6.498h-15.523v-47.979 h16.606c7.701,0,13.646,1.969,17.836,5.907C173.119,235.737,175.215,241.426,175.215,248.864z M161.76,249.324 c0-4.398-0.87-7.657-2.609-9.78c-1.739-2.122-4.381-3.183-7.926-3.183h-3.773v26.877h2.888c3.939,0,6.826-1.143,8.664-3.43 C160.841,257.523,161.76,254.028,161.76,249.324z"></path> <path style="fill:#A4A9AD;" d="M196.579,273.871h-12.766v-47.979h28.355v10.403h-15.589v9.156h14.374v10.403h-14.374 L196.579,273.871L196.579,273.871z"></path> </g> <polygon style="fill:#D1D3D3;" points="219.821,50.525 270.346,50.525 219.821,0 "></polygon> </g> </g></svg>',
			},
			{
				id: '67173a304a8476b6667fd09f',
				name: 'Node JS',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='58' height='58' viewBox='0 0 512 512'><linearGradient id='XMLID_00000118357800129798447730000005862678814579567263_' x1='337.597' x2='156.289' y1='89.494' y2='459.361' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#3f873f'></stop><stop offset='0.33' stop-color='#3f8b3d'></stop><stop offset='0.637' stop-color='#3e9638'></stop><stop offset='0.934' stop-color='#3da92e'></stop><stop offset='1' stop-color='#3dae2b'></stop></linearGradient><linearGradient id='SVGID_1_' x1='225.787' x2='733.809' y1='282.815' y2='-92.539' gradientUnits='userSpaceOnUse'><stop offset='0.138' stop-color='#3f873f'></stop><stop offset='0.402' stop-color='#52a044'></stop><stop offset='0.713' stop-color='#64b749'></stop><stop offset='0.908' stop-color='#6abf4b'></stop></linearGradient><linearGradient id='SVGID_00000048489710280204197710000009720263475330385543_' x1='24.028' x2='487.275' y1='255.987' y2='255.987' gradientUnits='userSpaceOnUse'><stop offset='0.092' stop-color='#6abf4b'></stop><stop offset='0.287' stop-color='#64b749'></stop><stop offset='0.598' stop-color='#52a044'></stop><stop offset='0.862' stop-color='#3f873f'></stop></linearGradient><path id='XMLID_143_' fill='url(#XMLID_00000118357800129798447730000005862678814579567263_)' fill-rule='evenodd' d='M268.14 3.246a24.233 24.233 0 00-24.231 0L43.22 119.058a24.226 24.226 0 00-12.125 20.994v231.802c0 8.659 4.62 16.657 12.117 20.994L243.9 508.752a24.253 24.253 0 0024.247 0l200.642-115.905a24.258 24.258 0 0012.115-20.994v-231.81c0-8.659-4.62-16.657-12.123-20.986z' clip-rule='evenodd'></path><path fill='url(#SVGID_1_)' d='M469.18 119.058L267.93 3.246c-1.985-1.147-4.112-1.968-6.299-2.507L36.08 386.577c1.935 2.865 3.818 4.803 6.355 6.271l201.592 115.905c5.71 3.296 12.496 4.067 18.723 2.346L474.577 123.21a26.411 26.411 0 00-5.397-4.152z'></path><path fill='url(#SVGID_00000048489710280204197710000009720263475330385543_)' d='M469.293 392.848c5.848-3.384 9.989-9.312 11.148-16.265L261.631.739c-5.761-1.147-12.959-.486-18.143 2.507L43.59 118.361l215.947 393.404c3.082-.42 6.1-1.417 8.863-3.012z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd0a0',
				name: 'Express JS',
				image:
					'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">\n<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z"></path></g></g>\n</svg>',
			},
			{
				id: '67173a304a8476b6667fd0a4',
				name: 'Vercel',
				image:
					'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1L24 22H0L12 1Z" fill="#000000"></path> </g></svg>',
			},
		],
		features: [
			'This website consists of learning various programming languages ',
			' Learner Develop their skills by learning different programming languages ',
			' Learner Buying their choice of programming courses.',
		],
		images: [
			'https://i.ibb.co/WHV0nws/codewars-courses.png',
			'https://i.ibb.co/xhczFX1/codewars-course-details.png',
			'https://i.ibb.co/SrgXtH9/codewars-login.png',
		],
		filter: 'dynamic',
		status: 'Active',
	},
	{
		isDeleted: false,
		id: '65a61dfccd2d7dabc69737d5',
		name: 'MEDIZ',
		fullPhoto: 'https://i.ibb.co/257WDdh/mediz.png',
		liveLink: 'https://mediz-clinic.web.app/',
		githubClientLink: 'https://github.com/golamrabbani93/mediz',
		githubServerLink: 'https://github.com/golamrabbani93/mediz-server-side',
		highLightTech: [
			{name: 'HTML', image: 'https://cdn.simpleicons.org/html5'},
			{name: 'CSS', image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png'},
			{name: 'Tailwind', image: 'https://cdn.simpleicons.org/tailwindcss'},
			{name: 'Javascript', image: 'https://cdn.simpleicons.org/javascript'},
			{name: 'ReactJs', image: 'https://cdn.simpleicons.org/react'},
			{name: 'MongoDB', image: 'https://cdn.simpleicons.org/mongodb'},
			{name: 'Express', image: 'https://cdn.simpleicons.org/express/white'},
			{name: 'NodeJS', image: 'https://cdn.simpleicons.org/nodedotjs/darkgreen'},
			{name: 'Firebase', image: 'https://cdn.simpleicons.org/firebase'},
		],
		description:
			'Mediz is a doctor service providing web application. It help patient to get services from doctor. ',
		descriptions: {
			head: 'MEDIZ is a dynamic web application designed to connect patients with doctor services, providing a seamless platform for healthcare access and article reviews.',
			founders:
				'<strong>MEDIZ</strong> is an innovative healthcare platform that facilitates patient-doctor interactions and article reviews, built with React, Node.js, and a scalable MongoDB backend.',
			overview:
				'MEDIZ offers a comprehensive solution for patients to access doctor services, read health-related articles, and submit reviews. It leverages Firebase for secure authentication, JWT for session management, and MongoDB for efficient data storage, with a responsive design powered by Tailwind CSS and Daisy UI.',
			outcome:
				'Successfully deployed on Firebase and Vercel, MEDIZ has been recognized for its user-friendly interface, secure authentication, and efficient review system, demonstrating the effectiveness of full-stack development in healthcare applications.',
		},
		Challenges: {
			title: 'Challenges & Learnings',
			points: [
				{
					pointTitle: '🏥 Building a Healthcare Platform',
					description:
						'Developing MEDIZ required integrating doctor service bookings and article review systems while ensuring scalability and user accessibility.',
				},
				{
					pointTitle: '🔐 Implementing Secure Authentication',
					description:
						'Integrating Firebase and JWT for secure user authentication and session management posed challenges in ensuring seamless and secure login flows.',
				},
				{
					pointTitle: '📊 Managing Data with MongoDB',
					description:
						'Handling large datasets for doctor profiles, patient bookings, and article reviews required optimized MongoDB schemas and queries for performance.',
				},
				{
					pointTitle: '📱 Optimizing for Responsive Design',
					description:
						'Ensuring a consistent and responsive user experience across devices using Tailwind CSS and Daisy UI demanded extensive testing and design adjustments.',
				},
				{
					pointTitle: '🛡️ Secure Review System',
					description:
						'Implementing a review system restricted to authenticated users required robust backend validation and secure API endpoints.',
				},
			],
		},
		keyFeatures: [
			{
				featureTitle: '🏥 Doctor Service Booking',
				description:
					'Patients can browse and book appointments with doctors, accessing detailed profiles and service information.',
			},
			{
				featureTitle: '📝 Article Review System',
				description:
					'Authenticated users can read health-related articles and submit or delete reviews, enhancing community engagement.',
			},
			{
				featureTitle: '🔒 Secure Authentication',
				description:
					'Firebase and JWT provide secure user authentication, ensuring only registered users can access review and booking functionalities.',
			},
			{
				featureTitle: '📱 Responsive Interface',
				description:
					'The platform offers a seamless and responsive experience across devices, powered by Tailwind CSS and Daisy UI.',
			},
			{
				featureTitle: '📈 Scalable Backend',
				description:
					'The Node.js and Express backend, paired with MongoDB, ensures efficient data handling and scalability for growing user and service data.',
			},
		],

		technologies: [
			{
				id: '67173a304a8476b6667fd08d',
				name: 'HTML',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' enable-background='new 0 0 434.1 434.1' version='1.1' viewBox='0 0 434.1 434.1' xml:space='preserve' width='58' height='58'> <path fill='#fff' d='M82.7 44.3H362.2V366.7H82.7z'> </path><path fill='#FC490B' d='M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z'> </path></svg>",
			},
			{
				id: '67173a304a8476b6667fd08e',
				name: 'CSS',
				image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png',
			},
			{
				id: '67173a304a8476b6667fd090',
				name: 'Tailwind',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' width='58.3' height='35.2' fill='none' viewBox='0 0 65 39'><path fill='#06B6D4' fill-rule='evenodd' d='M32.5 0c-8.665 0-14.081 4.333-16.25 13 3.251-4.332 7.042-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.395 3.173 3.235 6.876 6.976 14.927 6.976 8.665 0 14.081-4.333 16.25-13-3.248 4.335-7.039 5.96-11.373 4.875-2.476-.618-4.232-2.41-6.2-4.396C44.244 3.725 40.558 0 32.5 0zM16.25 19.497c-8.665 0-14.081 4.334-16.25 13 3.255-4.331 7.046-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.4C20.745 35.254 24.448 39 32.5 39c8.665 0 14.081-4.333 16.25-13-3.248 4.332-7.039 5.953-11.373 4.864-2.476-.618-4.232-2.41-6.2-4.396-3.173-3.235-6.876-6.981-14.927-6.981v.01z' clip-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd094',
				name: 'Daisy UI',
				image:
					"<svg class='h-6 w-6 md:h-8 md:w-8' width='32' height='32' viewBox='0 0 415 415' xmlns='http://www.w3.org/2000/svg'><rect x='82.5' y='290' width='250' height='125' rx='62.5' fill='#1AD1A5'></rect><circle cx='207.5' cy='135' r='130' fill='black' fill-opacity='.3'></circle><circle cx='207.5' cy='135' r='125' fill='white'></circle><circle cx='207.5' cy='135' r='56' fill='#FF9903'></circle></svg>",
			},
			{
				id: '67173a304a8476b6667fd096',
				name: 'TypeScript',
				image:
					"<svg fill='none' height='26' viewBox='0 0 27 26' width='27' xmlns='http://www.w3.org/2000/svg'><path clip-rule='evenodd' d='m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z' fill='#fff' fill-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd097',
				name: 'React',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.232 23 20.463' width='58' height='58'><circle r='2.05' fill='#61dafb'></circle><g fill='none' stroke='#61dafb'><ellipse rx='11' ry='4.2'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(60)'></ellipse><ellipse rx='11' ry='4.2' transform='rotate(120)'></ellipse></g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09b',
				name: 'Github',
				image:
					"<svg viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Dribbble-Light-Preview' transform='translate(-140.000000, -7559.000000)' fill='#ffffff'> <g id='icons' transform='translate(56.000000, 160.000000)'> <path d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399' id='github-[#142]'> </path> </g> </g> </g> </g></svg>",
			},
			{
				id: '67173a304a8476b6667fd09c',
				name: 'Firebase',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' version='1.1' viewBox='0 0 95.39 131.07' width='50' height='50'><path fill='#FFA000' d='M.05 105.75L16.18 2.52c.2-1.27 1.18-2.26 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l45.02 85.72H.05z'></path><path fill='#F57C00' d='M55.78 65.54L38.43 32.68.05 105.75l55.73-40.21z'></path><path fill='#FFCA28' d='M95.39 105.75L83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L.05 105.75l43.12 24.18a8.94 8.94 0 008.71 0l43.51-24.18z'></path><path fill='#fff' fill-opacity='0.2' d='M83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L62.52 43.19 50.36 20.03c-.51-.98-1.53-1.59-2.64-1.59s-2.12.61-2.64 1.59l-6.65 12.66L21.75 1.57C21.15.44 19.88-.18 18.62.04s-2.25 1.22-2.44 2.48L.05 105.75H0l.05.06.42.21 77.49-77.58c.79-.79 1.95-1.08 3.02-.74s1.85 1.24 2.03 2.35l12.25 75.77.12-.07-12.35-76.46zM.19 105.61L16.18 3.26c.19-1.27 1.18-2.27 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l11.92 22.66L.19 105.61z'></path><path fill='#A52714' fill-opacity='0.2' d='M51.89 129.2a8.94 8.94 0 01-8.71 0L.16 105.09l-.1.66 43.12 24.18a8.94 8.94 0 008.71 0l43.5-24.18-.11-.69-43.39 24.14z'></path><linearGradient id='b_1_' x1='-243.479' x2='-242.436' y1='345.28' y2='344.521' gradientTransform='matrix(95 0 0 -130.9998 23127.441 45253.934)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#FFF' stop-opacity='0.1'></stop><stop offset='0.14' stop-color='#FFF' stop-opacity='0.08'></stop><stop offset='0.61' stop-color='#FFF' stop-opacity='0.02'></stop><stop offset='1' stop-color='#FFF' stop-opacity='0'></stop></linearGradient><path id='b' fill='url(#b_1_)' d='M82.91 29.3c-.19-1.1-.97-2-2.02-2.34a2.953 2.953 0 00-3 .73L62.47 43.2 50.35 20.05c-.51-.98-1.53-1.59-2.63-1.59s-2.11.61-2.63 1.59l-6.63 12.66L21.84 1.6C21.24.47 19.98-.15 18.72.07s-2.24 1.22-2.43 2.48L.22 105.73l42.97 24.17a8.882 8.882 0 008.68 0l43.34-24.17-12.3-76.43z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd09d',
				name: 'React Toast',
				image: 'https://i.ibb.co/gTdNDLs/toast.png',
			},
			{
				id: '67173a304a8476b6667fd09f',
				name: 'Node JS',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='58' height='58' viewBox='0 0 512 512'><linearGradient id='XMLID_00000118357800129798447730000005862678814579567263_' x1='337.597' x2='156.289' y1='89.494' y2='459.361' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#3f873f'></stop><stop offset='0.33' stop-color='#3f8b3d'></stop><stop offset='0.637' stop-color='#3e9638'></stop><stop offset='0.934' stop-color='#3da92e'></stop><stop offset='1' stop-color='#3dae2b'></stop></linearGradient><linearGradient id='SVGID_1_' x1='225.787' x2='733.809' y1='282.815' y2='-92.539' gradientUnits='userSpaceOnUse'><stop offset='0.138' stop-color='#3f873f'></stop><stop offset='0.402' stop-color='#52a044'></stop><stop offset='0.713' stop-color='#64b749'></stop><stop offset='0.908' stop-color='#6abf4b'></stop></linearGradient><linearGradient id='SVGID_00000048489710280204197710000009720263475330385543_' x1='24.028' x2='487.275' y1='255.987' y2='255.987' gradientUnits='userSpaceOnUse'><stop offset='0.092' stop-color='#6abf4b'></stop><stop offset='0.287' stop-color='#64b749'></stop><stop offset='0.598' stop-color='#52a044'></stop><stop offset='0.862' stop-color='#3f873f'></stop></linearGradient><path id='XMLID_143_' fill='url(#XMLID_00000118357800129798447730000005862678814579567263_)' fill-rule='evenodd' d='M268.14 3.246a24.233 24.233 0 00-24.231 0L43.22 119.058a24.226 24.226 0 00-12.125 20.994v231.802c0 8.659 4.62 16.657 12.117 20.994L243.9 508.752a24.253 24.253 0 0024.247 0l200.642-115.905a24.258 24.258 0 0012.115-20.994v-231.81c0-8.659-4.62-16.657-12.123-20.986z' clip-rule='evenodd'></path><path fill='url(#SVGID_1_)' d='M469.18 119.058L267.93 3.246c-1.985-1.147-4.112-1.968-6.299-2.507L36.08 386.577c1.935 2.865 3.818 4.803 6.355 6.271l201.592 115.905c5.71 3.296 12.496 4.067 18.723 2.346L474.577 123.21a26.411 26.411 0 00-5.397-4.152z'></path><path fill='url(#SVGID_00000048489710280204197710000009720263475330385543_)' d='M469.293 392.848c5.848-3.384 9.989-9.312 11.148-16.265L261.631.739c-5.761-1.147-12.959-.486-18.143 2.507L43.59 118.361l215.947 393.404c3.082-.42 6.1-1.417 8.863-3.012z'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd0a0',
				name: 'Express JS',
				image:
					'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">\n<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z"></path></g></g>\n</svg>',
			},
			{
				id: '67174c534a8476b6667fd0ab',
				name: 'MongoDB',
				image:
					'<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 598.88 1333.33" width="62" height="62"><g fill-rule="nonzero"><path fill="#599636" d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"></path><path fill="#6cac48" d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"></path><path fill="#c2bfbf" d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"></path></g></svg>',
			},
			{
				id: '67173a304a8476b6667fd0a3',
				name: 'JWT',
				image: 'https://jwt.io/img/pic_logo.svg',
			},
			{
				id: '67173a304a8476b6667fd0a4',
				name: 'Vercel',
				image:
					'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1L24 22H0L12 1Z" fill="#000000"></path> </g></svg>',
			},
		],
		features: [
			'This web application consists of the care of different body parts. ',
			' Viewer Read the article on different parts of their body and give us a review of that article. ',
			' Viewer cannot add or delete his/her review without signup or login.',
		],
		images: [
			'https://i.ibb.co/w4SPNxX/woodstokes-dashboard.png',
			'https://i.ibb.co/LJFJs4G/woodstokes-login.png',
			'https://i.ibb.co/cJpWWFK/woodstoks-product.png',
		],
		filter: 'dynamic',
		status: 'Active',
	},
	{
		isDeleted: false,
		id: '65a61dfccd2d7dabc69737d7',
		name: 'Type speed master',
		fullPhoto: 'https://i.ibb.co/RStLSzQ/types-speed-master.png',
		liveLink: 'https://types-speed-master.netlify.app/',
		githubClientLink: 'https://github.com/golamrabbani93/speed-master',
		highLightTech: [
			{name: 'HTML', image: 'https://cdn.simpleicons.org/html5'},
			{name: 'CSS', image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png'},
			{name: 'Tailwind', image: 'https://cdn.simpleicons.org/tailwindcss'},
			{name: 'Javascript', image: 'https://cdn.simpleicons.org/javascript'},
		],
		description:
			'This is a typing speed test website. You can test your typing speed by typing the given text. You can see your typing speed, accuracy, and time taken to type the text. You can also see the history of your typing speed.',
		descriptions: {
			head: 'Type Speed Master is a dynamic web application designed to test and improve typing skills, offering real-time feedback on speed, accuracy, and history tracking.',
			founders:
				'<strong>Type Speed Master</strong> is an engaging typing speed test platform built with HTML, CSS, Tailwind, and TypeScript, providing users with a sleek and interactive interface to measure and track their typing performance.',
			overview:
				'Type Speed Master allows users to test their typing speed and accuracy by typing provided text, with real-time results and history tracking. Built with modern front-end technologies like Tailwind CSS and TypeScript, it ensures a responsive and user-friendly experience, hosted on Netlify for reliable performance.',
			outcome:
				'Successfully deployed on Netlify, Type Speed Master has been praised for its intuitive interface, accurate performance metrics, and responsive design, showcasing the power of modern front-end development for skill-building applications.',
		},
		Challenges: {
			title: 'Challenges & Learnings',
			points: [
				{
					pointTitle: '⌨️ Building a Typing Speed Test Platform',
					description:
						'Developing Type Speed Master required implementing real-time typing detection and accurate calculation of speed and accuracy metrics.',
				},
				{
					pointTitle: '📊 Tracking and Displaying Performance Data',
					description:
						'Creating a system to track and display typing speed, accuracy, and history demanded efficient state management and dynamic UI updates.',
				},
				{
					pointTitle: '📱 Ensuring Responsive Design',
					description:
						'Using Tailwind CSS to create a responsive and visually appealing interface required extensive testing across various devices and screen sizes.',
				},
				{
					pointTitle: '🔍 Type-Safe Development with TypeScript',
					description:
						'Implementing TypeScript for type-safe coding ensured a robust codebase, reducing errors and improving maintainability during development.',
				},
				{
					pointTitle: '🚀 Deploying on Netlify',
					description:
						'Configuring Netlify for static site hosting required optimizing build processes to ensure fast and reliable access to the application.',
				},
			],
		},
		keyFeatures: [
			{
				featureTitle: '⌨️ Typing Speed Test',
				description:
					'Users can test their typing speed by entering provided text, with real-time feedback on words per minute (WPM) and accuracy.',
			},
			{
				featureTitle: '📊 Performance Metrics',
				description:
					'The platform displays detailed metrics, including typing speed, accuracy, and time taken, helping users gauge their performance.',
			},
			{
				featureTitle: '📜 History Tracking',
				description:
					'Users can view their typing history, allowing them to track progress and improvement over time.',
			},
			{
				featureTitle: '📱 Responsive Design',
				description:
					'Built with Tailwind CSS, the platform offers a seamless and responsive experience across desktops, tablets, and mobile devices.',
			},
			{
				featureTitle: '🔍 Type-Safe Codebase',
				description:
					'TypeScript ensures a reliable and maintainable codebase, enhancing development efficiency and reducing potential errors.',
			},
		],
		technologies: [
			{
				id: '67173a304a8476b6667fd08d',
				name: 'HTML',
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' x='0' y='0' enable-background='new 0 0 434.1 434.1' version='1.1' viewBox='0 0 434.1 434.1' xml:space='preserve' width='58' height='58'> <path fill='#fff' d='M82.7 44.3H362.2V366.7H82.7z'> </path><path fill='#FC490B' d='M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z'> </path></svg>",
			},
			{
				id: '67173a304a8476b6667fd08e',
				name: 'CSS',
				image: 'https://res.cloudinary.com/dolttvkme/image/upload/css_kp9zol.png',
			},
			{
				id: '67173a304a8476b6667fd096',
				name: 'TypeScript',
				image:
					"<svg fill='none' height='26' viewBox='0 0 27 26' width='27' xmlns='http://www.w3.org/2000/svg'><path clip-rule='evenodd' d='m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z' fill='#fff' fill-rule='evenodd'></path></svg>",
			},
			{
				id: '67173a304a8476b6667fd09b',
				name: 'Github',
				image:
					"<svg viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Dribbble-Light-Preview' transform='translate(-140.000000, -7559.000000)' fill='#ffffff'> <g id='icons' transform='translate(56.000000, 160.000000)'> <path d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399' id='github-[#142]'> </path> </g> </g> </g> </g></svg>",
			},
			{
				id: '671768454a8476b6667fd0d2',
				name: 'Netlify',
				image:
					"<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' fill='#000000'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <defs> <radialGradient id='a' cy='0%' r='100.11%' fx='50%' fy='0%' gradientTransform='matrix(0 .9989 -1.152 0 .5 -.5)'> <stop offset='0%' stop-color='#20C6B7'></stop> <stop offset='100%' stop-color='#4D9ABF'></stop> </radialGradient> </defs> <path fill='url(#a)' d='M28.589 14.135l-.014-.006c-.008-.003-.016-.006-.023-.013a.11.11 0 0 1-.028-.093l.773-4.726 3.625 3.626-3.77 1.604a.083.083 0 0 1-.033.006h-.015c-.005-.003-.01-.007-.02-.017a1.716 1.716 0 0 0-.495-.381zm5.258-.288l3.876 3.876c.805.806 1.208 1.208 1.355 1.674.022.069.04.138.054.209l-9.263-3.923a.728.728 0 0 0-.015-.006c-.037-.015-.08-.032-.08-.07 0-.038.044-.056.081-.071l.012-.005 3.98-1.684zm5.127 7.003c-.2.376-.59.766-1.25 1.427l-4.37 4.369-5.652-1.177-.03-.006c-.05-.008-.103-.017-.103-.062a1.706 1.706 0 0 0-.655-1.193c-.023-.023-.017-.059-.01-.092 0-.005 0-.01.002-.014l1.063-6.526.004-.022c.006-.05.015-.108.06-.108a1.73 1.73 0 0 0 1.16-.665c.009-.01.015-.021.027-.027.032-.015.07 0 .103.014l9.65 4.082zm-6.625 6.801l-7.186 7.186 1.23-7.56.002-.01c.001-.01.003-.02.006-.029.01-.024.036-.034.061-.044l.012-.005a1.85 1.85 0 0 0 .695-.517c.024-.028.053-.055.09-.06a.09.09 0 0 1 .029 0l5.06 1.04zm-8.707 8.707l-.81.81-8.955-12.942a.424.424 0 0 0-.01-.014c-.014-.019-.029-.038-.026-.06.001-.016.011-.03.022-.042l.01-.013c.027-.04.05-.08.075-.123l.02-.035.003-.003c.014-.024.027-.047.051-.06.021-.01.05-.006.073-.001l9.921 2.046a.164.164 0 0 1 .076.033c.013.013.016.027.019.043a1.757 1.757 0 0 0 1.028 1.175c.028.014.016.045.003.078a.238.238 0 0 0-.015.045c-.125.76-1.197 7.298-1.485 9.063zm-1.692 1.691c-.597.591-.949.904-1.347 1.03a2 2 0 0 1-1.206 0c-.466-.148-.869-.55-1.674-1.356L8.73 28.73l2.349-3.643c.011-.018.022-.034.04-.047.025-.018.061-.01.091 0a2.434 2.434 0 0 0 1.638-.083c.027-.01.054-.017.075.002a.19.19 0 0 1 .028.032L21.95 38.05zM7.863 27.863L5.8 25.8l4.074-1.738a.084.084 0 0 1 .033-.007c.034 0 .054.034.072.065a2.91 2.91 0 0 0 .13.184l.013.016c.012.017.004.034-.008.05l-2.25 3.493zm-2.976-2.976l-2.61-2.61c-.444-.444-.766-.766-.99-1.043l7.936 1.646a.84.84 0 0 0 .03.005c.049.008.103.017.103.063 0 .05-.059.073-.109.092l-.023.01-4.337 1.837zM.831 19.892a2 2 0 0 1 .09-.495c.148-.466.55-.868 1.356-1.674l3.34-3.34a2175.525 2175.525 0 0 0 4.626 6.687c.027.036.057.076.026.106-.146.161-.292.337-.395.528a.16.16 0 0 1-.05.062c-.013.008-.027.005-.042.002H9.78L.831 19.891zm5.68-6.403l4.491-4.491c.422.185 1.958.834 3.332 1.414 1.04.44 1.988.84 2.286.97.03.012.057.024.07.054.008.018.004.041 0 .06a2.003 2.003 0 0 0 .523 1.828c.03.03 0 .073-.026.11l-.014.021-4.56 7.063c-.012.02-.023.037-.043.05-.024.015-.058.008-.086.001a2.274 2.274 0 0 0-.543-.074c-.164 0-.342.03-.522.063h-.001c-.02.003-.038.007-.054-.005a.21.21 0 0 1-.045-.051l-4.808-7.013zm5.398-5.398l5.814-5.814c.805-.805 1.208-1.208 1.674-1.355a2 2 0 0 1 1.206 0c.466.147.869.55 1.674 1.355l1.26 1.26-4.135 6.404a.155.155 0 0 1-.041.048c-.025.017-.06.01-.09 0a2.097 2.097 0 0 0-1.92.37c-.027.028-.067.012-.101-.003-.54-.235-4.74-2.01-5.341-2.265zm12.506-3.676l3.818 3.818-.92 5.698v.015a.135.135 0 0 1-.008.038c-.01.02-.03.024-.05.03a1.83 1.83 0 0 0-.548.273.154.154 0 0 0-.02.017c-.011.012-.022.023-.04.025a.114.114 0 0 1-.043-.007l-5.818-2.472-.011-.005c-.037-.015-.081-.033-.081-.071a2.198 2.198 0 0 0-.31-.915c-.028-.046-.059-.094-.035-.141l4.066-6.303zm-3.932 8.606l5.454 2.31c.03.014.063.027.076.058a.106.106 0 0 1 0 .057c-.016.08-.03.171-.03.263v.153c0 .038-.039.054-.075.069l-.011.004c-.864.369-12.13 5.173-12.147 5.173-.017 0-.035 0-.052-.017-.03-.03 0-.072.027-.11a.76.76 0 0 0 .014-.02l4.482-6.94.008-.012c.026-.042.056-.089.104-.089l.045.007c.102.014.192.027.283.027.68 0 1.31-.331 1.69-.897a.16.16 0 0 1 .034-.04c.027-.02.067-.01.098.004zm-6.246 9.185l12.28-5.237s.018 0 .035.017c.067.067.124.112.179.154l.027.017c.025.014.05.03.052.056 0 .01 0 .016-.002.025L25.756 23.7l-.004.026c-.007.05-.014.107-.061.107a1.729 1.729 0 0 0-1.373.847l-.005.008c-.014.023-.027.045-.05.057-.021.01-.048.006-.07.001l-9.793-2.02c-.01-.002-.152-.519-.163-.52z'></path> </g></svg>",
			},
		],
		features: [
			'This is a typing speed test website.',
			'You can test your typing speed by typing the given text.',
			'You can see your typing speed, accuracy, and time taken to type the text.',
			'You can also see the history of your typing speed.',
		],
		images: [
			'https://i.ibb.co/GQHxqb8/speed-1.png',
			'https://i.ibb.co/NSSJLVK/speed-2.png',
			'https://i.ibb.co/d2gV81x/speed-3.png',
		],
		filter: 'dynamic',
		status: 'Active',
	},
];
