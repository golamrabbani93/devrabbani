import {IProject} from '@/types/projects.interface';
import Content from './components/Content/Content';
// import ContentNavigation from './components/ContentNavigation/ContentNavigation';

const Article = ({project}: {project: IProject}) => {
	return (
		<main id="nd-docs-layout" className="flex flex-1 flex-col transition-[margin] md:px-12">
			<div
				id="nd-page"
				className="flex flex-1 mx-auto w-full"
				style={{
					paddingTop: 'calc(var(--fd-nav-height) + var(--fd-tocnav-height))',
					maxWidth:
						'min(var(--fd-page-width),calc(var(--fd-layout-width) - var(--fd-sidebar-width)))',
				}}
			>
				{/* Component Content */}
				<Content project={project} />
				{/* <ContentNavigation /> */}
			</div>
		</main>
	);
};

export default Article;
