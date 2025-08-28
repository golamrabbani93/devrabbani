export const projects = [
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
			{name: 'CSS', image: 'https://cdn.simpleicons.org/css3'},
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
				image:
					"<svg xmlns='http://www.w3.org/2000/svg' width='55' height='55' fill='none' viewBox='0 0 54 54'><path fill='#2196F3' d='M3.375 0l4.303 48.6L27 54l19.315-5.397L50.625 0H3.375z'></path><path fill='#FAFAFA' d='M41.426 15.893l-.544 6.105-1.64 18.303-12.241 3.385-.01.003-12.234-3.388-.854-9.572h5.994l.445 4.965 6.652 1.795.004-.003 6.662-1.795.908-8.273-20.952.058-.594-5.657 22.049-.26.445-6.054-23.085.064-.388-5.633h29.916l-.533 5.957z'></path></svg>",
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
				id: '67173a304a8476b6667fd0a0',
				name: 'Express JS',
				image:
					'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">\n<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z"></path></g></g>\n</svg>',
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
];
