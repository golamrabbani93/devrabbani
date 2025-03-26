'use client';

import React, {useEffect, useRef, useState} from 'react';
import TopTitle from './components/TopTitle/TopTitle';
import Project from './components/Project/Project';
import ProjectContent from './components/ProjectContent/ProjectContent';
import {IProjects} from '@/types/projects.interface';
import Link from 'next/link';

const Projects = ({projects, more}: {projects: IProjects[]; more?: boolean}) => {
	const [activeSection, setActiveSection] = useState<string>(projects[0].id);

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
				threshold: 0.8, // Trigger when 60% of the section is visible
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
		<>
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
						{projects.map((project) => (
							<div
								key={project.id}
								ref={(el) => {
									projectRefs.current[project.id] = el;
								}}
								id={project.id}
								data-id={project.id}
							>
								<>
									<Project project={project as IProjects} id={project.id} />
								</>
							</div>
						))}
					</div>

					{/* Sticky Sidebar for Project Details */}
					<div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
						<div className="sticky top-36 space-y-8 transition-all duration-300">
							<ProjectContent
								project={
									projects.slice(0, 3).find((project) => project.id === activeSection) as IProjects
								}
								// content={
								// 	projectsData.find((project) => project.id === activeSection)?.content || ''
								// }
							/>
						</div>
					</div>
				</div>

				<Link
					className={`flex justify-center gap-2 text-neutral-300 transition-colors hover:text-neutral-100 md:mt-16 ${
						more === false ? 'hidden' : ''
					}`}
					href="/projects"
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
				</Link>
			</section>
		</>
	);
};

export default Projects;
