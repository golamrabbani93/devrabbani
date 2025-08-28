export const projects = [
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
			{name: 'CSS', image: 'https://cdn.simpleicons.org/css3'},
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
];
