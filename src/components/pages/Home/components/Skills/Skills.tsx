import TechLists from './components/TechLists/TechLists';
import TechTitleBanner from './components/TechTitleBanner/TechTitleBanner';

const Skills = () => {
	return (
		<section
			className="relative mx-auto mt-10 flex h-full flex-col rounded-3xl py-0 md:mt-40 md:px-10"
			id="skills"
		>
			<TechTitleBanner />
			<TechLists />
		</section>
	);
};

export default Skills;
