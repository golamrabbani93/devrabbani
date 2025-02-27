import React, {useEffect, useRef, useState} from 'react';
import TopTitle from './components/TopTitle/TopTitle';
import Project from './components/Project/Project';
import ProjectContent from './components/ProjectContent/ProjectContent';

type ProjectType = {
	id: string;
	title: string;
	content: string;
};

// Projects Data Array
const projectsData: ProjectType[] = [
	{
		id: 'project1',
		title: 'Project 1',
		content:
			'Detailed information about Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 'project2',
		title: 'Project 2',
		content:
			'Detailed information about Project 2. Nulla facilisi. Integer malesuada pellentesque felis.',
	},
	{
		id: 'project3',
		title: 'Project 3',
		content:
			'Detailed information about Project 3. Aenean commodo ligula eget dolor. Aenean massa.',
	},
];

const Projects = () => {
	const [activeSection, setActiveSection] = useState<string>(projectsData[0].id);

	// Create refs dynamically for each project
	const projectRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: 0.6, // Trigger when 60% of the section is visible
			},
		);

		// Observe each project section
		Object.keys(projectRefs.current).forEach((key) => {
			if (projectRefs.current[key]) {
				observer.observe(projectRefs.current[key]!);
			}
		});

		return () => {
			Object.keys(projectRefs.current).forEach((key) => {
				if (projectRefs.current[key]) {
					// eslint-disable-next-line react-hooks/exhaustive-deps
					observer.unobserve(projectRefs.current[key]!);
				}
			});
		};
	}, []);

	return (
		<section
			id="work"
			className="relative mx-auto mt-28 w-full max-w-7xl py-10"
			style={{opacity: 1, transform: 'none'}}
		>
			{/* Top Title */}
			<TopTitle />

			<div className="relative mx-auto flex w-full">
				{/* Project Cards */}
				<div className="mx-auto flex max-w-2xl flex-col gap-y-6 md:gap-y-24 lg:max-w-[65%]">
					{projectsData.map((project) => (
						<div
							key={project.id}
							ref={(el) => {
								projectRefs.current[project.id] = el;
							}}
							id={project.id}
							className="min-h-screen"
						>
							<Project />
						</div>
					))}
				</div>

				{/* Sticky Sidebar for Project Details */}
				<div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
					<div className="sticky top-40 space-y-8 transition-all duration-300">
						<ProjectContent
							title={projectsData.find((project) => project.id === activeSection)?.title || ''}
							content={projectsData.find((project) => project.id === activeSection)?.content || ''}
						/>
					</div>
				</div>
			</div>

			<a
				className="flex justify-center gap-2 text-neutral-300 transition-colors hover:text-neutral-100 md:mt-16"
				href="/project"
			>
				See more projects
				<div className="rounded-full bg-white/5 p-0.5 backdrop-blur-xs">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-chevron-right"
					>
						<path d="m9 18 6-6-6-6"></path>
					</svg>
				</div>
			</a>
		</section>
	);
};

export default Projects;
